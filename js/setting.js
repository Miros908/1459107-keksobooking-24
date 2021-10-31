const priceForType={
  bungalow:0,
  flat:1000,
  hotel:3000,
  house:5000,
  palace:10000,
};//Цена по типу жилья

const settings = {
  '1': ['1'],
  '2': ['1','2'],
  '3': ['1','2','3'],
  '100': ['0'],
};//Количество человек в зависисмости от  номера

const photos=[
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',

];

const type=[
  'palace','flat','house','bungalow','hotel',
];
const checkin=[
  '12:00','13:00','14:00',
];

const features =[
  'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',
];

export const estateNames = {
  'bungalow': 'Бунгало',
  'flat': 'Квартира',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

export const ICON_HEIGHT = 52;
export const ICON_WIDTH = 52;
export const ICON_STD_HEIGHT = 40;
export const ICON_STD_WIDTH = 40;
export const ICON_ANCHOR_WIDTH=26;
export const ICON_ANCHOR_HEIGHT=26;

export{priceForType,settings,photos,type,checkin,features};
