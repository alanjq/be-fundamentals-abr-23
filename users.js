const userEndpoint = 'https://jsonplaceholder.typicode.com/users'

    fetch(userEndpoint)
    .then((response) => response.json())
    .then((json) => {
        console.log('resultado', json);
        let rowshtml = ""
        json.map((fila) => {
            rowshtml += createRow(fila)
        })
        document.getElementById('table').querySelector('tbody').innerHTML = rowshtml
    })
    .catch((errmsg) => {
        console.error('Falló la API user', errmsg);
    })
    
// Creamos una fila para agregar a la tabla
function createRow(user) {
    const rowstring = `
        <tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.company.name}</td>
        </tr>
    `
    return rowstring;
}