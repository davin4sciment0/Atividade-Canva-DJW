# Atividade-Canva-DJW

## Nesse trabalho do Cavnas, nós fizemos algumas formas usando o Canvas do JavaScript. As formas que fizemos foram:
- Retângulo
- Círculo
- Linha
- Curva
- Imagem

## Retângulo :white_square_button:
Para fazer o Retângulo, usamos o código de fillRect depois decidimos o seu valor de X, Y sua largura e altura, após isso foi usado o código fillstyle para dar cor ao objeto.

## Círculo :large_blue_circle:
Para fazer o Círculo, usamos alguns código sendo eles beignPath que irá criar uma nova Path para futuros comandos de desenho, após isso foi utilizado o .arc para fazer o arco do círculo depois decidimos seus valores de X, Y, o seu ângulo, e o valor do PI para o seu raio.

## Linha :heavy_minus_sign:
Para fazer a linha foi usado o comando de beginPath (Citado a cima), .moveTo que conota o ínicio da linha o movendo para as coordenadas X, Y desejada e depois usadao o .lineTo para desenhar a linha para os eixos X e Y. Logo após foi definido a espessura da linha com o .lineWidth com valor de 5 e por final o .stroke para renderizar.

## Curva :wavy_dash:
A curva diferente da linha, não foi usado o lineTo ou o moveTo, foi usado o mesmo do círculo o .arc e decidindo os mesmo valores menos o do PI que no círculo será PI vezes 2 e no arco será somente PI, logo após definindo a espessura da linha com o .lineWidth no qual o valor atribuído foi 10 e por fim usado o .stroke para redenrizar.

## Imagem :camera:
Para a imagem, primeiro foi definido um let image = new image(), depois ocorre a chamada da foto para o canvas, foi adicionado um Listener para fazer load da foto no site e por último um .drawImage para renderizar a imagem no site, com os dois valores atríbuidos nos parênteses do drawImagem.

## Exemplo de como podemos usar a tag "canva"
<image src="IMG/Lua.jpg"></image>
