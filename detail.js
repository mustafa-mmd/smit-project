
 function submitForm() {
  var Name = document.getElementById("Name").value;
  var rollno = document.getElementById("rollno").value;
  var batch = document.getElementById("batch").value;
  var section = document.getElementById("section").value;

   var userInfo = { 
 NAME: Name,
 ROLLNO: rollno,
 BATCH: batch,
 SECTION: section
 };

  console.log(userInfo); // Optional: Display user information in the console

  //For this example, I'll just show an alert with the user info.
  alert("User Information:\n\nNAME: " + Name + "\n:ROLLNO:" + rollno + "\nBATCH:"+ batch + "\nSECTION: " + section);
}