
document.getElementById('textInputForm').addEventListener('change', getTextFile);
document.getElementById('submit').onclick = presentText;
document.getElementById('makeRed').onclick = presentColored;


function getTextFile(e){

  let fileInputControl = e.target;
  let files = fileInputControl.files;

  let firstFile = files[0];

  var reader = new FileReader();

  reader.onload = function(e) {
    var contents = reader.result;

    if (contents == ""){
      failText = "Det fanns ingen text...";
      localStorage.setItem('foobar', failText);
      localStorage.setItem('coloredFoobar', failText);

      } else {

      var wordsArray = contents.split(/(\s+)/);
      var mostCommonWords = countWords(wordsArray);
      foobarMaker(wordsArray, mostCommonWords);
    }
  }

  reader.readAsText(firstFile);
  e.preventDefault();
}

function presentText(e){
  fetchText('foobar');
}

function presentColored(e){
  fetchText('coloredFoobar');
}

function countWords(text){

  var mostCommonWords = [];
  var counting = {};
  var highest = 0;
  var hasLetters = /^[A-Za-z0-9 ]+$/

  for(var i = 0; i < text.length; i++){
    var currentWord = text[i];

    if(currentWord == 0 || !hasLetters.test(currentWord)){/*do nothing if string is not a word*/}
    else if(counting[currentWord] === undefined){
      counting[currentWord] = 1;
    } else {
      counting[currentWord] += 1;
    }

    var newHighest = counting[currentWord] > highest;
    var addHighest = counting[currentWord] == highest;

    if (newHighest){
      highest = counting[currentWord];
      mostCommonWords = [];
    }

    if (addHighest || newHighest){
      mostCommonWords.push(currentWord);
    }
  }

  return mostCommonWords;
}

function foobarMaker (text, mostCommonWords){

  var coloredFoobar = [];

  for (i = 0; i < text.length; i++){
    var currentWord = text[i];

    coloredFoobar[i] = text[i];

    for (j = 0; j < mostCommonWords.length; j++)
      if(currentWord == mostCommonWords[j]){
        text[i] = 'foo' + currentWord + 'bar';
        coloredFoobar[i] = '<font color="red">' + text[i]  + '</font>';
      }
  }

  var foobar = makeString(text);
  var redFoobar = makeString(coloredFoobar);

  localStorage.setItem('foobar', foobar);
  localStorage.setItem('coloredFoobar', redFoobar);
}

function makeString(text){

  var foobar = text.join('');
  foobar = lineBreaker(foobar);

  return foobar;
}

function lineBreaker(text){

  foobarLineBreak = text.split(/(\n\n)/);
  foobar = foobarLineBreak.join('<br/>');

  return foobar;
}

function fetchText(key){

  if (key === undefined){
    var foobarText = document.getElementById('foobarText')
    foobarText.innerHTML = '<h6>' + "Du har ännu inte laddat upp något" + '<h6/>';
  } else {
      var texten = localStorage.getItem(key);
      var foobarText = document.getElementById('foobarText')

      foobarText.innerHTML = '<div class="container">' + '<h6>' + "Din foobar-text:" + '<br>'+
                                                          '<br/>' + '</h6>' + '<p>' + texten + '</p>' +
                                                          '</div>';
  }



}
