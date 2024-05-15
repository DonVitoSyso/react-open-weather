import * as React from "react";
import * as YMaps from "react-yandex-map";
import axios from "axios";
import TableWeather from "./TableWeather";
import { Table } from "react-bootstrap";
import ElementWeather from "./ElementWeather";

function Button() {
    const [weather, GetWeather] = React.useState([]);
    const [temp_weather, GetTempWeather] = React.useState([]);
    const [OldInputText, SetText] = React.useState("");
    const [flag, SetFlag] = React.useState(0);

    function Weather(Flag){
        const inputText = document.getElementById('my-input').value

        if (Flag != flag) {
            SetFlag(Flag)
        }

        if( (!weather.length || OldInputText != inputText) && inputText != "" ) {
            axios.get("https://api.openweathermap.org/data/2.5/forecast?q="+inputText+",ru&APPID=3a34674795001ce5db5c9dfab2640728").then(res => {
                GetWeather(res.data.list);
                SetText(inputText);
            })
        }
        
        if( weather != temp_weather){
            if (flag == 5) { GetTempWeather(weather) }
            if (flag == 1 && !temp_weather.length) { GetWethOnDay() }
        }
        else {
            if (flag == 1) { GetWethOnDay() }
        }
    }

    function GetWethOnDay(){
        console.log("Start func getWeatherOnDay")

        let TodayStr = ""
        let TempWeather = []

        if(weather.length)
            TodayStr = weather[0].dt_txt.substr(8,2)    // get data today

            for(let i = 0; i < weather.length; i++){
                if (weather[i].dt_txt.substr(8,2) == TodayStr){
                    TempWeather.push(weather[i])
                }
            }

            GetTempWeather(TempWeather)
    }

    function setTabWeth(flg){
        console.log("flg - ", flg, "flag - ", flag)

        if (flg)
        {

            Weather(flag)
            console.log("Hello!", flg)

            return (
                // Temp block
                <Table striped bordered hover className="weather">
                    <thead>
                        <tr><th>Data and time</th><th>Temperature</th></tr>
                    </thead>
                    {
                        temp_weather.length == 0 ?
                        <tbody></tbody>
                        : 
                        <tbody>
                        {
                            temp_weather.length == 1 ?
                            <ElementWeather key={ temp_weather[0].dt } element={ temp_weather[0] } flag={ flag }/>
                            :
                            temp_weather.map(
                                weathers => <ElementWeather key={ weathers.dt } element={ weathers } flag={ flag }/>
                            )
                            // props.map(weathers => <ElementWeather element={ weathers } />)
                        }
                        </tbody>
                    }
                    
                </Table>
            )
        }
    }

    return (
        <>
            <div className="NavbarMy">
                {/* <input type="button" onClick={() => setTabWeth(1)} value="Погода на день" /> */}
                <input type="button" onClick={() => Weather(1)} value="Погода на день" />
                <input type="button" onClick={() => Weather(5)} value="Погода на 5 день" />
            </div>
            <div>
                {
                    setTabWeth(weather.length)
                }
            </div>
        </>
    )
}

export default Button;