var offset = {
  x: 300,
  y: 300,
};

var scale = 0.7;

window.onload = function () {
  var i; var j;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var scaleLabel = document.getElementById('scale-label');
  var offsetx = document.getElementById('x-label');
  var offsety = document.getElementById('y-label');

  scaleLabel.innerText = 'scale';
  offsetx.innerText = 'offset.x';
  offsety.innerText = 'offset.y';

  loadMap(ctx, map);
};

var loadMap = function (ctx, map) {
  ctx.clearRect(0, 0, 1280, 960);
  console.log('Loading map...');
  for (i=0 ; i<map.allNames.length ; i++) {
    var coord;
    ctx.beginPath();
    ctx.strokeStyle = '#fff';

    // if (map.allNames[i] === 'Coahuila') {
    //   ctx.strokeStyle = '#00f';
    // } else {
    //   ctx.strokeStyle = '#fff';
    // }

    if (map[map.allNames[i]]) {
      coord = map[map.allNames[i]][0];
    } else {
      continue;
    }
    ctx.moveTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);

    for (j=1 ; j<map[map.allNames[i]].length ; j++) {
      coord = map[map.allNames[i]][j];
      ctx.lineTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
      ctx.stroke();
    }

    coord = map[map.allNames[i]][0];
    ctx.lineTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
    ctx.stroke();
  }
  console.log('Loaded.');
};

window.onkeydown = function () {
  setTimeout(function () {
    var scaleMeter = document.getElementById('scale');
    var offsetx = document.getElementById('offset-x');
    var offsety = document.getElementById('offset-y');
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    offset = {
      x: offsetx.value,
      y: offsety.value,
    };
    scale = scaleMeter.value;

    loadMap(ctx, map);
  }, 1000);
};
