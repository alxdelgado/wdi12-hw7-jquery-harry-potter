// console.log('JS is working'); 

if (typeof jQuery == 'undefined'){
  // console.log('oops! I still have to link my jQuery properly!');
} else {
  // console.log('I did it! I linked jQuery and this js file!');
};


$(() => {
  const $body = $('body'); 
  const $container = $('#container');

  // Year 1 // 
  const $h1 = $('<h1></h1>');
  console.log($h1);
  $h1.text('Hogwarts');  
  $body.append($h1);
  

});



