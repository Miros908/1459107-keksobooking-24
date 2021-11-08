

export const forminizialization=function(form,formfilter,marker,center,map,adress){

  formfilter.reset();
  form.reset();
  marker.setLatLng([center.lat , center.lng]);
  map.flyTo([center.lat , center.lng]);
  adress.value=`${center.lat } ${ center.lng}`;


};
