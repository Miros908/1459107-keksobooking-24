import { getMarker } from './get-map.js';
import { forminizialization } from './form-inizialization.js';
import { getPlaceholder } from './form.js';

export const getAds=function(map,adres,adv,marker,mainPinStandart,body,message){
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      const datas=data.slice(0,10);
      getMarker(map,adres,adv,datas,marker,mainPinStandart);
    }).catch(()=>{body.appendChild(message);});
};


export const sendForm=function(form,body,suc,error,price,formfilter,marker,center,map,adress,priceType,types){

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking' ,
      {
        method: 'POST',
        body: formData,
      },
    ).then(()=>{body.appendChild(suc);}).catch(()=>{body.appendChild(error);}).then(()=>{forminizialization(form,formfilter,marker,center,map,adress);}).then(()=>{getPlaceholder(priceType,types,price);});

  });

};
