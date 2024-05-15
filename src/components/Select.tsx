import * as React from "react";
import { Form } from "react-bootstrap";
import Button from "./Button";

function Select() {


    // function SelectRegion(select){
    //     const inputText = document.getElementById('my-input')
    //     console.log(inputText.value)
    // }

    return(
        <>
            <div className="select">
                <h3> Список городов для выбора </h3>
                <h3> (или введите город самостоятельно) </h3>
                
                {/* <input id="my-input" type="text" list="CityList" placeholder="Введите город" onChange={() => SelectRegion(this)} /> */}
                <input id="my-input" type="text" list="CityList" placeholder="Введите город" />
                    <datalist id="CityList">
                        <option value="Москва"></option>
                        <option value="Санкт-Петербург"></option>
                        <option value="Красноярск"></option>
                        <option value="Владивосток"></option>
                    </datalist>
            </div>
        </>
    )
}

export default Select;