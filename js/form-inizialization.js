

export const GetFormInizialization=(form,formfilter,marker,center,map)=>{

  formfilter.reset();
  form.reset();
  marker.setLatLng([center.lat , center.lng]);
  map.flyTo([center.lat , center.lng]);
};
