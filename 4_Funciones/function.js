function myfunction()   
{   //variables declaration
    let resultado=document.getElementById("resultado");
    let msj_Res="";

    //refresh eframe
    refresh_frame();

    //main code   
    msj_Res=birthday(document.getElementById("mes").value,document.getElementById("dia").value)
    resultado.innerHTML=msj_Res;
    if(msj_Res=="Feliz Cumpleaños")
    {
        document.getElementById("cumple").style.display = "block";
        document.getElementById("cumple").src="https://www.youtube.com/embed/0BEPiXneZ9A?start=18&autoplay=1";
    }
}
function birthday(mes,dia)
{    
    //calculate message
    mes=Number(mes)-1;
    let fechaHoy=new Date();
    fechaHoy=new Date(fechaHoy.getFullYear(),fechaHoy.getMonth(),fechaHoy.getDate());
    let fechaCump= new Date(fechaHoy.getFullYear(), mes, dia);
    if(fechaCump.getTime()>fechaHoy.getTime())
    {
        return 'Todavia no cumpliste amigazo';
    }
    else if(fechaCump.getTime()<fechaHoy.getTime())
    {
        return'Ufff, me perdí tu fiesta...para la próxima si?';
    }
    else
    {
        return 'Feliz Cumpleaños'
    }
}
function refresh()
{
    refresh_frame();
    document.getElementById("dia").value="01"
    document.getElementById("mes").value="01";
    document.getElementById("anio").value="1900";
}
function refresh_frame()
{
    document.getElementById("cumple").style.display = "none";
    document.getElementById("cumple").src="";
}