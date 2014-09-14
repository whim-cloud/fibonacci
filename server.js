var prompt = require('prompt');

prompt.start();


var recursion = function (number) {
  if (number == 1 || number == 2) {
    return 1;
  };
  return recursion(number - 1) + recursion(number - 2);
}

prompt.get(['number', 'power'], function (err, result) {
  for (var i = 1; i <= power; i++) {
    number = number * number;
  };

  console.log(number);
});

function onErr(err) {
  console.log(err);
  return 1;
}