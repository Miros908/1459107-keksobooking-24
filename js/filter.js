const DIAP_LOW = 10000;
const DIAP_HIGH = 50000;

const settings = {
  'low': (price) => price <DIAP_LOW,
  'middle': (price) => price >= DIAP_LOW && price < DIAP_HIGH,
  'high': (price) => price >= DIAP_HIGH,
  'any': (price) => true,
};


const roomsRule = (offerRooms, filterRooms) =>filterRooms === 'any' || offerRooms === filterRooms;
const typerool=(type,filterType)=>filterType === 'any' || type === filterType;
const guestsRule = (offerGuests, filterGuests) =>filterGuests === 'any'|| offerGuests >= filterGuests;

const compareFeature =(oelement, felement) =>{

  return oelement === felement;
};

const feturesRule = (offerFetures, filterFeatures) => {
  if (!Array.isArray(filterFeatures) || filterFeatures.length <= 0) {
    return true;//пользоватлеь не выбрал никаких фильтров - любое предложение проходит
  }
  if (!Array.isArray(offerFetures) || offerFetures.length <= 0) {

    return false;//хозаин не указал никаких опций, а раз пользователь хоть что-то выбрал -то это предложение не прходит
  }
  //в этом месте у нас оба аргумента законные массивы и в обоих есть элементы

  return filterFeatures.every((felement) => {return offerFetures.some((oelement) => compareFeature(oelement,felement)); });
};
//const feturesRule = (offerFetures, filterFeatures)=>{if(filterFeatures===[]){return true;}
  //return filterFeatures.every((felement)=>{ return  offerFetures.some((oelement)=>oelement===felement);});};


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
  const byPrice = settings[category];

  return(
   feturesRule(element.offer.features, arrFeatures(document.querySelectorAll('.map__checkbox')))&&
    byPrice(element.offer.price)&&
    typerool(element.offer.type,types)
    && roomsRule(element.offer.rooms,rooms)
    && guestsRule(element.offer.guests, guests)
  );

};


