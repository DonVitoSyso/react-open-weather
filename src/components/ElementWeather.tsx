import * as React from "react";

function ElementWeather(props) {

    return(
        <>
            {
                
                <tr>
                    <td>{ props.element.dt_txt }</td>
                    <td>{ props.element.main.temp }</td>
                </tr>
            }
        </>
    )
}

export default ElementWeather;