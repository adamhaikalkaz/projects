function bigImg(x) {
   x.style.height = "300px";
   x.style.width = "300px";
}

function normalImg(x) {
   x.style.height = "200px";
   x.style.width = "200px";
}
function validateForm(){
   if( document.myForm.fullname.value == "" ) {
      alert( "Please provide your full name!" );
      document.myForm.Name.focus() ;
      return false;
   }

   if( document.myForm.username.value == "" ) {
      alert( "Please provide your username!" );
      document.myForm.username.focus() ;
      return false;
   }

   if( document.myForm.password.value == "" ) {
      alert( "Please provide your password!" );
      document.myForm.password.focus() ;
      return false;
   }

   if( document.myForm.phonenumber.value == "" ) {
      alert( "Please provide your phone number!" );
      document.myForm.phonenumber.focus() ;
      return false;
   }

   if( document.myForm.confirmpassword.value == "" ) {
      alert( "Please confirm your password!" );
      document.myForm.confirmpassword.focus() ;
      return false;
   }
}

function matchPassword() {
   var password = document.getElementById("password").value;
   var confirmPassword = document.getElementById("confirmpassword").value;
   if (password != confirmPassword) {
       alert("Passwords do not match.");
       return false;
   }
   return true;
}

function validateForm2(){

   if( document.contactus.fullname2.value == "" ) {
      alert( "Please provide your full name!" );
      document.contactus.fullname2.focus() ;
      return false;
   }

   if( document.contactus.email2.value == "" ) {
      alert( "Please provide your email!" );
      document.contactus.email2.focus() ;
      return false;
   }

   if( document.contactus.phonenumber2.value == "" ) {
      alert( "Please provide your phone number!" );
      document.contactus.phonenumber2.focus() ;
      return false;
   }
}
