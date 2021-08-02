fetch('https://jsonplaceholder.typicode.com/users')
    .then (value => value.json())

    .then (value => {
        let usersWrap = document.getElementsByClassName('users-wrap')[0]
        for (const user of value) {
            let div = document.createElement('div')
            div.innerText = user.id + ' ' + user.name
            let btn = document.createElement('button')
            btn.innerText = 'Details'
            div.append(btn)
            btn.onclick = function (){

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/`)
                    .then (value => value.json())

                    .then (listOfUsers => {
                       let usersList = document.getElementsByClassName('users')[0]
                        for (const usersListElement of listOfUsers) {
                            let userDiv = document.createElement('Div')
                            userDiv.innerText = user.id
                            usersList.appendChild(userDiv)
                        }
                        
                    })
            }
            usersWrap.appendChild(div)
        }
    })