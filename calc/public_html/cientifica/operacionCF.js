/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//calculos a realizar>
function operaciones(op){
    var ops={suma:function(n1,n2){return (parseFloat(n1)+parseFloat(n2));},
        restar:function(n1,n2){return (parseFloat(n1)-parseFloat(n2));},
        multiplicacion:function(n1,n2){return (parseFloat(n1)*parseFloat(n2));},
                dividir:function(n1,n2){return (parseFloat(n1)/parseFloat(n2));},
                seno:function(n1){return(Math.sin(parseFloat(n1)*Math.PI/180));}
    };
    
    var operaciones;
    
   switch (op){
       case "sumar":
           var sl=document.getElementById("resultado").value;
           document.getElementById("resultado").value= sl + "+";
           document.getElementById("memoria").value="sume";
           break;
       case "restar":
            var rs=document.getElementById("resultado").value;
            document.getElementById("resultado").value=rs + "-";
            document.getElementById("memoria").value="resta";
            break;
       case "multiplicar":
            var ml=document.getElementById("resultado").value;
            document.getElementById("resultado").value= ml + "x";
            document.getElementById("memoria").value="multipliq";
            break;
        case "dividir":
            var dv=document.getElementById("resultado").value;
            document.getElementById("resultado").value=dv + "/";
            document.getElementById("memoria").value="divi";
            break;
           
        case "seno":
           
            var sn=document.getElementById("resultado").value;
            if(sn==="0"){
            document.getElementById("resultado").value=sn+"seno";
            document.getElementById("memoria").value="sin";
            document.getElementById("resultado").style.color="blue";
        }else{
            var se="seno";
            var rss=sn.concat(se);
            document.getElementById("resultado").value=rss;
            document.getElementById("resultado").style.color="red";}
            
           
            break;
//boton backsapce para borrar caracteres 
        case "borrar":
            var br=document.getElementById("resultado"); 
            br.value=br.value.substring(0,br.value.length -1);
           break;
           
        case "igual":
           operaciones=document.getElementById("resultado").value;
           var mem=document.getElementById("memoria").value;
           
            switch (mem){
                case "sume":
                   var ope= operaciones.split("+");
                    var so=ops.suma(ope[0],ope[1]);
                    document.getElementById("resultado").value=so;
                    var rts=document.getElementById("resultado").value;
                    if(rts==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "resta":
                    var rs= operaciones.split("-");
                    var rt= ops.restar(rs[0],rs[1]);
                    document.getElementById("resultado").value=rt;
                    var rt2=document.getElementById("resultado").value;
                    if(rt2==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "multipliq":
                    var mlt=operaciones.split("x");
                    var mt=ops.multiplicacion(mlt[0],mlt[1]);
                    document.getElementById("resultado").value=mt;
                    var mt2= document.getElementById("resultado").value;
                    if(mt2==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "divi":
                    var di=operaciones.split("/");
                    var rdv=ops.dividir(di[0],di[1]);
                    document.getElementById("resultado").value=rdv;
                    var rdvs=document.getElementById("resultado").value;
                    if(rdvs==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "sin":
                    
                    var si=operaciones.split("seno");
                    var rsn0 = ops.seno(si[0]);
                    var rsn = ops.seno(si[1]);
                    
                    document.getElementById("resultado").value=rsn||rsn0;
                   
                    var rsnd=document.getElementById("resultado").value;
                    if(rsnd==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                   
                    break;
                    
                default:
                    var k=document.getElementById("memoria").value;
                    
            }
            break;
        default:
            var g=document.getElementById("resultado").value;
           
   }        if(g==="NaN"){
            document.getElementById("resultado").value="0";
   }
}
