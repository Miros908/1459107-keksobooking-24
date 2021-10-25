const formfilter=document.querySelector('.map__filters');
const forms=document.querySelector('.ad-form');


const disabledpage=(formmap,form)=>{
  formmap.classList.add('ad-form--disabled');
  forms.classList.add('ad-form--disabled');
  [...formmap.elements].forEach(

    (inputs)=>{inputs.disabled=true;},
  );
  [...form.elements].forEach(

    (inputs)=>{inputs.disabled=true;},
  );


};


const activepage=(formmap,form)=>{
  formmap.classList.remove('ad-form--disabled');
  forms.classList.remove('ad-form--disabled');
  [...formmap.elements].forEach(

    (inputs)=>{inputs.disabled=false;},
  );
  [...form.elements].forEach(

    (inputs)=>{inputs.disabled=false;},
  );


};


export{forms,disabledpage,activepage,formfilter};
