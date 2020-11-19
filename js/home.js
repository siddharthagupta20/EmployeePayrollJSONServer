window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });
 
 const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employee of employeePayrollList){
    innerHtml = `${innerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="${employee._picture}">
    </td>
    <td>${employee._name}</td>
    <td>${employee._gender}</td>
    <td>${getDeptHtml(employee._department)}</td>
    <td>${employee._salary}</td>
    <td>${employee._startDate}</td>
    <img id="${employee._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
    <img id="${employee._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
    </td>
 </tr>
    `;
}
    document.querySelector("#display").innerHTML = innerHtml;
 }; 

 const createEmployeePayrollJSON = () => {
    let employeeListLocal = [
        {
        _name: "Siddhartha",
        _gender: "Male",
        _department: ["finance"],
        _salary: "70000",
        _startDate: "19 Nov 2020",
        _note: "",
        _id: new Date().getTime(),
        _picture: "../assets/profile-images/Ellipse -2.png"
        },
    {
     _name: "Sonia",
     _gender: "Female",
     _department: ["finance","Sales"],
     _salary: "50000",
     _startDate: "19 Nov 2018",
     _note: "",
     _id: new Date().getTime() + 1,
     _picture: "../assets/profile-images/Ellipse -7.png"
    }
    ];
    return employeeListLocal;
 };
 
 const getDeptHtml = (deptList) => {
     let deptHtml = "";
     for(const dept of deptList){
         deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
     }
     return deptHtml;
 };