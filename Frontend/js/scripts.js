var step_1=document.getElementById("step_1");
var step_2=document.getElementById("step_2");
var step_3=document.getElementById("step_3");
var container=document.getElementById("container");
var i =0;

var first_name=document.getElementById("first_name");
var last_name=document.getElementById("last_name");
var gender=document.getElementById("email");
var address=document.getElementById("address");
var country=document.getElementById("country");
var state=document.getElementById("state");
var phone=document.getElementById("phone");
var zip_code=document.getElementById("zip_code");
var company_name =document.getElementById("company_name");
var email=document.getElementById("email");
var year_exp=document.getElementById("year_exp");
var terms=document.getElementById("terms");
var file_path=document.getElementById("file_path");
var verify_code=document.getElementById("verify_code");

var next_btn_1=document.getElementById("next_btn_1");
var next_btn_2=document.getElementById("next_btn_2");
var back_btn_1=document.getElementById("back_btn_1");
var back_btn_2=document.getElementById("back_btn_2");

var progress=document.getElementById("progress");
const post_form = document.querySelector('.add-post-form');

next_btn_1.onclick = function()
{     
  if (first_name.value=="")       
  {         
    first_name.className = "invalid";     
  } 
  else if (last_name.value=="")       
  {   
    first_name.className = "";      
    last_name.className = "invalid";     
  }
  else if((document.user_form.gender[0].checked==false)&&(document.user_form.gender[1].checked==false))
  {     
      first_name.className = "";               
      alert("Please select a gender.");
  }
  else if (address.value=="")       
  {                    
    address.className = "invalid";     
  }
  else if (country.value=="")       
  {   
    address.className = "";      
    country.className = "invalid";     
  }
  else if (state.value=="")       
  {   
    country.className = "";      
    state.className = "invalid";     
  }
  else if (phone.value=="")       
  {   
    country.className = "";      
    phone.className = "invalid";     
  }
  else if(phone.value.length != 10 )          
  {
    country.className = "";      
    phone.className = "invalid"; 
  }
  else if(isNaN(phone.value))          
  {
    country.className = "";                 
    phone.className = "invalid"; 
  }
  else if (zip_code.value=="")       
  {   
    phone.className = "";      
    zip_code.className = "invalid";     
  }
  else if(isNaN(zip_code.value))          
  {
    zip_code.className = "";                 
    zip_code.className = "invalid"; 
  }
  else
  {
    first_name.className = "";
    last_name.className = "";
    address.className = "";
    country.className = "";
    state.className = "";
    phone.className = "";
    zip_code.className = "";
    step_1.style.left="-400px";
    step_2.style.left="40px";
    container.style.height="450px"
    progress.style.width = "264px";
  }      

}

back_btn_1.onclick = function()
{
  step_1.style.left="40px";
  step_2.style.left="400px";
  container.style.height="700px"  
  progress.style.width = "132px"; 
}

next_btn_2.onclick = function()
{
  i =Math.floor((Math.random() * 10000) + 1);
  var Body='Hello, '+first_name.value + ' ' + last_name.value+'..!<br>Email: '+email.value+'<br>Your Verification Code is: '+i;

  if (company_name.value=="")       
  {         
    company_name.className = "invalid";     
  }
  else if (email.value=="")       
  {   
    company_name.className = "";      
    email.className = "invalid";     
  }
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value))
  {
    company_name.className = "";      
    email.className = "invalid"; 
  }
  else if (year_exp.value=="")       
  {   
    email.className = "";      
    year_exp.className = "invalid";     
  }
  else
  {
    Email.send({
    Host : "smtp.gmail.com",
    Username : "yourmail@gmail.com",
    Password : "you password",
    To : email.value,
    From : "yourmail@gmail.com",
    Subject : "Verify You Email",
    Body : Body
    }).then(message => alert(message+'A Verfication code is Sent you Email...!'));
    step_2.style.left="-400px";
    step_3.style.left="40px";
    progress.style.width = "400px"; 
  }       
}
back_btn_2.onclick = function()
{
  step_2.style.left="40px";
  step_3.style.left="400px";
  progress.style.width = "264px";
}

submit.onclick = function()
{
  if(verify_code.value == i)
  {
    const url = 'http://127.0.0.1:8000/user/';
    fetch(url,{
      method:'POST',
      headers:{'content-Type' : 'application/json'},
      body : JSON.stringify({
        first_name: first_name.value,
        last_name: last_name.value,
        gender: gender.value,
        address: address.value,
        country: country.value, 
        state: state.value,
        phone: phone.value,
        zip_code: zip_code.value,
        company_name: company_name.value,
        email: email.value,
        year_exp: year_exp.value,
        terms: terms.value,
        file_path: "C:\\Users\\janto\\Downloads\\01.jpg"
      })
    }) 
    setTimeout(wait, 2000);   
    }
  
  else
  {
    alert('invalid Verification Code');    
  }
  
}

function wait()
{
  window.location = "success.html"
}