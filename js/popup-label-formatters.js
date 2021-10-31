import {
  estateNames
} from './setting.js';

const mapDataTypeToLabel = (dataType) => {
  const result = estateNames[dataType];
  if (typeof result === undefined) {
    throw new Error(`not found ${dataType}`);
  }
  return result;
};

export const labelFormatters = {
  '.popup__title': (offer) => offer.title,
  '.popup__text--address': (offer) => offer.address,
  '.popup__text--price': (offer) => `${offer.price}₽/ночь`,
  '.popup__type': (offer) => mapDataTypeToLabel(offer.type),
  '.popup__text--capacity': (offer) => `${offer.rooms} команты для ${offer.guests} гостей`,
  '.popup__text--time': (offer) => `Заезд после ${offer.checkin} выезд до ${offer.checkout}`,
  '.popup__description': (offer) => offer.description,
};
