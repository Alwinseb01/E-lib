function mouseoverPass(obj) {
  var obj = document.getElementById("password1");
  obj.type = "text";
}
function mouseoutPass(obj) {
  var obj = document.getElementById('password1');
  obj.type = "password";
}

var gname=a;
var gpass=b;
/*var name=document.GForm.uname.value;
  var mail=document.GForm.mail.value;
  var pass=document.GForm.pass.value;
  var rpass=document.GForm.repassword.value;
  var mob=document.GForm.mno.value;*/


function validates()
{   
    var name=document.GForm.uname.value;
  var mail=document.GForm.mail.value;
  var pass=document.GForm.pass.value;
  var rpass=document.GForm.repassword.value;
  var mob=document.GForm.mno.value;
  
  var email=/^\w+([\.-]?\w+)*@\w*(\.\w{2,3})$/;
      gname=name;
    gpass=pass;
    if (name=="")
  {
  alert("Username can't be blank");
  return false;
  }
    else if (mob=="")
  {
  alert("Mobile Number can't be blank");
  return false;
  } 
    else if (mail=="")
  {
  alert("Email ID can't be blank");
  return false;
  }
  else if (rpass=="")
  {
   alert("Please Enter password");
   return false;
  }
  
    else if ((name.length< 5) || (name.length> 15))
    {
      alert("Your Username must be 5 to 15 Characters long.");
      return false;
    }
    else if (isNaN(mob))
    {
     alert("Enter Numeric mobile number value  only");
     return false;
     }
    else if (mob.length!=10)
    {
     alert("Enter 10 digit phone number only");
     return false;
    }
    else if (!mail.match(email))
    {
      alert('Enter correct email address')
    }
   /* else  if (!pass.match(passt))
   {
      alert("Wrong Password type!");
      return false;
    }*/

    var passt= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(!pass.match(passt))
    {
      alert("Please enter The correct password according to instructions")
      return false;
    }

    if(!rpass.match(pass))
    {
      alert("Passwords do not match");
      return false;
    }
    else
    {

    open("loginframe.html");
    }
    
    
    
}

function validate()
{  
	var name1=document.form.uname1.value;
	/*var mail=document.form.mail.value;
	var pass=document.form.pass.value;
	var rpass=document.form.repass.value;
	var mob=document.form.mobile.value;*/
  var pass1=document.form.password.value;
	var pass2= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
	
  if(name1=="")
	{
	alert("Name can't be blank");
	return false;
	}
	else if (pass1.match(pass2))
    {
      window.open("booksigned.html")
      return true;
    }
    
    /*if (pass1.match(window.gpass))
      {
        window.open("booksigned.html");
      }*/
    else 
    {
      alert("Wrong Username or Password!");
    }
	}



/*document.getElementById("userlog").innerHTML = "gname" ;*/