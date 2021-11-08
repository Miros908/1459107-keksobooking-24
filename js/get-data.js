
export const getData=()=>fetch('https://24.javascript.pages.academy/keksobooking/data');
export const sendForm=(formData)=>fetch(
  'https://24.javascript.pages.academy/keksobooking' ,
  {
    method: 'POST',
    body: formData,
  },
);
