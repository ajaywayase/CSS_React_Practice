const table = document.getElementById("table");
const new_age = document.getElementById('new-age');
const new_name =  document.getElementById("new-name");
const search_data = document.getElementById("search-data");

let asc = false;
let desc = false;
let filteredData = []

const data = [{
    'name' : "aaa",
    'age' : 23
},
{
    'name' : "bbb",
    'age' : 27
},
{
    'name' : "ccc",
    'age' : 2
},
{
    'name' : "ddd",
    'age' : 56
},
];

document.addEventListener("DOMContentLoaded", loadData);

function addData(d){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');

    td1.textContent = d.name;
    td2.textContent = d.age;

    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
}

function searchData(){
    console.log("search")
    while (table.childNodes.length > 1) {
        table.removeChild(table.lastChild);
    }

    filteredData = data.filter(person => person.name.toLowerCase().includes(search_data.value.toLowerCase()));

    if (asc){
        filteredData.sort((a, b) => a.age - b.age);
    }
    if (desc){
        filteredData.sort((a,b) => b.age - a.age);
    }
    filteredData.forEach((d) => {
        addData(d);
    });
}

function loadData(){

    data.forEach((d) => {
        addData(d);
    });
}

function sortAsc(){
    asc = true;
    desc = false;
    while (table.childNodes.length > 1) {
        table.removeChild(table.lastChild);
    }

    if (search_data.value){
        searchData();
    }
    else{
        data.sort((a, b) => a.age - b.age);
        loadData();
    }

    
}

function sortDesc(){
    desc = true;
    asc = false;

    

    while (table.childNodes.length > 1) {
        table.removeChild(table.lastChild);
    }

    if (search_data.value){
        searchData();
    }
    else{
        data.sort((a, b) => b.age - a.age);
        loadData();
    }
    
}

function addNewData(){
    let name = new_name.value.trim();
    let age = new_age.value.trim();
    console.log(new_name, new_age, name);
    let obj = {};
    if (name && age){
        obj = {
            'name' : name,
            'age' : age
        }
    }
    else{
        alert("eneter name and age")
    }

    

    data.push(obj);
    addData(obj);
    new_name.value = "";
    new_age.value = "";
}