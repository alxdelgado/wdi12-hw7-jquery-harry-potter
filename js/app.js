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

  // Year 3 // 

  const $ul = $('<ul storage="trunk"></ul>'); 
  const $butterBeer = $('<li>butter beer</li>'); 
  $ul.append($butterBeer); 

  const $invisiblityCloak = $('<li class="secret">invisibility cloak</li>'); 
  $ul.append($invisibilityCloak);
  const $magicMap = $('<li class="secret">magic map</li>');
  $ul.append($magicMap); 
  const $timeTurner = $('<li class="secret">time turner</li>'); 
  $ul.append($timeTurner);
  const $leash = $('<li class="owl">leash</li>'); 
  $ul.append($leash); 
  const $bertieJellyBeans = $('<li>Bertie Botts Every Flavor Jelly Beans</li>');
  $ul.append($bertieJellyBeans);
  $container.append($ul); 

// Year 4 // 
  $container.append('<table><tableHead><tr><th>Day</th><th>Classes</th></tr><tr><td>Monday</td><td>Herbology</td></tr></tr><tr><td>Monday</tr></td><tr><td>Tuesday</tr></td>History of Magic</td></tr><tr><td>Wednesday</tr></td>Potions</td></tr><tr><td>Thursday</tr></td>Transfiguration</tr></td><tr><td>Friday</tr></td><tr><td>Defense Against the Dark Arts</tr></td></thread></table>'); 



});



