import * as React from "react";
import { Table } from "react-bootstrap";
import ElementWeather from "./ElementWeather";
import axios from "axios";

function TableWeather (props) {
    // const [lenghtData, getStat] = React.useState(false);
    // const [weather, GetWeather] = React.useState([]);
    
    // if(!props.length) {
    //     axios.get("https://api.openweathermap.org/data/2.5/forecast?q=Клинцы,ru&APPID=fe4c586fd2c32a2e3e13d3ad079f4ea1").then(res => {
    //         console.log(res);
    //         GetWeather(res.data);
    //     });
    // }
    const test = [0, 1, 2, 3, 4];

    return (
        <>
            <br>
            </br>
            {
                console.log(props.data)
            }
            "Table Weather Block"
            { props.lenght }
            { test[0] }
            <Table striped bordered hover className="weather">
                <thead>
                    <tr><th>Data and time</th><th>Temperature</th></tr>
                </thead>
                <tbody>
                {
                    props.map(weathers => <ElementWeather element={ weathers } />)
                    // props.map(weathers => <ElementWeather element={ weathers } />)
                }
                </tbody>
            </Table>
            
        </>
    )
}

export default TableWeather;