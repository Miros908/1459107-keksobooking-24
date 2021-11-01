
import { getMarker } from './get-map.js';
import { forminizialization } from './form-inizialization.js';
import { getPlaceholder } from './form.js';

export const getAds=function(map,adres,adv,marker,mainPinStandart,body,message){
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      getMarker(map,adres,adv,data,marker,mainPinStandart);
    }).catch(()=>{body.appendChild(message);});
};


export const sendForm=function(form,body,suc,error,advform,housetype,room,guest,timeout,timein,description,features,formfilter,price,marker,center,map,adress,priceType,types){

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking' ,
      {
        method: 'POST',
        body: formData,
      },
    ).then(()=>{body.appendChild(suc);}).catch(()=>{body.appendChild(error);}).then(()=>{forminizialization(advform,housetype,room,guest,timeout,timein,description,features,formfilter,price,marker,center,map,adress)}).then(()=>{getPlaceholder(priceType,types,price)});

  });

};
