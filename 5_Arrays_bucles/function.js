function myfunction()   
{   //variables declaration
    let apellidos=document.getElementById("apellidos").value;
    let nombres=document.getElementById("nombres").value;
    let nota=document.getElementById("nota").value;
    
    
    let ul = document.getElementById("nota_ul");
    let li = document.createElement("li");


    li.appendChild(document.createTextNode(apellidos+","+nombres+","+nota));
    ul.appendChild(li);

    const lis = document.getElementById('nota_ul').getElementsByTagName('li');
    
    let cadena="";
    // Loop through the NodeList object. 
    for (let i = 0; i <= lis.length - 1; i++) {
        cadena=cadena+lis[i].textContent+"\n";
    }
  //  alert(cadena);
}
function limpiar(){
    let lis = document.getElementById('nota_ul');
  //  let cadena=lis.children[1];//obtiene un registro sub i
    let i=0;
   while (lis.firstChild) {
    lis.removeChild(lis.firstChild);
  }
}
function ordenar(){
    let personaSplit=[''];
    let persona = {
        nombre: '',
        apellido: '',
        nota: 0,
        };
    let personas=[];
    const lis = document.getElementById('nota_ul').getElementsByTagName('li');
    const psOrden=document.querySelector('input[name="sort"]:checked').value;
    let orden=1;
    let cantNotas=0;

    for (let i = 0; i <= lis.length - 1; i++) {
        personaSplit=lis[i].textContent.split(',');
        persona.nombre=personaSplit[0];
        persona.apellido=personaSplit[1];
        persona.nota=personaSplit[2];
        personas.push(persona);
    }
    switch (psOrden) {
        case 'Nombre':
          orden=0;
          break;
        case 'Apellido':
          orden=1;
          break;
        default:
          orden=2;
      }
    cantNotas=personas.length;

    alert(cantNotas);

}