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

const feturesRule = (offerFetures, filterFeatures)=>{if(filterFeatures===[]){return true}
return filterFeatures.every((felement)=>{offerFetures.some((oelement)=>{return oelement===felement})})}


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
    feturesRule(element.offer.price, arrFeatures(document.querySelectorAll('.map__checkbox')))&&
    byPrice(element.offer.price)&&
    typerool(element.offer.type,types)
    && roomsRule(element.offer.rooms,rooms)
    && guestsRule(element.offer.guests, guests)
  );
};


