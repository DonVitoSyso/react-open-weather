import * as React from "react";
import Geo from "./Geo";
import Header from "./Header";
import NavbarMy from "./NavbarMy";
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableWeather from "./TableWeather";

function App() {
    return (
        <>
            <Header />
            <NavbarMy>
                
            </NavbarMy>
            <Button />
            {/* <Geo /> */}
        </>
    );
}

export default App;