
let formfilter=document.querySelector('.map__filters');
let forms=document.querySelector('.ad-form')


let disabledpage=(formmap,form)=>{
formmap.classList.add('ad-form--disabled');
forms.classList.add('ad-form--disabled');
[...formmap.elements].forEach(

  (inputs)=>{inputs.disabled=true}
  );
  [...form.elements].forEach(

    (inputs)=>{inputs.disabled=true}
    );



}



let activepage=(formmap,form)=>{
  formmap.classList.remove('ad-form--disabled');
  forms.classList.remove('ad-form--disabled');
  [...formmap.elements].forEach(

    (inputs)=>{inputs.disabled=false}
    );
    [...form.elements].forEach(

      (inputs)=>{inputs.disabled=false}
      );



  }
 const disabledPages= disabledpage(formfilter,forms)


export{forms,disabledPages,activepage,formfilter}




