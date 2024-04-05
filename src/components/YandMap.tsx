import * as React from "react";
import * as YMaps from "react-yandex-map";

function YandMap() {

    
    return (
        <>
        <YMaps.YMaps>
            
                My awesome application with maps!
                <YMaps.Map defaultState={{ 
                        center: [55.75, 37.57], 
                        zoom: 10,
                        controls: []
                    }} 
                    style={{ 
                        width: '640px', 
                        height: '240px' 
                        }}
                    >
                    <YMaps.FullscreenControl />
                    <YMaps.GeolocationControl options={{ float: "left" }} />
                    <YMaps.ZoomControl options={{ float: "right" }} />
                </YMaps.Map>
        </YMaps.YMaps>
        </>
        
    )
}

export default YandMap;