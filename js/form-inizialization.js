

export const forminizialization=function(advform,housetype,room,guest,timeout,timein,description,features,formfilter,price){
  advform.value='';
  housetype.selected=true;
  timeout.selected=true;
  timein.selected=true;
  room.selected=true;
  guest.selected=true;
  description.value='';
  formfilter.reset();
  price.value='';

  [...features].forEach((featureses)=>{
    featureses.checked=false;
  });


};
