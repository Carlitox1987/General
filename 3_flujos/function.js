function myfunction()   
{   
    let inputVal=document.getElementById("myInput").value;

    //document.write();
    if(inputVal==null || inputVal=="")
    {

        alert("Ponele voluntad...");

    }
    else if (!isNaN(inputVal)){
        alert("viejo...eso ni siquiera es una palabra :/");
    }
    else if(inputVal=="for"){
        let palabra=null;
        palabra="for".charAt(0);
        for (c=1;c<"for".length;c++){
            palabra=palabra+"-"+"for".charAt(c);
        }
        alert("ah, escribiste una palabra prohibida. Acá te la deletreo para que la sepas:\n"+palabra);
    }
    else if(inputVal=="while"){
        let palabra=null;
        let count=1;
        palabra="while".charAt(0);
        while(count<"while".length)
        {
            palabra=palabra+"-"+"while".charAt(count); 
            count++;
        }
        alert("ajam, está es una de las palabras prohibidas. Te la deletreo así la ves:\n"+palabra);
    }
    else if(inputVal!=="magica")
    {
        alert("ahahah, \""+inputVal+"\" no es la palabra mágica");
    }
}