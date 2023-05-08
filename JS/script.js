let can = document.getElementById ('canvas')
let retangulo = can.getContext ('2d')
let circulo = can.getContext ('2d')
let linha = can.getContext ('2d')

retangulo.fillStyle = 'purple'
retangulo.fillRect (10, 10, 100, 30)

circulo.beginPath()
circulo.arc(150, 100, 50, 0, Math.PI * 2)
circulo.lineWidth = 7
circulo.strokeStyle = 'yellow'

linha.beignPath();
linha.moveTo(20, 200);
linha.lineTo(25,250);
linha.fillStyle = 'black'