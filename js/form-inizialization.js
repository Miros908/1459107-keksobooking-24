

export const forminizialization=function(advform,housetype,room,guest,timeout,timein,description,features,formfilter,price,marker,center,map,adress){
  advform.value='';
  housetype.selected=true;
  timeout.selected=true;
  timein.selected=true;
  room.selected=true;
  guest.selected=true;
  description.value='';
  formfilter.reset();
  price.value='';
  marker.setLatLng([center.lat , center.lng]);
  map.flyTo([center.lat , center.lng]);
  adress.value=center.lat+' ' +center.lng;

  [...features].forEach((featureses)=>{
    featureses.checked=false;
  });


};
