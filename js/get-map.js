import { activepage } from './disabled-page.js';
import { result } from './get-array.js';
import { announcement } from './get-element.js';
import { disabledpage } from './disabled-page.js';

const getActiveForm=function(filter,form,map,center){
disabledpage(filter,form)
map.on('load', () => {
  activepage(filter,form);

})
.setView({
  lat: center.lat,
  lng: center.lng,
}, 10);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
},
).addTo(map);
}
const getMarker=function(map,adres,center,adv){

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinStandart = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [26, 52],
});




const marker = L.marker(
  {
    lat: center.lat,
    lng: center.lng
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);




adres.value=`${marker.getLatLng().lat } ${ marker.getLatLng().lng}`;


marker.on('moveend', (evt) => {

  const markerlat=(marker.getLatLng().lat).toFixed(5);
  const marketlng=(marker.getLatLng().lng).toFixed(5);


  const mcoord=`${markerlat } ${ marketlng}`;

  adres.value=mcoord;


});


result.forEach((results) => {

  const markers = L.marker({
    lat:results.location.lat,
    lng:results.location.lng,
  },
  {
    icon:  mainPinStandart,
  });

  markers.addTo(map).bindPopup(announcement(results,adv));


});

}




export{getActiveForm,getMarker};
