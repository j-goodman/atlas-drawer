var offset = {
  x: 300,
  y: 300,
};

var scale = 0.7;

onload = function () {
  var i; var j;
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  for (i=0 ; i<map.allNames.length ; i++) {
    var coord;
    console.log(map.allNames[i]);
    ctx.beginPath();
    ctx.strokeStyle = '#fff';

    coord = map[map.allNames[i]][0];
    ctx.moveTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
    console.log((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);

    for (j=1 ; j<map[map.allNames[i]].length ; j++) {
      coord = map[map.allNames[i]][j];
      ctx.lineTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
      ctx.stroke();
      console.log((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
    }

    coord = map[map.allNames[i]][0];
    ctx.lineTo((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
    ctx.stroke();
    console.log((coord.x - offset.x) * scale, (coord.y - offset.y) * scale);
  }
};
