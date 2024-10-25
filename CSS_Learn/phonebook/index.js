document.getElementById('phonebook-form').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    if(name && phone){
        addContact(name, phone);
        document.getElementById('phonebook-form').reset();
    }
});

function addContact(name, phone){
    const contactList = document.getElementById('contact-list');
    const row = document.createElement('tr');
    row.innerHTML = `<td>${name}</td><td>${phone}</td><td><button onclick="deleteContact(this)">Delete</button></td>`;
    contactList.appendChild(row);

}

function deleteContact(button){
    const row = button.parentElement.parentElement;
    row.remove();
}