import { settingsprice } from './setting.js';


const roomsRule = (offerRooms, filterRooms) =>filterRooms === 'any' || offerRooms === filterRooms;
const typerool=(type,filterType)=>filterType === 'any' || type === filterType;
const guestsRule = (offerGuests, filterGuests) =>filterGuests === 'any'|| offerGuests >= filterGuests;

const compareFeature =(oelement, felement) =>oelement === felement;

const feturesRule = (offerFetures, filterFeatures) => {
  if (!Array.isArray(filterFeatures) || filterFeatures.length <= 0) {
    return true;
  }
  if (!Array.isArray(offerFetures) || offerFetures.length <= 0) {

    return false;
  }


  return filterFeatures.every((felement) => offerFetures.some((oelement) => compareFeature(oelement,felement)));
};


export const arrFeatures=function(featurefilter){
  const newArr=[];
  [...featurefilter].forEach((el)=>{
    if(el.checked===true){
      newArr.push(el.value);
    }
  });
  return newArr;
};

export const cratePredicate = (types,rooms,guests,category)=>(element)=>{
  const byPrice = settingsprice[category];

  return(
    feturesRule(element.offer.features, arrFeatures(document.querySelectorAll('.map__checkbox')))&&
    byPrice(element.offer.price)&&
    typerool(element.offer.type,types)
    && roomsRule(element.offer.rooms,rooms)
    && guestsRule(element.offer.guests, guests)
  );

};


