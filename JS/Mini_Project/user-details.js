const params = new URLSearchParams(location.search).get('user');

let user = {};
if (params) user = JSON.parse(params);
console.log(user);
let usersList = document.getElementsByClassName('users')[0];
let userDiv = document.createElement('div');

// let id = document.createElement('id')
// let name = document.createElement('div');
// let username = document.createElement('div');
// let email = document.createElement('div');
// let phone = document.createElement('div');
// let website = document.createElement('div');
// let address = document.createElement('div');
const recursiveFunc = (obj) => {
    for (const item in obj) {
        if (typeof obj[item] === "object") {
            return recursiveFunc(obj[item])
        }

        let div = document.createElement('div')
        div.innerHTML = `<b>'${item}':</b> ${obj[item]}`;
        usersList.appendChild(div);
    }
}

recursiveFunc(user);

let postsBtn = document.createElement('button');


// name.innerHTML = `<b>name:</b> ${user.name}`;
// username.innerHTML = `<b>username:</b> ${user.username}`;
// email.innerHTML = `<b>email:</b> ${user.email}`;
// id.innerHTML = `<b>id:</b> ${user.id}`;
// phone.innerHTML = `<b>phone:</b> ${user.phone}`;
// website.innerHTML = `<b>website:</b> ${user.website}`;


// userDiv.appendChild(id);
// userDiv.appendChild(name);
// userDiv.appendChild(username);
// userDiv.appendChild(email);
// userDiv.appendChild(phone);
// userDiv.appendChild(website);
// userDiv.appendChild(address);


postsBtn.innerText = 'post of current user';


userDiv.appendChild(postsBtn);
// usersList.appendChild(div);
postsBtn.onclick = () => location.href = `post-details.html?userId=${user.id.toString()}`;


// address:
//     city: "Gwenborough"
//     geo: {lat: "-37.3159", lng: "81.1496"}
//     street: "Kulas Light"
//     suite: "Apt. 556"
//     zipcode: "92998-3874"
//
// company:
//     bs: "harness real-time e-markets"
//     catchPhrase: "Multi-layered client-server neural-net"
//     name: "Romaguera-Crona"
//
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"