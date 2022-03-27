function myfunction()   
{   //variables declaration
    let apellidos=document.getElementById("apellidos").value;
    let nombres=document.getElementById("nombres").value;
    let nota=document.getElementById("nota").value;
    
    
    let ul = document.getElementById("nota_ul");
    let li = document.createElement("li");


    li.appendChild(document.createTextNode(apellidos+","+nombres+","+nota));
    ul.appendChild(li);

}
////////////////////////////////////////////////////////////////////////////////////////
function limpiar(){
    let ul = document.getElementById('nota_ul');
    let i=0;
   while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

////////////////////////////////////////////////////////////////////////////////////////
function ordenar(){
    let personaSplit=[''];
    let personas= new Array();
    const ul_li = document.getElementById('nota_ul').getElementsByTagName('li');
    const psOrden=document.querySelector('input[name="sort"]:checked').value;
    let cantNotas=0;
    let tam=0;
    let subtam=0;

    for (let i = 0; i <= ul_li.length - 1; i++) {
        personaSplit=ul_li[i].textContent.split(',');
        let persona = {
          nombre: personaSplit[1],
          apellido: personaSplit[0],
          nota: parseInt(personaSplit[2]),
          };
        personas.push(persona);
    }

      tam=personas.length;
      subtam=tam;
      for (i = 1; i < tam; i++) {
        for (j = 0; j < (subtam - i); j++) {
          let valor_actual;
          let valor_sig;
          switch (psOrden) {
            case 'Nombre':
              valor_actual=personas[j].nombre;
              valor_sig=personas[j+1].nombre;
              break;
            case 'Apellido':
              valor_actual=personas[j].apellido;
              valor_sig=personas[j+1].apellido;
              break;
            default:
              valor_actual=personas[j].nota;
              valor_sig=personas[j+1].nota;
          }

            if (valor_actual > valor_sig) {
              let aux=personas[j];
                personas[j] = personas[j + 1];
                personas[j + 1] = aux;
            }
        }
      }
      
      limpiar();
      for (let i=0;i<=personas.length-1;i++){
        let li = document.createElement("li");
        let ul = document.getElementById("nota_ul");
        li.appendChild(document.createTextNode(personas[i].apellido+","+personas[i].nombre+","+personas[i].nota));
        ul.appendChild(li);
        console.log(personas[i].apellido+","+personas[i].nombre+","+personas[i].nota);
      }

      console.log(personas);
}