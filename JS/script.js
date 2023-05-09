let can = document.getElementById ('canvas');
let objeto = can.getContext ('2d');

objeto.fillStyle = 'white';
objeto.fillRect (10, 10, 100, 30);

objeto.beginPath();
objeto.arc(60, 25, 10, 0, Math.PI * 2);
objeto.fillStyle = 'red';
objeto.fill();

objeto.beginPath();
objeto.moveTo(15,15);
objeto.lineTo(10,10);
objeto.lineTo(125,105);
objeto.fill();

objeto.beginPath();
objeto.moveTo(100,35);
objeto.quadraticCurveTo(35,35,35,103);
objeto.fillStyle = 'yellow';
objeto.stroke();
objeto.fill();