(function () {

var names = ["Rishi", "James", "Linus", "Albert", "Micheal", "William", "Rahul", "Adarsh", "Beth", "Amit"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();
