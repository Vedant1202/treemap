import React from 'react';

import './home-page.styles.scss';
import ProfileSidebar from '../../components/profile-sidebar/profile-sidebar.component';
import config from '../../config/config';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import reqwest from 'reqwest';

const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = config.mapboxToken;

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maps: null,
            latitude: null,
            longitude: null,
            markers: [],
        };
    }

    fetchData = (callback) => {
        const { user } = this.props;
        reqwest({
            url: config.apiUrl + 'trees',
            type: 'json',
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Authorization: `Bearer ${user.tokens.access.token}`,
            },
            contentType: 'application/json',
            success: (res) => {
                callback(res);
            },
        });
    };

    componentDidMount = () => {
        this.fetchData((res) => {
            this.setState(
                {
                    markers: res.results,
                },
                () => {
                    navigator.geolocation.getCurrentPosition((g) => {
                        const { latitude, longitude } = g.coords;

                        const map = new mapboxgl.Map({
                            container: this.mapContainer,
                            style: 'mapbox://styles/mapbox/streets-v11',
                            center: [Number(longitude), Number(latitude)],
                            zoom: 13,
                        });

                        this.setState(
                            {
                                latitude,
                                longitude,
                            },
                            () => {
                                res.results.forEach((treeData) => {
                                    let coords = [treeData.longitude, treeData.latitude];

                                    let popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
                                        `
                                    <strong>${treeData.common_name}</strong><p>
                                    <img src="${treeData.image_url}" style="max-width: 120px"></img>
                                    <p>
                                        Put up by: ${treeData.user_by.name} <br>
                                        Latitude: ${treeData.latitude} <br>
                                        Longitude: ${treeData.longitude} <br>
                                    </p>
                                `
                                    );

                                    // create the marker
                                    new mapboxgl.Marker()
                                        .setLngLat(coords)
                                        .setPopup(popup) // sets a popup on this marker
                                        .addTo(map);
                                });

                                // eslint-disable-next-line
                                const marker = new mapboxgl.Marker({ color: '#f00' })
                                    .setLngLat([Number(longitude), Number(latitude)])
                                    .addTo(map);

                                // Add zoom and rotation controls to the map.
                                map.addControl(new mapboxgl.NavigationControl());
                            }
                        );
                    });
                }
            );
        });
    };

    render() {
        const { latitude, longitude } = this.state;

        return (
            <div className="home-page-div">
                <ProfileSidebar latitude={latitude} longitude={longitude} />
                <div id="mapbox-maps-div" ref={(el) => (this.mapContainer = el)} className="mapContainer"></div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

export default connect(mapStateToProps)(HomePage);
