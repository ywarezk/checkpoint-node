

fetch('/api/task/')
    .then((response) => {
        return response.json();
    })
    .then((todoArray) => {
        const ul = document.getElementById('container');
        for (let todo of todoArray) {
            const li = document.createElement('li');
            li.textContent = todo.title;
            ul.appendChild(li);
        }
    })