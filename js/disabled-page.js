let adform=document.querySelector('.ad-form')

let input=adform.elements
let formfilter=document.querySelector('.map__filters')

let formdisabled=()=>{
adform.classList.add('ad-form--disabled')
formfilter.classList.add('.ad-form--disabled')

var formfilterelements=formfilter.elements
for(let i=0;i<formfilter.length;i++){
  formfilter[i].disabled=true}

for(let i=0;i<input.length;i++){
input[i].disabled=true}
}

let formactive=()=>{
  adform.classList.remove('ad-form--disabled')
  formfilter.classList.remove('.ad-form--disabled')

  var formfilterelements=formfilter.elements
  for(let i=0;i<formfilter.length;i++){
    formfilter[i].disabled=false}

  for(let i=0;i<input.length;i++){
  input[i].disabled=false}
}

let disabledpage=formdisabled()

export{disabledpage}
