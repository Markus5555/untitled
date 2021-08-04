fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())

    .then(value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0];
        for (const user of value) {
            let div = document.createElement('div');
            div.innerText = user.id + ' ' + user.name;
            let btn = document.createElement('button');
            btn.innerText = 'Details';
            div.append(btn);
            btn.onclick = () => location.href = `user-details.html?user=${JSON.stringify(user)}`;

            usersWrap.appendChild(div);
        }
    })