var strBase = 'abcdefghijklmnopqrstuvwzyz';
var GUID = 0;

function randNumber(upper) {
  return Math.floor(Math.random() * (upper + 1));
}

function makeType(type) {
  var value = '';

  if (type === 'string') {
    var length = Math.max(4, randNumber(20));

    for (var i = 0; i < length; i++) {
      value += strBase[randNumber(25)];
    }
  }

  if (type === 'number') {
    return GUID++;
  }

  return value;
}

module.exports = function modelGenerator(name, properties) {
  return function generateModel() {
    var ret = {};
    // ret[name] = {};

    properties.forEach(function(prop) {
      ret[prop.key] = makeType(prop.type);
    });

    return ret;
  }
};
