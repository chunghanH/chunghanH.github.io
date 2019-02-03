var results = new Array();
var count = 0;
var animateTime = 3000;
var numbers = 75;
$(document).ready(function(){
  init();
  $('#draw').unbind().on('click', function(){
    animate(draw);
  });
});

function init(){
  for(var i = 0; i < numbers; i++) {
    results[i] = i + 1;
  }

  var j, temp;
  for (i = results.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = results[i];
    results[i] = results[j];
    results[j] = temp;
  }
}

function draw(){
  var content = $('#content').text();
  var result = results[count];

  if(count > 0){
    content += ', ';
  }
  content += result;
  $('#content').text(content);
  $('.result').text(result);
  $('h3').show();
  $('#count').text(count + 1);
  count++;
}

function animate(go){
  var animation = setInterval(function(){
    $('.result').text(Math.floor(Math.random() * numbers) + 1);
  }, 100);

  setTimeout(function(){
    go();
    clearInterval(animation);
  }, animateTime);
}