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

    // if (map.allNames[i] === 'Zacatecas') {
    //   ctx.strokeStyle = '#00f';
    // } else if (map.allNames[i] === 'Durango') {
    //   ctx.strokeStyle = '#0f0';
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
      // ctx.font="12px Georgia";
      // ctx.fillStyle = '#fff';
      // ctx.fillText(j + ':' + map.allNames[i], (coord.x - offset.x) * scale + Math.random() * 40 - 20, (coord.y - offset.y) * scale + Math.random() * 40 - 20);
    }

    coord = map[map.allNames[i]][0];
    ctx.lineTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
    ctx.stroke();
  }
  console.log('Loaded.');
};

window.onkeydown = function (event) {
  var scaleMeter = document.getElementById('scale');
  var offsetx = document.getElementById('offset-x');
  var offsety = document.getElementById('offset-y');
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  setTimeout(function () {

    offset = {
      x: offsetx.value,
      y: offsety.value,
    };
    scale = scaleMeter.value;

    loadMap(ctx, map);
  }, 400);
  switch (event.keyCode) {
    case 40: // down
      offsety.value = parseInt(offsety.value) + 100;
      break;
    case 39: // right
      offsetx.value = parseInt(offsetx.value) + 100;
      break;
    case 38: // up
      offsety.value = parseInt(offsety.value) - 100;
      break;
    case 37: // left
      offsetx.value = parseInt(offsetx.value) - 100;
      break;
  }
};
