

export const getData=function(){
  return fetch('https://24.javascript.pages.academy/keksobooking/data');


};
export const sendForm=function(formData){
  return fetch(
    'https://24.javascript.pages.academy/keksobooking' ,
    {
      method: 'POST',
      body: formData,
    },
  );
};


