//UC8
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});
//UC9
function save(){
    var name= document.getElementById("name").value;
    var picture = document.querySelector('input[name = profile]:checked').value;
    var gender = document.querySelector('input[name = gender]:checked').value;
    var department =document.querySelector('input[name = department]:checked').value;
    var salary = document.getElementById("salary").value;
   var day = document.getElementById("day").value;
   var month = document.getElementById("month").value;
   var year = document.getElementById("year").value;
    var note = document.getElementById("notes").value;
    var startDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    
  
   const employee = new EmployeePayrollData(name, picture, gender, department, salary, startDate, note);
  
   alert("Thank you. your data is saved" + employee.toString());
  }
  //UC10
  const text = document.querySelector("#name");
const textError = document.querySelector(".text-error");
const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
text.addEventListener("input", function () {
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Name is Incorrect";
});