function myfunction()   
{   //variables declaration
    let apellidos=document.getElementById("apellidos").value;
    let nombres=document.getElementById("nombres").value;
    let nota=document.getElementById("nota").value;
    
    
    let ul = document.getElementById("nota_ul");
    let li = document.createElement("li");


    li.appendChild(document.createTextNode(apellidos+","+nombres+"-"+nota));
    ul.appendChild(li);

    const lis = document.getElementById('nota_ul').getElementsByTagName('li');
    
    let cadena="";
    // Loop through the NodeList object. 
    for (let i = 0; i <= lis.length - 1; i++) {
        cadena=cadena+lis[i].textContent+"\n";
    }
    alert(cadena);
}
function limpiar(){
    const lis = document.getElementById('nota_ul').getElementsByTagName('li');
    alert("se va a limpar");
    let cadena="";
    // Loop through the NodeList object. 
    for (let i = 0; i <= lis.length - 1; i++) {
        lis.removeChild(lis.removeChild[i]);
    }
}
