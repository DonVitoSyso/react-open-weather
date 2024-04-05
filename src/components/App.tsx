import * as React from "react";
import Geo from "./Geo";
import Header from "./Header";
import NavbarMy from "./NavbarMy";
import Button from "./Button";

function App() {
    return (
        <>
            <Header />
            <NavbarMy>
                <Button />
            </NavbarMy>
            
            <h1>Hello world!</h1>
            <Geo />
        </>
    );
}

export default App;