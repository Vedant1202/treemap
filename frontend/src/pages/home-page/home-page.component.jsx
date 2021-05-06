import React from 'react';

import './home-page.styles.scss';
import ProfileSidebar from '../../components/profile-sidebar/profile-sidebar.component';
import config from '../../config/config';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import reqwest from 'reqwest';
// eslint-disable-next-line
import { Popover } from 'antd';

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
            map: null,
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

    mapRef = React.createRef();

    changeOpacity = (evt) => {
        evt.target.style.opacity = 0.6;
    };
    
    changeOpacityToOne = (evt) => {
        evt.target.style.opacity = 1;
    };

    htmlToElement = (html) => {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    componentDidMount = () => {
        this.fetchData((res) => {
            navigator.geolocation.getCurrentPosition((g) => {
                const { latitude, longitude } = g.coords;            
            
                this.setState(
                    {
                        markers: res.results,
                    },
                    () => {
                        console.log(this.state.markers);
                        // const markersArray = [];

                        const H = window.H;
    
                        const platform = new H.service.Platform({
                            'apikey': config.apiKey,
                        });
    
    
                        // Obtain the default map types from the platform object:
                        const defaultLayers = platform.createDefaultLayers();
    
                        // Instantiate (and display) a map object:
                        const map = new H.Map(
                            this.mapRef.current,
                            defaultLayers.vector.normal.map,
                            {
                            zoom: 10,
                            center: { lat: latitude, lng: longitude }
                        });
    
                        // eslint-disable-next-line
                        const ui = H.ui.UI.createDefault(map, defaultLayers);
    
                        window.addEventListener('resize', () => map.getViewPort().resize());
    
                        //Step 3: make the map interactive
                        // MapEvents enables the event system
                        // Behavior implements default interactions for pan/zoom (also on mobile touch environments)
                        // eslint-disable-next-line
                        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    
                        this.state.markers.forEach(marker => {
                            // eslint-disable-next-line
                            const popper =  <div class="marker-element">
                                                <strong>{marker.name}</strong>
                                                <p>
                                                    Put up by: {marker.user_by.name} <br />
                                                    Latitude: {marker.latitude} <br />
                                                    Longitude: {marker.longitude} <br />
                                                </p>
                                            </div>
                            const markerDiv = 
                            // content="<div class="marker-element"><strong>${marker.name}</strong><p>Put up by: ${marker.user_by.name} <br>Latitude: ${marker.latitude} <br>Longitude: ${marker.longitude} <br></p></div>"
                            // <img src=${marker.image_url} style="max-width: '20px'" />
                                this.htmlToElement(`<Popover 
                                                        title="Plant Name: ${marker.name}, Put up by: ${marker.user_by.name} "
                                                    >
                                                        <div class="plant">
                                                            <div class="plant__leaves"></div>
                                                        </div>
                                                    </Popover>`
                                                );
                            // );

                            let domIcon = new H.map.DomIcon(markerDiv);
                            
                              // Marker for Chicago Bears home
                              let markerDom = new H.map.DomMarker({lat: marker.latitude, lng: marker.longitude}, {
                                icon: domIcon
                              });
                              markerDom.draggable = true;
                              map.addObject(markerDom);
                        });

                        var userMarker = new H.map.Marker({lat: latitude, lng: longitude});
                        map.addObject(userMarker);

                        this.setState({ 
                            map,
                            latitude,
                            longitude, 
                        });
                    }
                );
            });
        });
    };

    componentWillUnmount() {
        // Cleanup after the map to avoid memory leaks when this component exits the page
        if (this.state.map) {
            this.state.map.dispose();
        }
    }

    render() {
        const { latitude, longitude } = this.state;

        return (
            <div className="home-page-div">
                <ProfileSidebar latitude={latitude} longitude={longitude} />
                <div ref={this.mapRef} className="mapContainer" ></div>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

export default connect(mapStateToProps)(HomePage);
