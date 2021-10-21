import { forms } from './disabled-page.js';

const title=forms.querySelector('.titles')
const price=forms.querySelector('.prices')
const type=forms.querySelector('#type')

title.addEventListener('invalid',function(){
  if(title.validity.tooShort){
   title.setCustomValidity('Обьявление должно состоять минимум из 30-х символов');
  }
  else if (title.validity.valueMissing) {
    title.setCustomValidity('Обязательное поле');
  }



}
)

const priceForType={
  bungalow:0,
  flat:1000,
  hotel:3000,
  house:5000,
  palace:10000,
 }
const pricevalue=price.value
 const minprice=priceForType[type.value]
price.placeholder=minprice



  if(pricevalue<minprice){
    price.setCustomValidity('Значение должно быть больше '+ minprice)
   }else{ price.setCustomValidity('')}








