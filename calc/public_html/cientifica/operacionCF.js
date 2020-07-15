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
                seno:function(n1){return(Math.sin(parseFloat(n1)*Math.PI/180));},
                coseno:function(n1){return(Math.cos(parseFloat(n1)*Math.PI/180));},
                tangente:function(n1){return(Math.tan(parseFloat(n1)*Math.PI/180));},
                cuadrado:function(n1,n2){return(Math.pow(parseFloat(n1),parseFloat(n2)));},
                raiz:function(n1){return (Math.sqrt(parseFloat(n1)));},
                modulo:function(n1,n2){return(parseFloat(n1)% parseFloat(n2));},
                factorial:function(n1){ 
                    var to=1;
                    for(var i=1;i<=n1;i++){
                        to*=i;
                        } 
                       document.getElementById("resultado").value=to;
                        return to;
                    },
                euler:function(){return (Math.E);}    
              
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
            document.getElementById("memoria").value="sin";
            document.getElementById("resultado").style.color="red";}
            break;
        case "coseno":
        var cs=document.getElementById("resultado").value;
        if(cs==="0"){
            document.getElementById("resultado").value=cs+"coseno";
            document.getElementById("memoria").value="cos";
            document.getElementById("resultado").style.color="green" ;
        }else{
            var ce="coseno";
            var rcs=cs.concat(ce);
            document.getElementById("resultado").value=rcs;
            document.getElementById("resultado").style.color="yellow";
        }
            break;
        case "tangente":
            var tn=document.getElementById("resultado").value;
            if(tn==="0"){
                document.getElementById("resultado").value=tn + "tangente";
                document.getElementById("memoria").value="tang";
                document.getElementById("resultado").style.color="red";
            }else {
                var tg="tangente";
                var rts=tn.concat(tg);
                document.getElementById("resultado").value=rts;
                document.getElementById("memoria").style.color="green";
            }
            break;
        case "cuadrado":
                var cd=document.getElementById("resultado").value;
                if(cd==="0"){
                    document.getElementById("resultado").value=cd + "^";
                    document.getElementById("memoria").value="cuadr";
                }else{
                    var cu="^";
                    var rcu=cd.concat(cu);
                    document.getElementById("resultado").value=rcu;
                    document.getElementById("memoria").value="cuadr"
                }
                break;
        case "raiz":
                var r=document.getElementById("resultado").value;
                if(r==="0"){
                    document.getElementById("resultado").value=r + "√";
                    document.getElementById("memoria").value="root";
                }else{
                    var rz="√";
                    var rrz=r.concat(rz);
                    document.getElementById("resultado").value=rrz;
                    document.getElementById("memoria").value="root";
                }
                break;
        case "module":
                var m=document.getElementById("resultado").value;
                if(m==="0"){
                    document.getElementById("resultado").value=m + "Mod";
                    document.getElementById("memoria").value="modl";
                }else{
                    var md="Mod";
                    var mds=m.concat(md);
                    document.getElementById("resultado").value=mds;
                    document.getElementById("memoria").value="modl";
                }
                break;
            case "factorial":
                var f=document.getElementById("resultado").value;
                if(f==="0"){
                    document.getElementById("resultado").value="0";
                    document.getElementById("memoria").value="fact";
                }else{
                    document.getElementById("resultado").value=f+"!";
                    document.getElementById("memoria").value="fact";
                }
               break;
           case "euler":
                var e=document.getElementById("resultado").value ;
                if(e==="0"){
                    document.getElementById("resultado").value=Math.E;
                }else {
                    document.getElementById("resultado").value=e + Math.E;
                }
                break;
            case "pi":
                var p=document.getElementById("resultado").value;
                if(p==="0"){
                    document.getElementById("resultado").value=Math.PI;
                }else{
                    document.getElementById("resultado").value=p + Math.PI;
                }
                break;
//boton abacksapce para borrar caracteres 
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
                case "cos":
                    var cn=operaciones.split("coseno");
                    var rcn0= ops.coseno(cn[0]);
                    var rcn= ops.coseno(cn[1]);
                    document.getElementById("resultado").value=rcn||rcn0;
                    var rc=document.getElementById("resultado").value;
                    if (rc==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "tang":
                    var t= operaciones.split("tangente");
                    var tgn0=ops.tangente(t[0]);
                    var tgn=ops.tangente(t[1]);
                    document.getElementById("resultado").value=tgn||tgn0;
                    var tt=document.getElementById("resultado").value;
                    if (tt==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "cuadr":
                    var c=operaciones.split("^");
                    var cp=ops.cuadrado(c[0],c[1]);
                   // var cps=ops.cuadrado(c[1],c[0]);
                    document.getElementById("resultado").value=cp;
                    var ct=document.getElementById("resultado").value;
                    if(ct==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "root":
                    var r=operaciones.split("√");
                    var rp0=ops.raiz(r[0]);
                    var rp=ops.raiz(r[1]);
                    document.getElementById("resultado").value=rp0||rp;
                    var rt=document.getElementById("resultado").value;
                    if(rt==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "modl":
                    var ml=operaciones.split("Mod");
                    var mls0=ops.modulo(ml[0],ml[1]);
                    document.getElementById("resultado").value=mls0;
                    var mo=document.getElementById("resultado").value;
                    if(mo==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "fact":
                    var fc=operaciones.split("!");
                    var fc0=ops.factorial(fc[0]);
                    document.getElementById("resultado").value=fc0;
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
