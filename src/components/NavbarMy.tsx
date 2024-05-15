import * as React from "react";
import Select from "./Select";
import "../style/Header.css";

function NavbarMy(prop) {
    const butt = prop.children
    
    return(
        <header className="NavbarMy">
            <Select />
            {butt}
        </header>
    )
}

export default NavbarMy;