let table = document.getElementById('products-table')
let data = JSON.parse(localStorage.getItem("data"))

function CreateTD(value) {
    let td = document.createElement("td")
    td.innerHTML = value
    return td
}


function Button(index, text) {
    let button = document.createElement("button")
    button.classList.add("row-button");
    button.innerHTML = text
    button.setAttribute("id", "row-number-".concat(index) + text);

    let td = document.createElement("td")
    td.appendChild(button)
    return td
}

function TableRow(index, packet) {
    let row = document.createElement("tr")
    row.setAttribute("id", "row-number-".concat(index));
    row.appendChild(CreateTD(index))
    row.appendChild(CreateTD(packet["productname"]))
    row.appendChild(CreateTD(packet["description"]))
    row.appendChild(CreateTD(packet["price"]))
    row.appendChild(CreateTD(packet["measurement"]))


    row.appendChild(Button(index, "Edit"))
    row.appendChild(Button(index, "Delete"))
    // console.log(row)
    table.appendChild(row)
}


function EditRow(index) {
    let row = document.getElementById("row-number-".concat(index))
    let tds = row.getElementsByTagName("td")
    row.contentEditable = "true"
}

for (let i = 0; i < data.length; i++) {
    TableRow(i, data[i])
    let editbutton = document.getElementById("row-number-".concat(i) + "Edit")
    editbutton.onclick = () => { EditRow(i) }
}


function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
}
