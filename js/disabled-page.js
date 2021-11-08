
export const disabledpage=(formmap,form)=>{
  formmap.classList.add('ad-form--disabled');
  form.classList.add('ad-form--disabled');
  [...formmap.elements].forEach(

    (inputs)=>{inputs.disabled=true;},
  );
  [...form.elements].forEach(

    (inputs)=>{inputs.disabled=true;},
  );


};


export const activepage=(formmap,form)=>{
  formmap.classList.remove('ad-form--disabled');
  form.classList.remove('ad-form--disabled');
  [...formmap.elements].forEach(

    (inputs)=>{inputs.disabled=false;},
  );
  [...form.elements].forEach(

    (inputs)=>{inputs.disabled=false;},
  );


};


