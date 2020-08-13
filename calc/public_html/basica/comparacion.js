
//funciones que validan al añadir el valor de cada boton  BOTONES !!> 
function uno(){
    var $_un=document.getElementById("resultado").value;
    if($_un==="0"){
        document.getElementById("resultado").value="1";
    }else {
        var $_u="1";
        var $_rsu=$_un.concat($_u);
        document.getElementById("resultado").value=$_rsu;
    }
}
function dos(){
    var $_ds=document.getElementById("resultado").value;
    if($_ds=="0"){
        document.getElementById("resultado").value="2";
    }else {
        var $_d="2";
        var $_rds=$_ds.concat($_d);
        document.getElementById("resultado").value=$_rds;
    }
}
function tres(){
    var $_ts=document.getElementById("resultado").value;
    if($_ts==="0"){
        document.getElementById("resultado").value="3";
    }else {
        var $_t="3";
        var $_rds=$_ts.concat($_t);
        document.getElementById("resultado").value=$_rds;
    }
}
function cuatro(){
    var $_cs=document.getElementById("resultado").value;
    if ($_cs==="0"){
        document.getElementById("resultado").value="4";
    }else {
        var $_c="4";
        var $_rsc= $_cs.concat($_c);
        document.getElementById("resultado").value=$_rsc;
    }
}
function  cinco(){
    var $_ci=document.getElementById("resultado").value;
    if ($_ci==="0"){
        document.getElementById("resultado").value="5";
    }else {var $_cc="5";
    var $_rscc= $_ci.concat($_cc);
    document.getElementById("resultado").value=$_rscc;
}
}
function seis(){
    var $_se=document.getElementById("resultado").value;
    if($_se=="0"){
        document.getElementById("resultado").value="6";
    }else {
        var $_sei ="6";
        var $_rse=$_se.concat($_sei);
        document.getElementById("resultado").value=$_rse;
    }
}
function siete(){
    var $_st=document.getElementById("resultado").value;
    if($_st=="0"){
        document.getElementById("resultado").value="7";
    }else{
        var $_s="7";
        var $_rst=$_st.concat($_s);
        document.getElementById("resultado").value=$_rst;
        
    }
}
function ocho(){
    var $_oc=document.getElementById("resultado").value;
    if($_oc=="0"){
        document.getElementById("resultado").value="8";
    }else{
        var $_oh="8";
        var $_rso=$_oc.concat($_oh);
        document.getElementById("resultado").value=$_rso;
    }
}
function nueve(){
    var $_nu=document.getElementById("resultado").value;
    if($_nu=="0"){
        document.getElementById("resultado").value="9";
    }else {
    var $_nv ="9";
    var $_rsn=$_nu.concat($_nv);
    document.getElementById("resultado").value=$_rsn;
    }
}
function cero(){
    var $_ce=document.getElementById("resultado").value;
    if($_ce=="0"){
        var $_re="0";
        var $_rsre=$_ce.concat($_re);
        document.getElementById("resultado").value=$_rsre;
    }else{
        var $_cr="0";
        var $_rsce=$_ce.concat($_cr);
        document.getElementById("resultado").value=$_rsce;
    }
    
}

