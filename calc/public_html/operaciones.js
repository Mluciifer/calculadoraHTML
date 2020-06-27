/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//calculos a realizar00000>
function operaciones(op){
    var ops={suma:function(n1,n2){return (parseInt(n1)+parseInt(n2));}
    };
    
    var operaciones;
    
   switch (op){
       case "sumar":
           var sl=document.getElementById("resultado").value;
           document.getElementById("resultado").value= sl + "+";
           document.getElementById("memoria").value="sume";
           break;
       case "igual":
           operaciones=document.getElementById("resultado").value;
           var mem=document.getElementById("memoria").value;
           
            switch (mem){
                case "sume":
                   var ope= operaciones.split("+");
                    var so=ops.suma(ope[0],ope[1]);
                    document.getElementById("resultado").value=so;
                    break;
            }
            break;
   }
}
