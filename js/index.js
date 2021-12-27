var formjs=document.querySelector('.form__js');  /* form */

var inputSom=document.querySelector('.input__money');  /* input */
var eltext=document.querySelector('.input-text')

var  elSelect=document.querySelector('.js-select')
var formBtn=document.querySelector('.form__ex')

var formText=document.querySelector('.ozgaruv')

var usa=10850.00;
var rubl=147.23;
var euro=12178.172;
var currencyValue;

formjs.addEventListener('submit', function (event) {
    event.preventDefault();
    eltext=(inputSom.value-0);
    // console.log(eltext-0);
  });

  
 console.log(elSelect.value)
  elSelect.addEventListener('change', function () {
    // console.log(currencyValue - 0);
    if(elSelect.value == "usa"){
        currencyValue = +usa
        // console.log(currencyValue)
    }else if(elSelect.value == "eu"){
        currencyValue = +euro
        // console.log(currencyValue)

    }else{
      currencyValue = +rubl
      // console.log(currencyValue)

    }
  });

formBtn.addEventListener('click', function(){
  formText.innerHTML =(inputSom.value-0)/(currencyValue-0);
})