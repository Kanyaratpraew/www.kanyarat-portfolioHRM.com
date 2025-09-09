const form = document.getElementById("employeeForm");
const list = document.getElementById("employeeList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;

    const li = document.createElement("li");
    li.textContent = `${name} - ${position}`;

    list.appendChild(li);

    form.reset(); // เคลียร์ฟอร์ม
});


function filterEmployees() {
    const dept = document.getElementById("department").value;
    const status = document.getElementById("status").value;
    const rows = document.querySelectorAll("#employeeTable tbody tr");

    rows.forEach(row => {
        const rowDept = row.getAttribute("data-department");
        const rowStatus = row.getAttribute("data-status");

        const matchDept = !dept || rowDept === dept;
        const matchStatus = !status || rowStatus === status;

        row.style.display = (matchDept && matchStatus) ? "" : "none";
    });
}