let can = document.getElementById ('canvas')
let c = can.getContext ('2d')

let ex = document.querySelector ('#ex')
let e = ex.getContext ('2d')

//Retângulo exemplo
e.fillStyle = 'white'
e.fillRect (150,100,300,150)

//Circulo exemplo
e.beginPath()
e.arc(720,470,90,0,Math.PI*2)
e.fillStyle = 'white'
e.fill()

//Linha exemplo
e.beginPath()
e.moveTo (200,700)
e.lineTo(400,800)
e.lineTo(400,700)
e.lineTo(200,800)
e.lineTo(200,700)
e.strokeStyle = 'white'
e.lineWidth = 5
e.stroke()

//Curva exemplo
e.beginPath()
e.arc(720,1020,90,0,Math.PI)
e.lineWidth = 10
e.stroke()

//Imagem exemplo
let imagem = new Image()
imagem.src = 'IMG/Gandalf.jpg'
imagem.addEventListener('load',()=>{
    e.drawImage(imagem,50,1250)
})

//Criculos para demonstração "estrelas e lua"
c.beginPath()
c.arc(500,350, 130, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(300, 100, 4, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(200, 20, 7, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(500, 120, 8, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(600, 180, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(380, 200, 4, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(700, 70, 2, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(800, 150, 5, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(900, 60, 7, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(960, 100, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(800, 40, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(400, 40, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(600, 60, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(700, 180, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(270, 160, 3, 0, Math.PI*2)
c.fillStyle = 'white'
c.fill()

c.beginPath()
c.arc(410, 330, 20, 0, Math.PI*2)
c.fillStyle = '#e9f2c4'
c.fill()

c.beginPath()
c.arc(490, 260, 30, 0, Math.PI*2)
c.fillStyle = '#e9f2c4'
c.fill()

c.beginPath()
c.arc(580, 380, 40, 0, Math.PI*2)
c.fillStyle = '#e9f2c4'
c.fill()

//Linha para demonstração "montanhas"
c.beginPath()
c.moveTo (0,0)
c.lineTo(140,80)
c.lineTo(170,150)
c.lineTo(270,250)
c.lineTo(340,400)
c.lineTo(0,400)
c.fillStyle = '#353053'
c.fill()

c.beginPath()
c.moveTo(100,400)
c.lineTo(120, 330)
c.lineTo(160,280)
c.lineTo(180,220)
c.lineTo(250,200)
c.lineTo(320,240)
c.lineTo(340,300)
c.lineTo(370,340)
c.lineTo(400,370)
c.lineTo(420,400)
c.fillStyle = '#4e4a69'
c.fill()

c.beginPath()
c.moveTo(1000, 100)
c.lineTo(900,170)
c.lineTo(850,220)
c.lineTo(780,270)
c.lineTo(750,320)
c.lineTo(720,400)
c.lineTo(1000,400)
c.fillStyle = '#353053'
c.fill()

c.beginPath()
c.moveTo(600, 400)
c.lineTo(630, 320)
c.lineTo(680, 280)
c.lineTo(700, 230)
c.lineTo(710, 200)
c.lineTo(760, 160)
c.lineTo(800, 180)
c.lineTo(830, 240)
c.lineTo(860, 270)
c.lineTo(890, 330)
c.lineTo(930, 400)
c.fillStyle = '#4e4a69'
c.fill()

//Retâmgulo demonstração "chão"
c.fillStyle  = '#5873b5'
c.fillRect(0,400,1000,100)

//Complementos lobo 
c.beginPath()
c.arc(746, 460, 90, 0, Math.PI*2)
c.fillStyle = '#283359'
c.fill()

c.beginPath()
c.arc(746, 460, 50, 0, Math.PI*2)
c.fillStyle = '#9c9c9c'
c.fill()

c.beginPath()
c.arc(746, 360, 60, 0, Math.PI*2)
c.fillStyle = '#283359'
c.fill()

//Imagem "cabeça do lobo"
let img = new Image()
img.src = 'IMG/lobo.png'
img.addEventListener('load',()=>{
    c.drawImage(img,620,200)
})





