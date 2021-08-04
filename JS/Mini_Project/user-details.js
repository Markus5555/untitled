const params = new URLSearchParams(location.search).get('user');

let user = {};
if (params) user = JSON.parse(params);

let usersList = document.getElementsByClassName('users')[0];


const recursiveFunc = (obj) => {
    for (const item in obj) {
        if (typeof obj[item] === "object") {
            return recursiveFunc(obj[item])
        }

        let div = document.createElement('div')
        div.innerHTML = `<b>'${item}':</b> ${obj[item]}`;
        usersList.appendChild(div);
    }

    let postsBtn = document.createElement('button');
    postsBtn.innerText = 'post of current user';
    usersList.appendChild(postsBtn);
    postsBtn.onclick = () => location.href = `post-details.html?userId=${user.id.toString()}`;
}

recursiveFunc(user);
