import{minsymbols} from './form.js'

const forms=document.querySelector('.ad-form');
const title=forms.querySelector('.titles');
const price=forms.querySelector('.prices');
const type=forms.querySelector('#type');
const room=forms.querySelector('#room_number');
const guest=forms.querySelector('#capacity');
const timeout=forms.querySelector('#timeout');
const timein=forms.querySelector('#timein');
const priceForType={
  bungalow:0,
  flat:1000,
  hotel:3000,
  house:5000,
  palace:10000,
};

minsymbols(title)


