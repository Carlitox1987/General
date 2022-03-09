function myfunction()   
{   
    let inputVal=document.getElementById("myInput").value;
    let cadena="caballo";
    let numero=Number(123);
    let fecha=new Date();
    document.write("pensaste que te iba a devolver <br> el tipo de la palabra que ingresaste ¿no?<br> Pues no, el caso es que el metodo isNaN funciona raro (por no decir mal), <br>y eso es solo para verificar si es un numero o no. así que, abajo un listado de variables y sus tipo<br>"
    +cadena+" tipo:"+typeof cadena+"<br>"
    +numero+" tipo:"+typeof numero+"<br>"
    +fecha+" tipo:"+typeof fecha+"<br>.<br>.<br>.<br>.<br>.<br>.<br>"
    +"bueno, sí puse lo que escribiste:"+inputVal
    );  
}  