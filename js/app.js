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

  // Year 2 // 
  const $h2 = $('<h2></h2>');
  $h2.text('Alex');
  $body.append($h2);

  const $h3 = $('<h3></h3>'); 
  $h3.text('Gryffindor');
  $body.append($h3); 

  const $h4 = $('<h4></h4>'); 
  $h4.text('Seymour'); 
  $h4.addClass('Owl'); 
  $body.append($h4); 

  const $h4_2 = $('<h4></h4>'); 
  $h4_2.text('I do not know anything about Harry Potter');
  $body.append($h4_2);

   


});



