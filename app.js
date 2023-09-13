fetch('https://jsonplaceholder.typicode.com/todos/35')
    .then((response) => {
        if (!response.ok) {
            return Promise.reject('No se encontró')
        }
        return response.json()
    })
    .then((json) => {
        console.log('json', json);
        document.getElementById('completed').innerText = json.completed
        document.getElementById('id').innerText = json.id
        document.getElementById('title').innerText = json.title
        document.getElementById('userid').innerText = json.userId
    })
    .catch(() => {
        document.getElementById('completed').innerText = ''
        document.getElementById('id').innerText = ''
        document.getElementById('title').innerText = ''
        document.getElementById('userid').innerText = ''
        console.log('FAlló la petición');
    })

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://jsonplaceholder.typicode.com/posts/1/comments/", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));