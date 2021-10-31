
import { getMarker } from './get-map.js';
import { forminizialization } from './form-inizialization.js';
export const getAds=function(map,adres,center,adv,isize,isizestandart,ianchor,body,message){
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((data) => {
      getMarker(map,adres,center,adv,isize,isizestandart,ianchor,data);
    }).catch(()=>{body.appendChild(message);});
};


export const sendForm=function(form,body,suc,error,advform,housetype,room,guest,timeout,timein,description,features,formfilter,price){

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking' ,
      {
        method: 'POST',
        body: formData,
      },
    ).then(()=>{body.appendChild(suc);}).then(()=>{forminizialization(advform,housetype,room,guest,timeout,timein,description,features,formfilter,price);}).catch(()=>{body.appendChild(error);});


  });
};
