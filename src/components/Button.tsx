import * as React from "react";
import * as YMaps from "react-yandex-map";
// import { Geocoder } from "react-native-yamap";

function Button() {
    const GetWeather = () => {
        // Осуществляет поиск объекта с именем "Москва".
        // Полученный результат сразу отображается на карте.
        // var myGeocoder = YMaps.ymaps.geocode("Moscow");
        // myGeocoder.then(
        //     function (res) {
        //         map.geoObjects.add(res.geoObjects);
        //         // Выведем в консоль данные, полученные в результате геокодирования объекта.
        //         console.log(res.geoObjects.get(0).properties.get('metaDataProperty').getAll());
        //     },
        //     function (err) {
        //         // Обработка ошибки.
        //     }
        // );
        // Geocoder.init('5825204a-f95c-4c70-bbce-39b406b454e4');
        // вернет адрес
        // Geocoder.geoToAddress(geo: Point);
        // вернет координаты
        console.log('Module button click!');
    }

    return (
        <>
            <input type="button" value="Погода на день" />
            <input type="button" onClick={GetWeather} value="Погода на 5 день" />
        </>
    )
}

export default Button;