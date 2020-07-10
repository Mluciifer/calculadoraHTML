/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//funciones que validan al añadir el valor de cada boton  BOTONES !!> 
function uno(){
    var un=document.getElementById("resultado").value;
    if(un==="0"){
        document.getElementById("resultado").value="1";
    }else {
        var u="1";
        var rsu=un.concat(u);
        document.getElementById("resultado").value=rsu;
    }
}
function dos(){
    var ds=document.getElementById("resultado").value;
    if(ds=="0"){
        document.getElementById("resultado").value="2";
    }else {
        var d="2";
        var rds=ds.concat(d);
        document.getElementById("resultado").value=rds;
    }
}
function tres(){
    var ts=document.getElementById("resultado").value;
    if(ts=="0"){
        document.getElementById("resultado").value="3";
    }else {
        var t="3";
        var rds=ts.concat(t);
        document.getElementById("resultado").value=rds;
    }
}
function cuatro(){
    var cs=document.getElementById("resultado").value;
    if (cs=="0"){
        document.getElementById("resultado").value="4";
    }else {
        var c="4";
        var rsc= cs.concat(c);
        document.getElementById("resultado").value=rsc;
    }
}
function  cinco(){
    var ci=document.getElementById("resultado").value;
    if (ci=="0"){
        document.getElementById("resultado").value="5";
    }else {var cc="5";
    var rscc= ci.concat(cc);
    document.getElementById("resultado").value=rscc;
}
}
function seis(){
    var se=document.getElementById("resultado").value;
    if(se=="0"){
        document.getElementById("resultado").value="6";
    }else {
        var sei ="6";
        var rse=se.concat(sei);
        document.getElementById("resultado").value=rse;
    }
}
function siete(){
    var st=document.getElementById("resultado").value;
    if(st=="0"){
        document.getElementById("resultado").value="7";
    }else{
        var s="7";
        var rst=st.concat(s);
        document.getElementById("resultado").value=rst;
        
    }
}
function ocho(){
    var oc=document.getElementById("resultado").value;
    if(oc=="0"){
        document.getElementById("resultado").value="8";
    }else{
        var oh="8";
        var rso=oc.concat(oh);
        document.getElementById("resultado").value=rso;
    }
}
function nueve(){
    var nu=document.getElementById("resultado").value;
    if(nu=="0"){
        document.getElementById("resultado").value="9";
    }else {
    var nv ="9";
    var rsn=nu.concat(nv);
    document.getElementById("resultado").value=rsn;
    }
}
function cero(){
    var ce=document.getElementById("resultado").value;
    if(ce=="0"){
        var re="0";
        var rsre=ce.concat(re);
        document.getElementById("resultado").value=rsre;
    }else{
        var cr="0";
        var rsce=ce.concat(cr);
        document.getElementById("resultado").value=rsce;
    }
    
}
function sen(){
    var se=document.getElementById("resultado").value;
    if(se==="0"){
     document.getElementById("resultado").value="seno";
     document.getElementById("resultado").style.color="blue";
    }else{
        var sn="seno";
        var rss=se.concat(sn);
        document.getElementById("resultado").value=rss;
        document.getElementById("resultado").style.color="red";
    }
}

