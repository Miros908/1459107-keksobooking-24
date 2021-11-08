import { activepage } from './disabled-page.js';
import { GetAnnouncement } from './get-element.js';
import { disabledpage } from './disabled-page.js';

let cities = null;

export const getActiveForm=(filter,form,map,center)=>{
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
export const getMarker=(map,adres,adv,res,marker,mainPinStandart,predicate)=>{

  marker.addTo(map);

  const markerl=(marker.getLatLng().lat).toFixed(5);
  const marketln=(marker.getLatLng().lng).toFixed(5);
  const mcoorde=`${markerl } ${ marketln}`;
  adres.value=mcoorde;


  marker.on('moveend', () => {
    const markerlat=(marker.getLatLng().lat).toFixed(5);
    const marketlng=(marker.getLatLng().lng).toFixed(5);
    const mcoord=`${markerlat } ${ marketlng}`;

    adres.value=mcoord;


  });


  const filterArr=res.filter((predicate)).slice(0,10);
  const layerArr=[];

  filterArr.forEach((results)=>{

    const markers = L.marker({
      lat:results.location.lat,
      lng:results.location.lng,
    },
    {
      icon:  mainPinStandart,
    });


    markers.bindPopup(GetAnnouncement(results,adv));
    layerArr.push(markers);


  });
  if(cities!==null){cities.remove();}


  cities=L.layerGroup(layerArr);

  cities.addTo(map);


};
