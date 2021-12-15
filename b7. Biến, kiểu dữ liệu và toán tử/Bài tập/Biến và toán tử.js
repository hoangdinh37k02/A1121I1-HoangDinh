let mathpoint;
let physicpoint;
let chemistrypoint;

mathpoint = prompt('Input mathpoint');
physicpoint = prompt('Input Physicpoint');
chemistrypoint = prompt('Input chemistrypoint');

math = parseInt(mathpoint);
physic = parseInt(physicpoint);
chemistry = parseInt(chemistrypoint);

average = (math + physic + chemistry) / 3;

document.write('Average Point is =' + average);