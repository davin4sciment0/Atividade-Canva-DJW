let can = document.getElementById ('canvas')
let retangulo = can.getContext ('2d')
let circulo = can.getContext ('2d')

retangulo.fillStyle = 'purple'
retangulo.fillRect (10, 10, 100, 30)

circulo.beginPath()
circulo.arc(150, 1000, 50, 0, Math.PI * 2)
circulo.lineWidth = 7
circulo.strokeStyle = 'purple'