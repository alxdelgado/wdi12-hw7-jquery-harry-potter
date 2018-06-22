// console.log('JS is working'); 

// if (typeof jQuery == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {
//   console.log('I did it! I linked jQuery and this js file!')
// };

 /// YEAR 1 /// 

$(() => {

  const $div = $("<div>");
  $div.attr("id", "container"); 
  
  const $h1 = $('<h1>');
  $h1.text('Hogwarts');
  $('body').append($h1); 
  
  const $h2 = $('<h2>'); 
  $h2.text('Alex Delgado'); 
  $('body').append($h2);

  const $h3 = $('<h3>')
  $h3.text('Gryffindor'); 
  $('body').append($h3); 

  const $h4 = $('<h4></h4>');
  $h4.text('Seymour');
  $h4.addClass('tiger');
  $('body').append($h4);

  $('body').append('<h4>Hornthowe Wand with Dragon Heartstring Core</h4>');
  

});


 // console.log('container');



/// YEAR 1 /// 

