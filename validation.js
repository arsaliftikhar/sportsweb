function  random() {
    var a=document.getElementById("std-dep").value;
    if(a==="Computer Science")
    {
        var arr=["BSCS","BSIT","BSSE"];
    }
    else if(a==="Physics")
    {
        var arr=["Physics Morning","Physics Evening"];
    }
    else if(a==="Chemistry")
    {
        var arr=["Chemistry Morning","Chemistry Evening"];
    }
    else if(a==="Food Science")
    {
        var arr=["Food Science Morning","Food Science Evening"];
    }
    else if(a==="English")
    {
        var arr=["English Morning","English Evening"];
    }

    var string="";

    for(i=0;i<arr.length;i++)
    {
        string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
    }
    document.getElementById("std-prog").innerHTML=string;
}


function myFunction() {

    var stdname = document.getElementById('std-name');
    var rollno = document.getElementById('std-roll');
    var stddep = document.getElementById('std-dep');
    var stdprog = document.getElementById('std-prog');
    var stdemail = document.getElementById('email');
    var pass = document.getElementById('pass');
    var cpass = document.getElementById('cpass');
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var gameindoor = document.getElementById('game-indoor');
    var gameoutdoor = document.getElementById('game-outdoor');
    var cricket = document.getElementById('cricket');
    var baseball = document.getElementById('baseball');
    var snoker = document.getElementById('snoker');
    var badminton = document.getElementById('badminton');
    var kabbadi = document.getElementById('kabbadi');

    if(stdname.value == '')
    {
        alert('Enter your name please');
        stdname.style.border="2px solid red";
        return false;
    }
    if(male.checked==false && female.checked==false)
    {
        alert('Select gender please');
        return false;
    }
    if(rollno.value == '')
    {
        alert('Enter your roll no please');
        rollno.style.border="2px solid red";
        return false;
    }
    if(stddep.value == '')
    {
        alert('Please select department');
        stddep.style.border="2px solid red";
        return false;
    }
    if(stdprog.value == '')
    {
        alert('Please select program');
        stdprog.style.border="2px solid red";
        return false;
    }
    if(gameindoor.checked==false && gameoutdoor.checked==false)
    {
        alert('Select indoor or outdoor');
        return false;
    }
    if(cricket.checked==false
        && baseball.checked==false
        && snoker.checked==false
        && badminton.checked==false
        && kabbadi.checked==false)
    {
        alert('Please select any game type');
        return false;
    }
    if(stdemail.value == '')
    {
        alert('Enter email ');
        stdemail.style.border="2px solid red";
        return false;
    }
    if(pass.value == '')
    {
        alert('Enter password ');
        pass.style.border="2px solid red";
        return false;
    }
    if(cpass.value == '')
    {
        alert('Enter confirm password ');
        cpass.style.border="2px solid red";
        return false;
    }
    if(pass.value != cpass.value)
    {
        alert('Password Not Match ');
        pass.style.border="2px solid red";
        cpass.style.border="2px solid red";
        return false;
    }



    return true;
}
