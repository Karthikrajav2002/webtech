let form = document.querySelector("form");
console.log(form);

let table = document.querySelector("table");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let eid = document.getElementById("id").value;
    let ename = document.getElementById("ename").value;
    let dept = document.getElementById("dept").value;
    let sal = document.getElementById("sal").value;

    console.log(eid, ename, dept, sal);

    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${ename}</td>
        <td>${eid}</td>
        <td>${dept}</td>
        <td>${sal}</td>
    `;

    table.append(tr);

    console.log("emp is added");

    document.getElementById("id").value = "";
    document.getElementById("ename").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("sal").value = "";
});

