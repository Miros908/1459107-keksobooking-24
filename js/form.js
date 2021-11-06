

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


const getMinprice=function(nprice,priceType,types){
  const pricevalue=nprice.value;
  const minprice=priceType[types.value];
  if(pricevalue<minprice){nprice.setCustomValidity(`Минимиальная цена ${minprice}`);}
  else{nprice.setCustomValidity('');}
};

const getPlaceholder=function(priceType,types,nprice){
  const minprice=priceType[types.value];
  nprice.placeholder=minprice;
};


const setAvailableRoom=function(rooms,guests,sett){
  const currentRooms = rooms.value;
  const currentGuests = sett[currentRooms];
  [...guests.children].forEach((option)=>option.disabled=currentGuests.every((setting)=>setting!==option.value));

};


export{minsymbols,getMinprice,getPlaceholder,setAvailableRoom};
