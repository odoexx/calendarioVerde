var total1=0,total2=0,total3=0,total;
let heladera,lavarropas,transporte;
function respuesta(num_pregunta,seleccionada){
    //pone el blanco las demas opciones
    //
    ///artefactos electricos
    if(num_pregunta==2){
    heladera=seleccionada.value;
    }
    if(num_pregunta==3){
      lavarropas=seleccionada.value;
    }
    ///transporte
    if(num_pregunta==8){
    transporte=seleccionada.value;
    }
}
function corregir(){
  var pcEscritorio=document.getElementById("p1").value;
  var pcPortatil=document.getElementById("p2").value;
  var televisor=document.getElementById("p3").value;
  var Dias=document.getElementById("p8").value;
  var Horas=document.getElementById("p9").value;
  var pavaElectrica=document.getElementById("p10").value;
  var microondas=document.getElementById("p11").value;
  var focos=document.getElementById("p12").value;
  var lampara=document.getElementById("p13").value;

  var total1=0;
  total1=(pcEscritorio*80.5)+(pcPortatil*2.46)+(televisor*41.7);
  
  if(heladera==1){
    total1=total1+(350*0.4638);
  }else if(heladera==2){
    total1=total1+(388*0.4638);
  }else if(heladera==3){
    total1=total1+(420*0.4368);
  }
  if(lavarropas==1){
    total1=total1+(56*Dias*0.182*Horas);  
  }else if(lavarropas==2){
    total1=total1+(56*Dias*0.882*Horas);
  }else if(lavarropas==3){
    total1=total1+(56*Dias*0.08*Horas);
  }
     total1=total1+(pavaElectrica*4.56);
     total1=total1+(microondas*1.118);
     total1=total1+(focos*1.38);
     total1=total1+(lampara*13.8);


    document.getElementById("resultado").innerHTML=total1;
    
}
function corregir2(){
  total2=0;
  var estufa=document.getElementById("p1").value;
  var caloventor=document.getElementById("p2").value;
  var ventilador=document.getElementById("p3").value;
  var aire=document.getElementById("p4").value;
  total2=total2+(estufa*50.02)+(caloventor*92.34)+(ventilador*5.9)+(aire*66.46);

  document.getElementById("resultado2").innerHTML=total2;

}
function corregir3(){
  total3=0;
  var dias=document.getElementById("p1").value;
  var km=document.getElementById("p2").value;
  if(transporte==1){
    total3=total3+(56*dias*km*(6.2/100)*2.37);
  }else if(transporte==2 || transporte==4){
    total3=total3+(56*dias*km*(5.3/100)*2.77);
  }else if(transporte==3){
    total3=total3+(56*dias*km*(3/100)*2.37);
  }
  document.getElementById("resultado3").innerHTML=total3;
}
function calculoFinal(){
  //total=0;
 
  document.getElementById("total").innerHTML=total1+total2+total3;

}