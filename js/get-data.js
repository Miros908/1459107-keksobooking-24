
import { getMarker } from './get-map.js';
const getAds= function(map,adres,center,adv,isize,isizestandart,ianchor,body,message){

  fetch('https://24.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',

    })

    .then((response) => response.json())
    .then((data) => {

      getMarker(map,adres,center,adv,isize,isizestandart,ianchor,data);
    }).catch(()=>{body.appendChild(message)})

};

const postAds=function(form,body,succes){
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking',
      {
        method: 'POST',
        body: formData,
      },
    ).then(()=>{body.appendChild(succes)});
  });
}

export{getAds,postAds};
