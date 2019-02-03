var results = new Array();
var count = 0;
var animateTime = 2000;
var numbers = 75;
var audio;
$(document).ready(function(){
  init();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://chunghanh.github.io/bingo/drum.mp3', true);
  xhr.responseType = 'blob';
  audio = document.querySelector('audio');
  xhr.onload = function () {
      audio.src = URL.createObjectURL(xhr.response);  
  };

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
  audio.play();

  var animation = setInterval(function(){
    $('.result').text(Math.floor(Math.random() * numbers) + 1);
  }, 100);

  setTimeout(function(){
    go();
    clearInterval(animation);
  }, animateTime);
}
