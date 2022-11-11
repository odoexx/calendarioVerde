let resultado1=0,resultado2=0,resultado3=0,total1=0;

function respuesta(num_pregunta,seleccionada){
    //pone el blanco las demas opciones
    //
    if(num_pregunta==1){
        total1=seleccionada.value*80.5;
    }
    if(num_pregunta==2){
        total1=total1+seleccionada.value*2.46;
    }
    if(num_pregunta==3){
        total1=total1+seleccionada.value*41.7;
    }
  if(num_pregunta==4){
    if(seleccionada.value==1){
        total1=total1+(350*0.4638);
    }else if(seleccionada.value==2){
        total1=total1+(388*0.4638);
    }else if(seleccionada.value==3){
        total1=total1+(420*0.4630);
    }
  }  
}
function corregir(){
    document.getElementById("resultado").innerHTML=total1;
}