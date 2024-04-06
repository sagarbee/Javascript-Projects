let employeeName = document.getElementById('empname')
let employeeId = document.getElementById('empid')
let employeeAddress = document.getElementById('address')
let employeeDesignation  = document.getElementById('designation')
let employeeDepartment = document.getElementById('departrment')
let employeeSalary = document.getElementById('salary')

let selectedRow = null;

function employeeDataMangement() {
	let employeeData = fetchEmployeeData();
	if(selectedRow==null)
	{
		newDataInserted(employeeData);
	}
	else
	{
		updateRow(employeeData);
	}
     
     clearFields();
}

function fetchEmloyeeData()
{
	let employeeData={};
	employeeData.employeeName=employeeName.value;
	employeeData.employeeId=employeeId.value;
	employeeData.employeeAddress=employeeAddress.value;
	employeeData.employeeDesignation=employeeDesignation.value;
	employeeData.employeeDepartment=employeeDepartment.value;
	employeeData.employeeSalary=employeeSalary.value;

	return employeeData;
}

function newDataInserted(emloyeeData)
{
	let tbody = document.getElementById("table-body");
	let newRow= tbody.insertRow(0);

	let cell0 = newRow.insertCell(0);
    cell0.innerHTML=employeeData.employeeName;
    let cell1 = newRow.insertCell(1);
    cell0.innerHTML=employeeData.employeeId;
    let cell2 = newRow.insertCell(2);
    cell2.innerHTML=employeeData.employeeDesignation;
    let cell3 = newRow.insertCell(3);
    cell3.innerHTML=employeeData.employeeDepartment;
    let cell4 = newRow.insertCell(4);
    cell4.innerHTML=employeeData.employeeSalary;
    let cell5 = newRow.insertCell(5);
    cell5.innerHTML=employeeData.employeeAddress;
    let cell6 = newRow.insertCell(6);
    cell6.innerHTML=`<button onclick ="editEmployeeData(this)">EDIT</button>
                    <button onclick ="deleteEmployeeData(this)">DELETE</button>`;

}
function clearFields(){
	employeeName.value="";
	employeeId.value="";
	employeeAddress.value="";
	employeeDesignation.value="";
	employeeDepartment.value="";
	employeeSalary.value="";
	selectedRow=null;


}
function editEmployeeData(obj){
	selectedRow=obj.parentElement.parentElement;
	employeeName.value=selectedRow.cell[0].innerHTML;
	employeeId.value=selectedRow.cell[1].innerHTML;
	employeeDesignation.value=selectedRow.cell[2].innerHTML;
	employeeDepartment.value=selectedRow.cell[3].innerHTML;
	employeeSalary.value=selectedRow.cell[4].innerHTML;
	employeeAddress.value=selectedRow.cell[5].innerHTML;
}

function updateRow(emloyeeData)
{
	selectedRow.cells[0].innerHTML=employeeName.value;
	selectedRow.cells[1].innerHTML=employeeId.value;
	selectedRow.cells[2].innerHTML=employeeDesignation.value;
	selectedRow.cells[3].innerHTML=employeeDepartment.value;
	selectedRow.cells[4].innerHTML=employeeSalary.value;
	selectedRow.cells[5].innerHTML=employeeAddress.value;

}