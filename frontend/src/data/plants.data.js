const plantsData = [
    {
        "botanical_name": "Abies webbiana leaf ",
        "common_indian_name": "Talispatra ",
        "use": "Carminative, expectorant "
    },
    {
        "botanical_name": "Abroma augusta root ",
        "common_indian_name": "Ulatkambal ",
        "use": "Uterine tonic "
    },
    {
        "botanical_name": "Abrus precatorius seed ",
        "common_indian_name": "Gunja ",
        "use": "Abortifacient "
    },
    {
        "botanical_name": "Abutilon indicum seed ",
        "common_indian_name": "Kankati ",
        "use": "Aphrodisiac "
    },
    {
        "botanical_name": "Acacia arabica bark ",
        "common_indian_name": "Babul ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Acacia catechu gum ",
        "common_indian_name": "Catechu ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Acacia concinna pods ",
        "common_indian_name": "Shikakai ",
        "use": "Detergent "
    },
    {
        "botanical_name": "Achillea millefolium seeds ",
        "common_indian_name": "Gandana ",
        "use": "Stimulant, Tonic "
    },
    {
        "botanical_name": "Achyranthes aspera plant ",
        "common_indian_name": "Apamarga ",
        "use": "Alterative, Diuretic "
    },
    {
        "botanical_name": "Aconitum heterophyllum plant ",
        "common_indian_name": "Atis ",
        "use": "Antiperiodic, Aphrodisiac "
    },
    {
        "botanical_name": "Aconitum spp. root ",
        "common_indian_name": "Bachnag ",
        "use": "Antipyretic "
    },
    {
        "botanical_name": "Acorus calamus rhizome ",
        "common_indian_name": "Bach ",
        "use": "Antispasmodic "
    },
    {
        "botanical_name": "Adhatoda vasica leaf ",
        "common_indian_name": "Adulsa ",
        "use": "Expectorant "
    },
    {
        "botanical_name": "Aegle marmelos leaf ",
        "common_indian_name": "Bael ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Aegle marmelos unripe fruit ",
        "common_indian_name": "Bael ",
        "use": "Haemostatic, Anti-dysentery "
    },
    {
        "botanical_name": "Albizzia lebbeck bark ",
        "common_indian_name": "Siris ",
        "use": "Anti-inflammatory "
    },
    {
        "botanical_name": "Allium cepa bulbs ",
        "common_indian_name": "Onions ",
        "use": "Hypolipidemic Anticholesteremic "
    },
    {
        "botanical_name": "Allium sativum bulbs ",
        "common_indian_name": "Garlic ",
        "use": "Antilipemic, Anticholesteremic Antirheumatic "
    },
    {
        "botanical_name": "Aloe vera leaf ",
        "common_indian_name": "Ghrita kumari ",
        "use": "Purgative, Anti-cancer "
    },
    {
        "botanical_name": "Alpinia galanga rhizome ",
        "common_indian_name": "Khulanjan ",
        "use": "In bronchial catarrhal "
    },
    {
        "botanical_name": "Alstonia scholaris bark ",
        "common_indian_name": "Saptaparna ",
        "use": "Alterative, Stimulant "
    },
    {
        "botanical_name": "Anacyclus pyrethrum flowers ",
        "common_indian_name": "Akarkara ",
        "use": "Stimulant, Sialogogue "
    },
    {
        "botanical_name": "Andrographis paniculata plant ",
        "common_indian_name": "Kalmegh ",
        "use": "Hepatoprotectant, Anti-viral "
    },
    {
        "botanical_name": "Anethum sowa seed ",
        "common_indian_name": "Suwa ",
        "use": "Carminative "
    },
    {
        "botanical_name": "Aphanamixis rohituka bark ",
        "common_indian_name": "Rohitika ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Apium graveolens seed ",
        "common_indian_name": "Ajmod ",
        "use": "Carminative "
    },
    {
        "botanical_name": "Argyreia speciosa root ",
        "common_indian_name": "Samudra palak ",
        "use": "Alterative, Tonic "
    },
    {
        "botanical_name": "Asparagus adscendens root ",
        "common_indian_name": "Safed musli ",
        "use": "Tonic, Galactogogue "
    },
    {
        "botanical_name": "Asparagus racemosus root ",
        "common_indian_name": "Shatavari ",
        "use": "Galactogogue, Aphrodisiac "
    },
    {
        "botanical_name": "Asphaltum ",
        "common_indian_name": "Shilajit ",
        "use": "Detoxificant "
    },
    {
        "botanical_name": "Asteracantha longifolia herb ",
        "common_indian_name": "Kuliakhara ",
        "use": "Antirheumatic "
    },
    {
        "botanical_name": "Atropa belladonna leaf ",
        "common_indian_name": "Angurshefa ",
        "use": "Antispasmodic, Sedative "
    },
    {
        "botanical_name": "Atropa belladonna root ",
        "common_indian_name": "Angurshefa ",
        "use": "Antispasmodic, Sedative "
    },
    {
        "botanical_name": "Azadirachta indica bark ",
        "common_indian_name": "Neem ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Azadirachta indica leaf ",
        "common_indian_name": "Neem ",
        "use": "Blood purifier "
    },
    {
        "botanical_name": "Bacopa monnieri herb ",
        "common_indian_name": "Nir brahmi ",
        "use": "Memory stimulant "
    },
    {
        "botanical_name": "Barleria prionitis herb ",
        "common_indian_name": "Vajradanti ",
        "use": "In Glandular swelling, Toothache "
    },
    {
        "botanical_name": "Bauhinia variegata bark ",
        "common_indian_name": "Kachnar ",
        "use": "Alterative, Tonic "
    },
    {
        "botanical_name": "Berberis aristata root ",
        "common_indian_name": "Daru haridra ",
        "use": "Emmenagogue, Cholagogue "
    },
    {
        "botanical_name": "Bergenia ligulata root ",
        "common_indian_name": "Pashanbheda ",
        "use": "In urinary calculi "
    },
    {
        "botanical_name": "Boerhaavia diffusa root ",
        "common_indian_name": "Punarnava ",
        "use": "Diuretic "
    },
    {
        "botanical_name": "Boswellia serrata gum ",
        "common_indian_name": "Shallaki ",
        "use": "Anti-arthritic "
    },
    {
        "botanical_name": "Butea frondosa flowers ",
        "common_indian_name": "Palas ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Caesalpinia bonducella nut ",
        "common_indian_name": "Fevernut ",
        "use": "Antipyretic "
    },
    {
        "botanical_name": "Calotropis gigantea root ",
        "common_indian_name": "Ak ",
        "use": "Emetic, Antiperiodic "
    },
    {
        "botanical_name": "Camellia sinensis ",
        "common_indian_name": "Green tea ",
        "use": "Anti-oxidant "
    },
    {
        "botanical_name": "Capparis spinosa root ",
        "common_indian_name": "Kabra ",
        "use": "Analgesic, Antirheumatic "
    },
    {
        "botanical_name": "Capsicum spp. fruit ",
        "common_indian_name": "Lalmirch ",
        "use": "Antirheumatic "
    },
    {
        "botanical_name": "Cassia angustifolia leaf ",
        "common_indian_name": "Senna ",
        "use": "Laxative "
    },
    {
        "botanical_name": "Cassia angustifolia pods ",
        "common_indian_name": "Senna ",
        "use": "Laxative "
    },
    {
        "botanical_name": "Cassia fistula fruit ",
        "common_indian_name": "Amaltas ",
        "use": "Laxative "
    },
    {
        "botanical_name": "Cassia occidentalis fruit ",
        "common_indian_name": "Kasondi ",
        "use": "Purgative "
    },
    {
        "botanical_name": "Cedrus deodara wood ",
        "common_indian_name": "Deodar ",
        "use": "Antirheumatic "
    },
    {
        "botanical_name": "Celastrus paniculatus seed ",
        "common_indian_name": "Malkangni ",
        "use": "Antirheumatic "
    },
    {
        "botanical_name": "Centella asiatica ",
        "common_indian_name": "Mandukparni ",
        "use": "Leprostatic, Memory tonic "
    },
    {
        "botanical_name": "Cephaelis ipecacuanha root ",
        "common_indian_name": "Ipecac ",
        "use": "Emetic "
    },
    {
        "botanical_name": "Cephalandra indica leaf ",
        "common_indian_name": "Bimba ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Cicer arietinum seeds ",
        "common_indian_name": "Chana ",
        "use": "Nutritive "
    },
    {
        "botanical_name": "Cichorium intybus seeds ",
        "common_indian_name": "Kasni ",
        "use": "In enlarged spleen "
    },
    {
        "botanical_name": "Cinchona ledgeriana bark ",
        "common_indian_name": "Cinchona ",
        "use": "Anti-malarial "
    },
    {
        "botanical_name": "Cissus quadrangularis stem ",
        "common_indian_name": "Hadjora ",
        "use": "Bone healing "
    },
    {
        "botanical_name": "Citrullus colocynthis fruit ",
        "common_indian_name": "Indrayan ",
        "use": "Purgative "
    },
    {
        "botanical_name": "Citrullus colocynthis root ",
        "common_indian_name": "Indrayan ",
        "use": "Purgative, Antirheumatic "
    },
    {
        "botanical_name": "Citrus aurantium peel ",
        "common_indian_name": "Common orange ",
        "use": "Anti-oxidant "
    },
    {
        "botanical_name": "Citrus medica peel ",
        "common_indian_name": "Bijaura/Citron ",
        "use": "Anti-scurvy "
    },
    {
        "botanical_name": "Colchicum luteum corms ",
        "common_indian_name": "Suranjane ",
        "use": "For gout "
    },
    {
        "botanical_name": "Coleus forskohlii root ",
        "common_indian_name": "Coleus ",
        "use": "cAMP stimulator, Hypotensive. "
    },
    {
        "botanical_name": "Commiphora mukul gum ",
        "common_indian_name": "Guggul ",
        "use": "Antarthritic, Antilipemic, Anticholesteremic "
    },
    {
        "botanical_name": "Commiphora myrrha gum ",
        "common_indian_name": "Myrrh ",
        "use": "Mouth wash, Astringent "
    },
    {
        "botanical_name": "Coriandrum sativum seeds ",
        "common_indian_name": "Dhania ",
        "use": "Carminative "
    },
    {
        "botanical_name": "Crataeva nurvala bark ",
        "common_indian_name": "Varuna ",
        "use": "Lithotriptic "
    },
    {
        "botanical_name": "Cucumis sativus seeds ",
        "common_indian_name": "Khira ",
        "use": "Diuretic "
    },
    {
        "botanical_name": "Cuminum cyminum fruit ",
        "common_indian_name": "Zeera ",
        "use": "Carminative, Stimulant "
    },
    {
        "botanical_name": "Curcuma amada rhizome ",
        "common_indian_name": "Amba haldi ",
        "use": "Carminative, Stomachic "
    },
    {
        "botanical_name": "Curcuma longa rhizome ",
        "common_indian_name": "Turmeric ",
        "use": "Anti-inflammatory "
    },
    {
        "botanical_name": "Curculigo orchioides root ",
        "common_indian_name": "Kali musli ",
        "use": "Tonic "
    },
    {
        "botanical_name": "Cynodon dactylon herb ",
        "common_indian_name": "Dhub ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Cyperus scariosus root ",
        "common_indian_name": "Nagarmotha ",
        "use": "Intestinal disorders "
    },
    {
        "botanical_name": "DGL ",
        "common_indian_name": "Liquorice ",
        "use": "Anti-ulcer, Antacid "
    },
    {
        "botanical_name": "Dashmool ",
        "common_indian_name": "Combination ",
        "use": "Antirheumatic "
    },
    {
        "botanical_name": "Datura stramonium leaf ",
        "common_indian_name": "Dhattura ",
        "use": "Antispasmodic "
    },
    {
        "botanical_name": "Daucus carota seed ",
        "common_indian_name": "Carrot ",
        "use": "Abortifacient "
    },
    {
        "botanical_name": "Dolichos biflorus seeds ",
        "common_indian_name": "Kulthi ",
        "use": "Diuretic "
    },
    {
        "botanical_name": "Eclipta alba plant ",
        "common_indian_name": "Bhringaraj ",
        "use": "Anti-hepatotoxic "
    },
    {
        "botanical_name": "Embelia ribes seed ",
        "common_indian_name": "Vidanga ",
        "use": "Anthelmintic "
    },
    {
        "botanical_name": "Emblica officinalis fruit ",
        "common_indian_name": "Amla ",
        "use": "Anti-oxidant, Tonic "
    },
    {
        "botanical_name": "Enicostemma littorale herb ",
        "common_indian_name": "Mamijava ",
        "use": "Bitter tonic, Laxative "
    },
    {
        "botanical_name": "Ephedra vulgaris herb ",
        "common_indian_name": "Somlata ",
        "use": "Stimulant "
    },
    {
        "botanical_name": "Eugenia jambolana seed ",
        "common_indian_name": "Jamun ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Euphorbia hirta herb ",
        "common_indian_name": "Dudhi ",
        "use": "Antispasmodic "
    },
    {
        "botanical_name": "Evolvulus alsinoides plant ",
        "common_indian_name": "Shankhapushpi ",
        "use": "Memory tonic "
    },
    {
        "botanical_name": "Ferula foetida resin ",
        "common_indian_name": "Hing ",
        "use": "Carminative, Stimulant "
    },
    {
        "botanical_name": "Ficus racemosa leaf ",
        "common_indian_name": "Gular ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Ficus racemosa bark ",
        "common_indian_name": "Gular ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Foeniculum vulgare fruit ",
        "common_indian_name": "Saunf ",
        "use": "Carminative "
    },
    {
        "botanical_name": "Fumaria Officinalis herb ",
        "common_indian_name": "Pit papara ",
        "use": "Diuretic, Anthelmintic "
    },
    {
        "botanical_name": "Garcinia cambogia rind ",
        "common_indian_name": "Vilayti imli ",
        "use": "Antiobesity "
    },
    {
        "botanical_name": "Glycyrrhzia glabra root ",
        "common_indian_name": "Jati Madh ",
        "use": "Expectorant, Diuretic "
    },
    {
        "botanical_name": "Gossypium herbaceum root ",
        "common_indian_name": "Kapas/Cotton ",
        "use": "Emmenagogue,Galactagogue "
    },
    {
        "botanical_name": "Gymnema slyvestre leaf ",
        "common_indian_name": "Gudmar ",
        "use": "Antidiabetic, Diuretic "
    },
    {
        "botanical_name": "Hemidesmus indicus root ",
        "common_indian_name": "Anantamul ",
        "use": "Diaphoretic, Demulcent "
    },
    {
        "botanical_name": "Holarrhena antidysenterica seed ",
        "common_indian_name": "Indrajav ",
        "use": "Antidysenteric, Febrifuge "
    },
    {
        "botanical_name": "Holarrhena antidysenterica bark ",
        "common_indian_name": "Kurchi ",
        "use": "Antidysenteric, Anthelmintic "
    },
    {
        "botanical_name": "Hydrastis Indian root ",
        "common_indian_name": "Golden seal ",
        "use": "Emmenagogue "
    },
    {
        "botanical_name": "Hyoscyamus niger herb ",
        "common_indian_name": "Khorasani ajowan ",
        "use": "Antispasmodic, Sedative "
    },
    {
        "botanical_name": "Hypericum perforatum herb ",
        "common_indian_name": "St. John’s Wort ",
        "use": "Anti-depressant "
    },
    {
        "botanical_name": "Indigofera tinctoria plant ",
        "common_indian_name": "Neel ",
        "use": "Antiseptic, Astringent "
    },
    {
        "botanical_name": "Inula racemosa root ",
        "common_indian_name": "Pushkarmool ",
        "use": "Antirheumatic, In chronic bronchitis "
    },
    {
        "botanical_name": "Juglans regia bark ",
        "common_indian_name": "Akhrot ",
        "use": "Astringent, Antiseptic "
    },
    {
        "botanical_name": "Lawsonia alba leaf ",
        "common_indian_name": "Henna ",
        "use": "Astringent, Anti-inflammatory "
    },
    {
        "botanical_name": "Leptadenia reticulata herb ",
        "common_indian_name": "Jivanti ",
        "use": "Spermatogenic, Galactagogue "
    },
    {
        "botanical_name": "Lobelia nicotianaefolia leaf ",
        "common_indian_name": "Lobelia ",
        "use": "Antispasmodic "
    },
    {
        "botanical_name": "Mangifera indica bark ",
        "common_indian_name": "Mango/Am ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Matricaria chamomilla flower ",
        "common_indian_name": "Chamomile ",
        "use": "Antiseptic "
    },
    {
        "botanical_name": "Mentha spicata ",
        "common_indian_name": "Pudina ",
        "use": "Carminative, Stimulant "
    },
    {
        "botanical_name": "Mesua ferrea fruit & flower bud ",
        "common_indian_name": "Nagkesar ",
        "use": "Astringent, Carminative "
    },
    {
        "botanical_name": "Mimusops elegni bark ",
        "common_indian_name": "Bakul ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Momordica charantia fruit ",
        "common_indian_name": "Karela ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Morinda citrifolia fruit ",
        "common_indian_name": "Noni ",
        "use": "Stimulant "
    },
    {
        "botanical_name": "Moringa oleifera bark ",
        "common_indian_name": "Soanjna ",
        "use": "Emmenagogue, Abortifacient "
    },
    {
        "botanical_name": "Moringa oleifera leaf ",
        "common_indian_name": "Soanjna ",
        "use": "Anti- Inflammatory "
    },
    {
        "botanical_name": "Mucuna pruriens seeds ",
        "common_indian_name": "Kawanch ",
        "use": "Antiparkinsonian "
    },
    {
        "botanical_name": "Myrica nagi bark ",
        "common_indian_name": "Kaiphal ",
        "use": "Astringent, Carminative "
    },
    {
        "botanical_name": "Myristica fragrans fruit ",
        "common_indian_name": "Jaiphal ",
        "use": "Stimulant, Carminative "
    },
    {
        "botanical_name": "Nardostachys jatamansi root ",
        "common_indian_name": "Jatamansi ",
        "use": "Sedative "
    },
    {
        "botanical_name": "Nelumbo nucifera seed ",
        "common_indian_name": "Kamala ",
        "use": "Stimulant "
    },
    {
        "botanical_name": "Nigella sativa seed ",
        "common_indian_name": "Kalonji ",
        "use": "Anthelmintic, Carminative "
    },
    {
        "botanical_name": "Nyctanthes arbortristis leaf ",
        "common_indian_name": "Harsinghar ",
        "use": "Antirheumatic, Anthelmintic "
    },
    {
        "botanical_name": "Ocimum basilicumleaf ",
        "common_indian_name": "Sweet basil ",
        "use": "Stimulant, Aphrodisiac "
    },
    {
        "botanical_name": "Ocimum sanctum herb/leaf ",
        "common_indian_name": "Holy basil/Tulsi ",
        "use": "Stimulant, Immunomodulator "
    },
    {
        "botanical_name": "Oldenlandia corymbosa plant ",
        "common_indian_name": "Khet papra ",
        "use": "Liver tonic, Febrifuge "
    },
    {
        "botanical_name": "Onosma echioides root ",
        "common_indian_name": "Ratanjot ",
        "use": "In skin eruptions "
    },
    {
        "botanical_name": "Operculina turpethum root ",
        "common_indian_name": "Nisoth ",
        "use": "Purgative "
    },
    {
        "botanical_name": "Opuntia dillenii herb ",
        "common_indian_name": "Vidara ",
        "use": "Antispasmodic "
    },
    {
        "botanical_name": "Orchis mascula tubers ",
        "common_indian_name": "Salep misri ",
        "use": "Aphrodisiac, Tonic "
    },
    {
        "botanical_name": "Phyllanthus niruri herb ",
        "common_indian_name": "Bhui amla ",
        "use": "Anti-hepatotoxic "
    },
    {
        "botanical_name": "Picrorhiza kurrooa root ",
        "common_indian_name": "Kutki ",
        "use": "Anti-hepatotoxic, Tonic "
    },
    {
        "botanical_name": "Piper cubeba fruit ",
        "common_indian_name": "Kabab chini ",
        "use": "Stimulant, Carminative "
    },
    {
        "botanical_name": "Piper longum fruit ",
        "common_indian_name": "Pippali ",
        "use": "Carminative, Stimulant "
    },
    {
        "botanical_name": "Piper nigrum fruit ",
        "common_indian_name": "Kalimirch ",
        "use": "Carminative, Antiperiodic "
    },
    {
        "botanical_name": "Pistacia integerrima galls ",
        "common_indian_name": "Kakrashingi ",
        "use": "In bronchitis "
    },
    {
        "botanical_name": "Plumbago indica root ",
        "common_indian_name": "Chitrakmool ",
        "use": "In skin diseases "
    },
    {
        "botanical_name": "Podophyllum emodi rhizome ",
        "common_indian_name": "Nirbash ",
        "use": "Strong purgative "
    },
    {
        "botanical_name": "Polygala chinensis root ",
        "common_indian_name": "Senaga Indian ",
        "use": "Antipyretic, Dizziness "
    },
    {
        "botanical_name": "Pongamia glabra seed ",
        "common_indian_name": "Karanj ",
        "use": "Skin disease "
    },
    {
        "botanical_name": "Prunus serotina bark ",
        "common_indian_name": "Wild cherry ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Psoralea corylifolia seed ",
        "common_indian_name": "Babchi ",
        "use": "Antipsoriatic "
    },
    {
        "botanical_name": "Pterocarpus marsupium wood ",
        "common_indian_name": "Bijasar ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Pterocarpus santalinus bark ",
        "common_indian_name": "Red sandal wood ",
        "use": "Astringent, Antidiarrheal "
    },
    {
        "botanical_name": "Pueraria tuberosa root ",
        "common_indian_name": "Bidarikand ",
        "use": "Demulcent, Tonic "
    },
    {
        "botanical_name": "Punica granatum rind ",
        "common_indian_name": "Anar ",
        "use": "Antioxidant "
    },
    {
        "botanical_name": "Putranjiva roxburghii berries ",
        "common_indian_name": "Putranjiva ",
        "use": "Antipyretic "
    },
    {
        "botanical_name": "Pyrus malus fruit ",
        "common_indian_name": "Apple ",
        "use": "Nutritive, Natural source of Iron "
    },
    {
        "botanical_name": "Quercus infectoria galls ",
        "common_indian_name": "Majuphal ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Randia dumetorum fruit ",
        "common_indian_name": "Mainphal ",
        "use": "Antioxidant, Liver protectant "
    },
    {
        "botanical_name": "Rauwolfia serpentina root ",
        "common_indian_name": "Sarpgandha ",
        "use": "Hypotensive "
    },
    {
        "botanical_name": "Rheum emodi root ",
        "common_indian_name": "Rhubarb ",
        "use": "Blood purifier, Liver protectant "
    },
    {
        "botanical_name": "Ricinus communis leaf ",
        "common_indian_name": "Arand ",
        "use": "In jaundice, Anti-Inflammatory "
    },
    {
        "botanical_name": "Ricinus communis root ",
        "common_indian_name": "Arand ",
        "use": "Purgative "
    },
    {
        "botanical_name": "Rubia Cordifolia root ",
        "common_indian_name": "Manjistha ",
        "use": "In skin disease "
    },
    {
        "botanical_name": "Salacia reticulata root ",
        "common_indian_name": "Koranti ",
        "use": "Antirheumatic, In skin disease "
    },
    {
        "botanical_name": "Santalum album wood ",
        "common_indian_name": "Sandal wood ",
        "use": "Coolant, Anti-bacterial. "
    },
    {
        "botanical_name": "Sapindus trifoliatus fruit cortex ",
        "common_indian_name": "Ritha ",
        "use": "Detergent "
    },
    {
        "botanical_name": "Saraca indica bark ",
        "common_indian_name": "Ashoka ",
        "use": "Urinary tonic "
    },
    {
        "botanical_name": "Saussurea lappa root ",
        "common_indian_name": "Kuth ",
        "use": "Antispasmodic, Carminative "
    },
    {
        "botanical_name": "Semecarpus anacardium kernal ",
        "common_indian_name": "Godambi ",
        "use": "Antiseptic "
    },
    {
        "botanical_name": "Sida cordifolia root ",
        "common_indian_name": "Bala ",
        "use": "Stimulant "
    },
    {
        "botanical_name": "Silybum marianum seeds ",
        "common_indian_name": "Milk thistle ",
        "use": "Hepatoprotectant "
    },
    {
        "botanical_name": "Solanum nigrum berries ",
        "common_indian_name": "Makoi ",
        "use": "Expectorant, Liver tonic "
    },
    {
        "botanical_name": "Solanum xanthocarpum plant ",
        "common_indian_name": "Kantakari ",
        "use": "Expectorant, Tonic "
    },
    {
        "botanical_name": "Spinacia oleracea leaves ",
        "common_indian_name": "Spinach ",
        "use": "Antioxidant "
    },
    {
        "botanical_name": "Strychnos nux vomica seeds ",
        "common_indian_name": "Kuchla ",
        "use": "Tonic, Aphrodisiac "
    },
    {
        "botanical_name": "Swertia chirata plant ",
        "common_indian_name": "Chireta ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Symplocos racemosa bark ",
        "common_indian_name": "Lodhra ",
        "use": "Urinary tonic "
    },
    {
        "botanical_name": "Taraxacum officinale herb ",
        "common_indian_name": "Kanphul ",
        "use": "Hepatic stimulant. "
    },
    {
        "botanical_name": "Tecomella undulata bark ",
        "common_indian_name": "Rohu ",
        "use": "Astringent "
    },
    {
        "botanical_name": "Tephrosia purpurea plant ",
        "common_indian_name": "Sarphunkha ",
        "use": "Antioxidant "
    },
    {
        "botanical_name": "Terminalia arjuna bark ",
        "common_indian_name": "Arjuna ",
        "use": "Cardio vascular support, Antiarrhythemic "
    },
    {
        "botanical_name": "Terminalia belerica fruit ",
        "common_indian_name": "Bahera ",
        "use": "Detoxificant "
    },
    {
        "botanical_name": "Terminalia chebula fruit ",
        "common_indian_name": "Harir ",
        "use": "Detoxificant "
    },
    {
        "botanical_name": "Tinospora cordifolia root ",
        "common_indian_name": "Guduchi ",
        "use": "Febrifuge "
    },
    {
        "botanical_name": "Trachyspermum ammi fruit ",
        "common_indian_name": "Ajowan ",
        "use": "Carminative "
    },
    {
        "botanical_name": "Tribulus terrestris fruit ",
        "common_indian_name": "Gokhru ",
        "use": "Spermatogenic, Ovogenesis stimulator "
    },
    {
        "botanical_name": "Trichosanthes dioica leaf ",
        "common_indian_name": "Patol patra ",
        "use": "Anti-diabetic "
    },
    {
        "botanical_name": "Trigonella foenum-graecum seed ",
        "common_indian_name": "Methi ",
        "use": "Antilipemic, Anticholesteremic "
    },
    {
        "botanical_name": "Trikatu ",
        "common_indian_name": "Combination ",
        "use": "Increases bioavailability of drugs "
    },
    {
        "botanical_name": "Triphala ",
        "common_indian_name": "Combination ",
        "use": "Detoxificant "
    },
    {
        "botanical_name": "Triticum sativum bran ",
        "common_indian_name": "Wheat bran ",
        "use": "Nutritive "
    },
    {
        "botanical_name": "Triticum sativum germ ",
        "common_indian_name": "Wheat germ ",
        "use": "For skin disease "
    },
    {
        "botanical_name": "Tylophora indica leaf ",
        "common_indian_name": "Antamul ",
        "use": "Anti-asthmatic "
    },
    {
        "botanical_name": "Urginea indica bulbs ",
        "common_indian_name": "Indian Scilla ",
        "use": "Cardiac stimulant, Diuretic "
    },
    {
        "botanical_name": "Valeriana wallichii root ",
        "common_indian_name": "Tagar ",
        "use": "Sedative "
    },
    {
        "botanical_name": "Viburnum spp. bark ",
        "common_indian_name": "Narvel ",
        "use": "Uterine tonic, Emmenagogue "
    },
    {
        "botanical_name": "Viola odorata flowers ",
        "common_indian_name": "Gul banafsha ",
        "use": "Astringent, Diaphoretic "
    },
    {
        "botanical_name": "Vitex negundo leaf ",
        "common_indian_name": "Nirgundi ",
        "use": "Vermifuge, Antirheumatic "
    },
    {
        "botanical_name": "Vitis vinifera fruit/seed ",
        "common_indian_name": "Draksha ",
        "use": "Antioxidant "
    },
    {
        "botanical_name": "Wedelia calendulacea herb ",
        "common_indian_name": "Bhangra ",
        "use": "Liver tonic "
    },
    {
        "botanical_name": "Withania somnifera root ",
        "common_indian_name": "Ashwagandha ",
        "use": "Immunomodulator, Antioxidant "
    },
    {
        "botanical_name": "Woodfordia floribunda flowers ",
        "common_indian_name": "Dhai-phul ",
        "use": "For leukorrhea "
    },
    {
        "botanical_name": "Zingiber officinale rhizome ",
        "common_indian_name": "Ginger ",
        "use": "Antiarthritic, Antinauseant "
    }
]

export default plantsData;
