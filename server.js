var prompt = require('prompt');

prompt.start();


var recursion = function (number) {
  if (number == 1 || number == 2) {
    return 1;
  };
  return recursion(number - 1) + recursion(number - 2);
}

prompt.get(['limit'], function (err, result) {
  if (err) { return onErr(err); }
  var limit = result.limit;

  for (var i = 1; i <= limit; i++) {
    console.log(recursion(i) + " ");
  }


});

function onErr(err) {
  console.log(err);
  return 1;
}