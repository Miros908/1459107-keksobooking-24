import {
  labelFormatters
} from "./popup-label-formatters.js";

const ensureTarget = (target) => {
  if (target === null) {
    throw new Error('element not found');
  }
  return target;
}

const ensureXlator = (xlateFunc) => {
  if (typeof xlateFunc === "function") {
    return xlateFunc;
  }
  throw new Error('function not found');
}

const setTextContentOnField = (newElement, cssClass, offer) => {
  const target = ensureTarget(newElement.querySelector(cssClass));
  const xtlator = ensureXlator(labelFormatters[cssClass]);
  target.textContent = xtlator(offer);
}

const setTextContentLabels = (newElement, offer) => {
  Object
    .keys(labelFormatters)
    .forEach(
      (cssClass) => setTextContentOnField(newElement, cssClass, offer),
    );
}

const initFeature = (featureCss) => {
  const featur = document.createElement('li');
  featur.classList.add('popup__feature');
  featur.classList.add(`${'popup__feature--'}${ featureCss}`);
  return featur;
}

const setFeatures = (element, features) => {
  element.innerHTML = '';
  if (!Array.isArray(features)) {
    return;
  }
  features.forEach((featureCss) => {
    element.appendChild(initFeature(featureCss));
  });
}

const setPhotos = (photos, offerPhotos) => {
  const photos = newElement.querySelector('.popup__photos');
  const img = photos.querySelector('.popup__photo');

  photos.innerHTML = '';
  if (!Array.isArray(offerPhotos)) {
    return;
  }
  offerPhotos.forEach((src) => {
    const cloneimg = img.cloneNode(true);
    cloneimg.src = src;
    photos.appendChild(cloneimg);
  })
}

const setAvatar = (avatarElement, avatarSrc) => {
  if (avatarElement === null) {
    throw new Error('not found');
  }
  avatarElement.src = avatarSrc;
}

const announcement = function(info, elements) {
  const newElement = elements.cloneNode(true);
  const offer = info.offer;

  setTextContentLabels(newElement, offer);

  setFeatures(
    newElement.querySelector('.popup__features'),
    offer.features,
  );

  setPhotos(
    newElement.querySelector('.popup__photos'),
    offer.photos,
  );

  setAvatar(
    newElement.querySelector('.popup__avatar'),
    info.author.avatar,
  );


  return newElement;

};


export {
  announcement
};