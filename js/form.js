import { forms } from './disabled-page.js';

const title=forms.querySelector('.titles');
const price=forms.querySelector('.prices');
const type=forms.querySelector('#type');


const minsymbols= function(){title.addEventListener('invalid',()=> {
  if(title.validity.tooShort){
    title.setCustomValidity('Обьявление должно состоять минимум из 30-х символов');
  }
  else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле');
  }else{ title.setCustomValidity('');}


},
);
};

const priceForType={
  bungalow:0,
  flat:1000,
  hotel:3000,
  house:5000,
  palace:10000,
};


const getPlaceholder=function(){
  const minprice=priceForType[type.value];
  price.placeholder=minprice;
};

const getMinprice=function(){
  const pricevalue=price.value;
  const minprice=priceForType[type.value];
  if(pricevalue<minprice){price.setCustomValidity(`Минимиальная цена ${minprice}`);}
  else{price.setCustomValidity('');}
};

type.addEventListener('change',()=> {
  getPlaceholder();
  getMinprice();

});
price.addEventListener('input',()=> {
  getMinprice();
});


const settings = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1','2','3'],
  '100': ['0'],
};
const room=forms.querySelector('#room_number');
const guest=forms.querySelector('#capacity');

const GetRoom=function(){
  const currentRooms = room.value;
  const currentGuests = settings[currentRooms];
  [...guest.children].forEach((option)=>option.disabled=currentGuests.every((setting)=>setting!==option.value));

};


room.addEventListener('change',()=> {
  GetRoom();
});

const timeout=forms.querySelector('#timeout');
const timein=forms.querySelector('#timein');


const time=forms.querySelector('.ad-form__element--time');

time.addEventListener('change',(evt)=> {
  timeout.value=evt.target.value;
  timein.value=evt.target.value;

});


export{minsymbols,title,priceForType,getPlaceholder,getMinprice};
