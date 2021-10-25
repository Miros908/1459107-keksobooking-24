





const minsymbols= function(titles){titles.addEventListener('invalid',()=> {
  if(titles.validity.tooShort){
    titles.setCustomValidity('Обьявление должно состоять минимум из 30-х символов');
  }
  else if (titles.validity.valueMissing) {
    titles.setCustomValidity('Обязательное поле');
  }else{ titles.setCustomValidity('');}


},
);
};




const getPlaceholder=function(prices){
  const minprice=priceForType[type.value];
  prices.placeholder=minprice;
};

const getMinprice=function(prices){
  const pricevalue=prices.value;
  const minprice=priceForType[type.value];
  if(pricevalue<minprice){prices.setCustomValidity(`Минимиальная цена ${minprice}`);}
  else{prices.setCustomValidity('');}
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


const GetRoom=function(){
  const currentRooms = room.value;
  const currentGuests = settings[currentRooms];
  [...guest.children].forEach((option)=>option.disabled=currentGuests.every((setting)=>setting!==option.value));

};


room.addEventListener('change',()=> {
  GetRoom();
});




const time=forms.querySelector('.ad-form__element--time');

time.addEventListener('change',(evt)=> {
  timeout.value=evt.target.value;
  timein.value=evt.target.value;

});


export{minsymbols};
