import { activepage } from './disabled-page.js';
import { announcement } from './get-element.js';
import { disabledpage } from './disabled-page.js';

const getActiveForm=function(filter,form,map,center){
  disabledpage(filter,form);
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
};
const getMarker=function(map,adres,adv,res,marker,mainPinStandart){

  marker.addTo(map);


  adres.value=`${marker.getLatLng().lat } ${ marker.getLatLng().lng}`;


  marker.on('moveend', () => {

    const markerlat=(marker.getLatLng().lat).toFixed(5);
    const marketlng=(marker.getLatLng().lng).toFixed(5);


    const mcoord=`${markerlat } ${ marketlng}`;

    adres.value=mcoord;


  });
  res.forEach((results) => {

    const markers = L.marker({
      lat:results.location.lat,
      lng:results.location.lng,
    },
    {
      icon:  mainPinStandart,
    });


    markers.addTo(map).bindPopup(announcement(results,adv));


  });


};


export{getActiveForm,getMarker};
