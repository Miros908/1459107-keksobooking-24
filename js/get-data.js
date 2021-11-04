
import { forminizialization } from './form-inizialization.js';
import { getPlaceholder } from './form.js';


export const getData=function(){
  return fetch('https://24.javascript.pages.academy/keksobooking/data');


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
