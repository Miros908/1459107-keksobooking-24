import { sizeIcon } from './setting.js';
import{sizeIconStandart} from './setting.js';
import{iconAnchorSize} from './setting.js';
import { center } from './setting.js';


export const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: sizeIcon,
  iconAnchor: iconAnchorSize,
});

export const mainPinStandart = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize:sizeIconStandart ,
  iconAnchor: iconAnchorSize,
});


export const marker = L.marker(
  {
    lat:center.lat,
    lng:center.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  });
