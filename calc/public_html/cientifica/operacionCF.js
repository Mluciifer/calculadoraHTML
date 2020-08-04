
//calculos a realizar>
function operaciones($_op){
    var $_ops={suma:function($_n1,$_n2){return (parseFloat($_n1)+parseFloat($_n2));},
        restar:function($_n1,$_n2){return (parseFloat($_n1)-parseFloat($_n2));},
        multiplicacion:function($_n1,$_n2){return (parseFloat($_n1)*parseFloat($_n2));},
                dividir:function($_n1,$_n2){return (parseFloat($_n1)/parseFloat($_n2));},
                seno:function($_n1){return(Math.sin(parseFloat($_n1)*Math.PI/180));},
                coseno:function($_n1){return(Math.cos(parseFloat($_n1)*Math.PI/180));},
                tangente:function($_n1){return(Math.tan(parseFloat($_n1)*Math.PI/180));},
                cuadrado:function($_n1,$_n2){return(Math.pow(parseFloat($_n1),parseFloat($_n2)));},
                raiz:function($_n1){return (Math.sqrt(parseFloat($_n1)));},
                modulo:function($_n1,$_n2){return(parseFloat($_n1)% parseFloat($_n2));},
                factorial:function($_n1){ 
                    var $_to=1;
                    for(var $_i=1;$_i<=$_n1;$_i++){
                        $_to*=$_i;
                        } 
                       document.getElementById("resultado").value=$_to;
                        return $_to;
                    },
                euler:function(){return (Math.E);},
                parentesis0:function($_n1){
                   var $_y="(";
                   var $_dr=$_y + pasrseFloat($_n1);
                   return $_dr; 
                },
                parentesis1:function($_n1){ 
                    var $_x=")";
                    var $_xr=parseFloat($_n1) + $_x;
                    return $_xr;
                }
              
    };
    
    var $_operaciones;
    
//imprime el valor marcado de cada boton de las operaciones    
   switch ($_op){
       case "sumar":
           var $_sl=document.getElementById("resultado").value;
           document.getElementById("resultado").value= $_sl + "+";
           document.getElementById("memoria").value="sume";
           break;
       case "restar":
            var $_rs=document.getElementById("resultado").value;
            document.getElementById("resultado").value=$_rs + "-";
            document.getElementById("memoria").value="resta";
            break;
       case "multiplicar":
            var $_ml=document.getElementById("resultado").value;
            document.getElementById("resultado").value= $_ml + "x";
            document.getElementById("memoria").value="multipliq";
            break;
        case "dividir":
            var $_dv=document.getElementById("resultado").value;
            document.getElementById("resultado").value=$_dv + "/";
            document.getElementById("memoria").value="divi";
            break;
        case "seno":
            var $_sn=document.getElementById("resultado").value;
            if($_sn==="0"){
            document.getElementById("resultado").value=$_sn+"seno";
            document.getElementById("memoria").value="sin";
            document.getElementById("resultado").style.color="blue";
        }else{
            var $_se="seno";
            var $_rss=$_sn.concat($_se);
            document.getElementById("resultado").value=$_rss;
            document.getElementById("memoria").value="sin";
            document.getElementById("resultado").style.color="red";}
            break;
        case "coseno":
        var $_cs=document.getElementById("resultado").value;
        if($_cs==="0"){
            document.getElementById("resultado").value=$_cs+"coseno";
            document.getElementById("memoria").value="cos";
            document.getElementById("resultado").style.color="green" ;
        }else{
            var $_ce="coseno";
            var $_rcs=$_cs.concat($_ce);
            document.getElementById("resultado").value=$_rcs;
            document.getElementById("resultado").style.color="yellow";
        }
            break;
        case "tangente":
            var $_tn=document.getElementById("resultado").value;
            if($_tn==="0"){
                document.getElementById("resultado").value=$_tn + "tangente";
                document.getElementById("memoria").value="tang";
                document.getElementById("resultado").style.color="red";
            }else {
                var $_tg="tangente";
                var $_rts=$_tn.concat($_tg);
                document.getElementById("resultado").value=$_rts;
                document.getElementById("memoria").style.color="green";
            }
            break;
        case "cuadrado":
                var $_cd=document.getElementById("resultado").value;
                if($_cd==="0"){
                    document.getElementById("resultado").value=$_cd + "^";
                    document.getElementById("memoria").value="cuadr";
                }else{
                    var $_cu="^";
                    var $_rcu=$_cd.concat($_cu);
                    document.getElementById("resultado").value=$_rcu;
                    document.getElementById("memoria").value="cuadr";
                }
                break;
        case "raiz":
                var $_r=document.getElementById("resultado").value;
                if($_r==="0"){
                    document.getElementById("resultado").value=$_r + "√";
                    document.getElementById("memoria").value="root";
                }else{
                    var $_rz="√";
                    var $_rrz=$_r.concat($_rz);
                    document.getElementById("resultado").value=$_rrz;
                    document.getElementById("memoria").value="root";
                }
                break;
        case "module":
                var $_m=document.getElementById("resultado").value;
                if($_m==="0"){
                    document.getElementById("resultado").value=$_m + "Mod";
                    document.getElementById("memoria").value="modl";
                }else{
                    var $_md="Mod";
                    var $_mds=$_m.concat($_md);
                    document.getElementById("resultado").value=$_mds;
                    document.getElementById("memoria").value="modl";
                }
                break;
            case "factorial":
                var $_f=document.getElementById("resultado").value;
                if($_f==="0"){
                    document.getElementById("resultado").value="0";
                    document.getElementById("memoria").value="fact";
                }else{
                    document.getElementById("resultado").value=$_f+"!";
                    document.getElementById("memoria").value="fact";
                }
               break;
           case "euler":
                var $_e=document.getElementById("resultado").value ;
                if($_e==="0"){
                    document.getElementById("resultado").value=Math.E;
                }else {
                    document.getElementById("resultado").value=$_e + Math.E;
                }
                break;
            case "pi":
                var $_p=document.getElementById("resultado").value;
                if($_p==="0"){
                    document.getElementById("resultado").value=Math.PI;
                }else{
                    document.getElementById("resultado").value=$_p + Math.PI;
                }
                break;
            //boton cambio de signo +/-    
            case "mm":
                var $_mm=document.getElementById("resultado").value;
                if($_mm==="0"){
                    document.getElementById("resultado").value="0";
                }else{
                   var $_h= document.getElementById("resultado").value;
                   var $_me=document.getElementById("memoria").value=$_h;
                   var $_k= Math.sign($_h);
                   if($_k=== -1){
                      var $_i=parseFloat($_me)*-1;
                       document.getElementById("resultado").value= $_i;
                   }else{
                       document.getElementById("resultado").value="-"+$_h;
                        }
                    }
                    break;
                // parentesis (    
                case "parentesis":
                    var $_p=document.getElementById("resultado").value;
                    if($_p==="0"){
                        var $_t="(";
                         var $_pt=parseFloat($_p);
                         var $_ptr=$_t + $_pt ;
                         document.getElementById("resultado").value=$_ptr;
                        document.getElementById("memoria").value;
                }else{
                     var $_pr="(";
                     var $_ptr=$_p.concat($_pr);
                    document.getElementById("resultado").value=$_ptr;
                    document.getElementById("memoria").value;
                }
                break;
            //parentesis )    
            case "parentesis1":
                var $_o=document.getElementById("resultado").value;
                if($_o==="0"){
                    var $_op=")";
                    var $_po=parseFloat($_o);
                    var $_por=$_po + $_op;
                    document.getElementById("resultado").value=$_por;
                  document.getElementById("memoria").value;
                }else {
                    var $_pi=")";
                    var $_pir=$_o.concat($_pi);
                    document.getElementById("resultado").value=$_pir;
                    document.getElementById("memoria").value;
                }
            break;
            
//boton backsapce para borrar caracteres hacia atras
                case "borrar":
                  var $_br=document.getElementById("resultado"); 
                  $_br.value=$_br.value.substring(0,$_br.value.length -1);
                break;
      
//opciones para el resultado de cada operacion elegida        
                case "igual":
                  $_operaciones=document.getElementById("resultado").value;
                  var $_mem=document.getElementById("memoria").value;
           
            switch ($_mem){
                case "sume":
                   var $_ope= $_operaciones.split("+");
                    var $_so=$_ops.suma($_ope[0],$_ope[1]);
                    document.getElementById("resultado").value=$_so;
                    var $_rts=document.getElementById("resultado").value;
                    if($_rts==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "resta":
                    var $_rs= $_operaciones.split("-");
                    var $_rt= $_ops.restar($_rs[0],$_rs[1]);
                    document.getElementById("resultado").value=$_rt;
                    var $_rt2=document.getElementById("resultado").value;
                    if($_rt2==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "multipliq":
                    var $_mlt=$_operaciones.split("x");
                    var $_mt=$_ops.multiplicacion($_mlt[0],$_mlt[1]);
                    document.getElementById("resultado").value=$_mt;
                    var $_mt2= document.getElementById("resultado").value;
                    if($_mt2==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "divi":
                    var $_di=$_operaciones.split("/");
                    var $_rdv=$_ops.dividir($_di[0],$_di[1]);
                    document.getElementById("resultado").value=$_rdv;
                    var $_rdvs=document.getElementById("resultado").value;
                    if($_rdvs==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "sin":
                    var $_si=$_operaciones.split("seno");
                    var $_rsn0 = $_ops.seno($_si[0]);
                    var $_rsn = $_ops.seno($_si[1]);
                    document.getElementById("resultado").value=$_rsn||$_rsn0;
                    var $_rsnd=document.getElementById("resultado").value;
                    if($_rsnd==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                   break;
                case "cos":
                    var $_cn=$_operaciones.split("coseno");
                    var $_rcn0= $_ops.coseno($_cn[0]);
                    var $_rcn= $_ops.coseno($_cn[1]);
                    document.getElementById("resultado").value=$_rcn||$_rcn0;
                    var $_rc=document.getElementById("resultado").value;
                    if ($_rc==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "tang":
                    var $_t= $_operaciones.split("tangente");
                    var $_tgn0=$_ops.tangente($_t[0]);
                    var $_tgn=$_ops.tangente($_t[1]);
                    document.getElementById("resultado").value=$_tgn||$_tgn0;
                    var $_tt=document.getElementById("resultado").value;
                    if ($_tt==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "cuadr":
                    var $_c=$_operaciones.split("^");
                    var $_cp=$_ops.cuadrado($_c[0],$_c[1]);
                    document.getElementById("resultado").value=$_cp;
                    var $_ct=document.getElementById("resultado").value;
                    if($_ct==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "root":
                    var $_r=operaciones.split("√");
                    var $_rp0=$_ops.raiz($_r[0]);
                    var $_rp=$_ops.raiz($_r[1]);
                    document.getElementById("resultado").value=$_rp0||$_rp;
                    var $_rt=document.getElementById("resultado").value;
                    if($_rt==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "modl":
                    var $_ml=operaciones.split("Mod");
                    var $_mls0=$_ops.modulo($_ml[0],$_ml[1]);
                    document.getElementById("resultado").value=$_mls0;
                    var $_mo=document.getElementById("resultado").value;
                    if($_mo==="NaN"){
                        document.getElementById("resultado").value="0";
                        document.getElementById("memoria").value=" ";
                    }
                    break;
                case "fact":
                    var $_fc=operaciones.split("!");
                    var $_fc0=$_ops.factorial($_fc[0]);
                    document.getElementById("resultado").value=$_fc0;
                    break;
                            
                default:
                    document.getElementById("memoria").value;
                    
            }   
            break;
        default:
            var $_g=document.getElementById("resultado").value;
           
   }        if($_g==="NaN"){
            document.getElementById("resultado").value="0";
   }
}
