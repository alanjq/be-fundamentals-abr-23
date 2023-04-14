function createNewUser() {
    const name = document.getElementById('textName').value
    const username = document.getElementById('textUsername').value
    const email = document.getElementById('textEmail').value

    apicreateuser(name, username, email)
}

function apicreateuser(name, username, email) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, email })
    };

    fetch('https://jsonplaceholder.typicode.com/users', options)
        .then(response => response.json())
        .then(response => {
            console.log('repsose', response);
            let rowshtml = document.getElementById('table').querySelector('tbody').innerHTML
            rowshtml += createRow(response)
            document.getElementById('table').querySelector('tbody').innerHTML = rowshtml
        })
        .catch(err => console.error(err));
}

// Creamos una fila para agregar a la tabla
function createRow(user) {
    const rowstring = `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        </tr>
    `
    return rowstring;
}