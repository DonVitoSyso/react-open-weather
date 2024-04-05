import { object } from "prop-types";
import * as React from "react";

function Geo() {
    var crd;
    const [crd_lgt, setLng] = React.useState();
    const [crd_ltd, setLtd] = React.useState();

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };


    function success(pos: any) {
        crd = pos.coords;
    
        console.log("Ваше текущее местоположение:");
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
        console.log(typeof(crd))
        setLng(crd.longitude);
    }
    
    function error(err: any) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
        <>
            <h2> Crd lng - {crd_lgt}</h2>
        </>
    );
}

export default Geo;