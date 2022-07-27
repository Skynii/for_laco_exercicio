const elemento = [
   {tag: 'p', texto:'Frase 1'},
   {tag: 'div', texto:'Frase 2'},
   {tag: 'footer', texto:'Frase 3'},
   {tag: 'section', texto:'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

//*Vai imprimir as tags dento da const div */
for( let i = 0; i < elemento.length; i++) {
   //*Destruturação de objeto
   let { tag, texto } = elemento[i];
   let tagCriada = document.createElement(tag);
   let textoCriado = document.createTextNode(texto);


   //tagCriada.innerText = texto;
   tagCriada.appendChild(textoCriado);
   div.appendChild(tagCriada);
}

container.appendChild(div);