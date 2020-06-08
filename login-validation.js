function myFunction()
{

    var email = document.getElementById('email');
    var pass = document.getElementById('pass');

    if(email.value == '')
    {
        alert('Enter email address');
        email.style.border='2px solid red';
        return false;
    }
    if(pass.value == '')
    {
        alert('Enter password');
        pass.style.border='2px solid red';
        return false;
    }

return true;

}