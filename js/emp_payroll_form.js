let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener('DOMContentLoaded', (event) => {

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
  output.textContent = salary.value;
});

const name = document.querySelector("#name");
name.addEventListener('input', function(){
  if(name.value.length == 0){
    setTextValue(".text-error", "");
    return;
  }
  try{
    (new EmployeePayrollData()).name = name.value;
    setTextValue(".text-error", "");
  }catch(e){
    setTextValue(".text-error", e);
  }
});

const startDate = document.querySelector("#startDate");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
startDate.addEventListener("input", function(){
   try{
   new EmployeePayrollData().startDate = new Date( day.value+" "+month.value+" "+year.value);
    setTextValue(".date-error","");
  }catch(e){
    setTextValue(".date-error",e);
  }
});
checkForUpdate();
});

const save = () => {
   try{
     let employee = saveData();
     createAndUpdateStorage(employee);
   }catch(e){
     return;
   }
};

function createAndUpdateStorage(employee){
  let employeeList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  if(employeeList != undefined) employeeList.push(employee);
  else employeeList = [employee];

  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeeList));
  alert(employeeList.toString());
}

const getSelectedValues = (property) => {
  let allItems = document.querySelectorAll(property);
  let setItems = [];
  allItems.forEach(item => {
    if(item.checked) setItems.push(item.value);
  });
  return setItems;
};

function saveData(){
  let employee = new EmployeePayrollData();
  employee.id=createId();
  employee.name= document.getElementById("name").value;
  employee.picture = document.querySelector('input[name = profile]:checked').value;
  employee.gender = document.querySelector('input[name = gender]:checked').value;
  employee.department =getSelectedValues('[name=department]');
  employee.salary = document.getElementById("salary").value;
 var day = document.getElementById("day").value;
 var month = document.getElementById("month").value;
 var year = document.getElementById("year").value;
  employee.note = document.getElementById("notes").value;
  employee.startDate = new Date(day+" "+month+" "+year);
  alert(employee.toString());
 return employee;
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
};

const setSelectedValues = (propertyValue, value) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
       if(Array.isArray(value)){
         if(value.includes(item.value)) item.checked = true;
       }
       else if(item.value == value) item.checked = true;
    });
};

const setSelectedIndex = (id, index) => {
    const element = document.querySelector(id);
    element.selectedIndex = index;
};

const unsetSelectedValues = (propertyValue) =>{
 let allItems = document.querySelectorAll(propertyValue);
 allItems.forEach(item => {
   item.checked = false;
 });
};

const setForm = () => {
    setValue("#name", employeePayrollObj._name);
    setSelectedValues("[name=profile]", employeePayrollObj._picture);
    setSelectedValues("[name=gender]", employeePayrollObj._gender);
    setSelectedValues("[name=department]", employeePayrollObj._department);
    setValue("#salary", employeePayrollObj._salary);
    setTextValue(".salary-output", employeePayrollObj._salary);
    setValue("#notes", employeePayrollObj._note);
    let date = stringifyDate(employeePayrollObj._startDate).split(" ");
    let month = new Date(date).getMonth() + 1;
    setValue("#day", date[0]);
    setValue("#month", month);
    setValue("#year", date[2]);
};

const resetForm = () => {
  setValue("#name", "");
  unsetSelectedValues("[name=profile]");
  unsetSelectedValues("[name=gender]");
  unsetSelectedValues("[name=department]");
  setValue("#salary", "");
  setValue("#notes", "");
  setSelectedIndex("#day", 0);
  setSelectedIndex("#month", 0);
  setSelectedIndex("#year", 0);
};

const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
};

const checkForUpdate = () => {
    const employeePayrollJson = localStorage.getItem("editEmp");
    isUpdate = employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeePayrollObj = JSON.parse(employeePayrollJson);
    setForm();
};

const createId=()=>{
  return (1000+getEmployeeFromStorage().length);
}
const getEmployeeFromStorage = () => {
  return localStorage.getItem("EmployeePayrollList") ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};