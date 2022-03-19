let btnD1 = document.querySelector('.D1');
let btnD2 = document.querySelector('.D2');
let btnD3 = document.querySelector('.D3');
let btnD1G1 = document.querySelector('.D1G1');
let btnD1G2 = document.querySelector('.D1G2');
let btnD1G3 = document.querySelector('.D1G3');
let btnD2G1 = document.querySelector('.D2G1');
let btnD2G2 = document.querySelector('.D2G2');
let btnD2G3 = document.querySelector('.D2G3');
let btnD3G1 = document.querySelector('.D3G1');
let btnD3G2 = document.querySelector('.D3G2');
let btnD3G3 = document.querySelector('.D3G3');
let D1G1 = document.querySelector('#D1G1');
let D1G2 = document.querySelector('#D1G2');
let D1G3 = document.querySelector('#D1G3');
let D2G1 = document.querySelector('#D2G1');
let D2G2 = document.querySelector('#D2G2');
let D2G3 = document.querySelector('#D2G3');
let D3G1 = document.querySelector('#D3G1');
let D3G2 = document.querySelector('#D3G2');
let D3G3 = document.querySelector('#D3G3');


$(".D1").click(function(){
    if (1+2 == 3){
      D1G2.style.display = 'none';
      D1G3.style.display = 'none';
      D2G1.style.display = 'none';
      D2G2.style.display = 'none';
      D2G3.style.display = 'none';
      D3G1.style.display = 'none';
      D3G2.style.display = 'none';
      D3G3.style.display = 'none';
      btnD1.style.borderBottom = 'solid #eaa023 3px'
      btnD2.style.borderBottom = 'none'
      btnD3.style.borderBottom = 'none'
      btnD1G1.style.borderBottom = 'solid #eaa023 3px',btnD1G1.style.display = 'inline';
      btnD1G2.style.borderBottom = 'none',btnD1G2.style.display = 'inline';
      btnD1G3.style.borderBottom = 'none',btnD1G3.style.display = 'inline';
      $("#D1G1").fadeIn();
      btnD2G1.style.display = 'none';
      btnD2G2.style.display = 'none';
      btnD2G3.style.display = 'none';
      btnD3G1.style.display = 'none';
      btnD3G2.style.display = 'none';
      btnD3G3.style.display = 'none';
      
    }
  });
$(".D2").click(function(){
    if (1+2 == 3){
      D1G1.style.display = 'none';
      D1G2.style.display = 'none';
      D1G3.style.display = 'none';
      D2G2.style.display = 'none';
      D2G3.style.display = 'none';
      D3G1.style.display = 'none';
      D3G2.style.display = 'none';
      D3G3.style.display = 'none';
      btnD2.style.borderBottom = 'solid #eaa023 3px'
      btnD1.style.borderBottom = 'none'
      btnD3.style.borderBottom = 'none'
      btnD2G1.style.borderBottom = 'solid #eaa023 3px'
      btnD2G2.style.borderBottom = 'none'
      btnD2G3.style.borderBottom = 'none'
      $("#D2G1").fadeIn();
      btnD1G1.style.display = 'none'
      btnD1G2.style.display = 'none'
      btnD1G3.style.display = 'none'
      btnD2G1.style.display = 'inline'
      btnD2G2.style.display = 'inline'
      btnD2G3.style.display = 'inline'
      btnD3G1.style.display = 'none';
      btnD3G2.style.display = 'none';
      btnD3G3.style.display = 'none';

    }

  },);
$(".D3").click(function(){
    if (1+2 == 3){
      D1G1.style.display = 'none';
      D1G2.style.display = 'none';
      D1G3.style.display = 'none';
      D2G1.style.display = 'none';
      D2G2.style.display = 'none';
      D2G3.style.display = 'none';
      D3G2.style.display = 'none';
      D3G3.style.display = 'none';
      btnD3.style.borderBottom = 'solid #eaa023 3px'
      btnD1.style.borderBottom = 'none'
      btnD2.style.borderBottom = 'none'
      btnD3G1.style.borderBottom = 'solid #eaa023 3px'
      btnD3G2.style.borderBottom = 'none'
      btnD3G3.style.borderBottom = 'none'
      $("#D3G1").fadeIn();
      btnD1G1.style.display = 'none'
      btnD1G2.style.display = 'none'
      btnD1G3.style.display = 'none'
      btnD2G1.style.display = 'none'
      btnD2G2.style.display = 'none'
      btnD2G3.style.display = 'none'
      btnD3G1.style.display = 'inline'
      btnD3G2.style.display = 'inline'
      btnD3G3.style.display = 'inline'
    }
  });

$(".D1G1").click( function() {
  btnD1G1.style.borderBottom = 'solid #eaa023 3px'
  btnD1G2.style.borderBottom = 'none'
  btnD1G3.style.borderBottom = 'none'
  $('#D1G1').fadeIn();
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D1G2").click( function() {
  btnD1G1.style.borderBottom = 'none'
  btnD1G2.style.borderBottom = 'solid #eaa023 3px'
  btnD1G3.style.borderBottom = 'none'
  D1G1.style.display = 'none'
  $('#D1G2').fadeIn();
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D1G3").click( function() {
  btnD1G1.style.borderBottom = 'none'
  btnD1G2.style.borderBottom = 'none'
  btnD1G3.style.borderBottom = 'solid #eaa023 3px'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  $('#D1G3').fadeIn();
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D2G1").click( function() {
  btnD2G1.style.borderBottom = 'solid #eaa023 3px'
  btnD2G2.style.borderBottom = 'none'
  btnD2G3.style.borderBottom = 'none'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  $('#D2G1').fadeIn();
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
  
})
$(".D2G2").click( function() {
  btnD2G1.style.borderBottom = 'none'
  btnD2G2.style.borderBottom = 'solid #eaa023 3px'
  btnD2G3.style.borderBottom = 'none'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  $('#D2G2').fadeIn();
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D2G3").click( function() {
  btnD2G1.style.borderBottom = 'none'
  btnD2G2.style.borderBottom = 'none'
  btnD2G3.style.borderBottom = 'solid #eaa023 3px'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  $('#D2G3').fadeIn();
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D3G1").click( function() {
  btnD3G1.style.borderBottom = 'solid #eaa023 3px'
  btnD3G2.style.borderBottom = 'none'
  btnD3G3.style.borderBottom = 'none'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  $('#D3G1').fadeIn();
  D3G2.style.display = 'none'
  D3G3.style.display = 'none'
})
$(".D3G2").click( function() {
  btnD3G1.style.borderBottom = 'none'
  btnD3G2.style.borderBottom = 'solid #eaa023 3px'
  btnD3G3.style.borderBottom = 'none'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  $('#D3G2').fadeIn();
  D3G3.style.display = 'none'
})
$(".D3G3").click( function() {
  btnD3G1.style.borderBottom = 'none'
  btnD3G2.style.borderBottom = 'none'
  btnD3G3.style.borderBottom = 'solid #eaa023 3px'
  D1G1.style.display = 'none'
  D1G2.style.display = 'none'
  D1G3.style.display = 'none'
  D2G1.style.display = 'none'
  D2G2.style.display = 'none'
  D2G3.style.display = 'none'
  D3G1.style.display = 'none'
  D3G2.style.display = 'none'
  $('#D3G3').fadeIn();
})

//

