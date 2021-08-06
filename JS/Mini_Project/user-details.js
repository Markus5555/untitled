const params = new URLSearchParams(location.search).get('user');

let user = {};
if (params) user = JSON.parse(params);

let usersList = document.getElementsByClassName('users')[0];
let usersInfo = document.createElement('div');


const recursiveFunc = (obj) => {
    for (const item in obj) {
        if (typeof obj[item] === "object") {
            return recursiveFunc(obj[item])
        }

        let div = document.createElement('div')
        div.innerHTML = `<b>'${item}':</b> ${obj[item]}`;
        usersInfo.appendChild(div);
        div.classList.add('top-block')
    }

    let postsBtn = document.createElement('button');
    postsBtn.innerText = 'post of current user';
    usersList.appendChild(usersInfo);
    usersList.appendChild(postsBtn);
    postsBtn.onclick = () => getPosts(user.id);
    postsBtn.classList.add('posts-btn')
}


const getPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(value => value.json())
        .then(posts => {
            let postsWrap = document.getElementsByClassName('posts-wrap')[0];
            for (const post of posts) {
                let div = document.createElement('div');
                div.classList.add('posts-block')
                let title = document.createElement('h2');
                let btn = document.createElement('button');
                title.innerText = post.title;
                btn.innerText = 'comments';
                btn.classList.add('post-button')
                div.appendChild(title);
                div.appendChild(btn);
                btn.onclick = () => location.href = `post-details.html?post=${JSON.stringify(post)}`;
                postsWrap.appendChild(div);
            }
        })
}


recursiveFunc(user);