$("#someButton").click(function(){
  $('#container').append('<div class = "uno"></div>');
  $('.uno').append('<p></p>');
});

var button = document.getElementById('someButton'),
  count = 0;
button.onclick = function(){
  count ++;
  console.log(count);
};

var swap = document.createElement ("swap");


var delete = document.createElement("delete");
