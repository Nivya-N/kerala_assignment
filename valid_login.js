let email = document.getElementById("exampleInputEmail1");
let pwd1=document.getElementById("exampleInputPassword1");
function validate()
{
    if(email.value.trim()=="")
    {
        alert("Enter email id");
        return false;
    }
    else if (pwd1.value.trim()=="")
    {
        alert("Enter phone number");
        return false;
    }
    else
    {
        return true;
    }
}