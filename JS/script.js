let can = document.getElementById ('canvas');
let objeto = can.getContext ('2d');

// Criação de Retângulo
objeto.fillStyle = 'white';
objeto.fillRect (10, 10, 100, 30);

// Criação de Círculo
objeto.beginPath();
objeto.arc(60, 25, 10, 0, Math.PI * 2);
objeto.fillStyle = 'red';
objeto.fill();

// Criação de Linha
objeto.beginPath();
objeto.moveTo(15,15);
objeto.lineTo(10,10);
objeto.lineTo(125,105);
objeto.fill();

// Criação de Arco
objeto.lineWidth = 50;
objeto.beginPath();
objeto.moveTo(250, 200);
objeto.lineTo(350, 150);
objeto.quadraticCurveTo(150, 300, 400, 300);
objeto.lineTo(350, 300);
objeto.fillStyle = 'yellow';
objeto.stroke();
objeto.fill();

// Criação de Foto
