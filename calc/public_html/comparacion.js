/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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