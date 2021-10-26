const forms=document.querySelector('.ad-form');
const formfilter=document.querySelector('.map__filters');
import { activepage } from './disabled-page.js';
import { result } from './get-array.js';
import { announcement } from './get-element.js';
import { disabledpage } from './disabled-page.js';

disabledpage(forms,formfilter);
const map=L.map('map-canvas')
  .on('load', () => {
    activepage(formfilter,forms);

  })
  .setView({
    lat: 35.678046,
    lng: 139.76723,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


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
    lat: 35.67804,
    lng: 139.76723,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
).addTo(map);


const adress= document.querySelector('#address');

adress.value=`${marker.getLatLng().lat } ${ marker.getLatLng().lng}`;


marker.on('moveend', (evt) => {

  const markerlat=(marker.getLatLng().lat).toFixed(5);
  const marketlng=(marker.getLatLng().lng).toFixed(5);


  const mcoord=`${markerlat } ${ marketlng}`;

  adress.value=mcoord;


});


result.forEach((results) => {

  const markers = L.marker({
    lat:results.location.lat,
    lng:results.location.lng,
  },
  {
    icon:  mainPinStandart,
  });

  markers.addTo(map).bindPopup(announcement(results));


});


export{marker,map}
