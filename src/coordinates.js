function show()
{
//заносим текст формы в переменную
var t=document.forma1.Address.value;
//определяем координаты по адресу: Москва, Тимирязевская ул. 49
ymaps.geocode(t,{results:1}).then(
function(res){  var MyGeoObj = res.geoObjects.get(0);
//извлечение координат
document.getElementById('one').value = MyGeoObj.geometry.getCoordinates()[0];
document.getElementById('two').value = MyGeoObj.geometry.getCoordinates()[1];
//добавляем метку на карте
var myPlacemark = new ymaps.Placemark([MyGeoObj.geometry.getCoordinates()[0], MyGeoObj.geometry.getCoordinates()[1]]);
myMap.geoObjects.add(myPlacemark);
});
}