const params = new URLSearchParams(location.search).get('post');
const postObj = JSON.parse(params);


//let post = {};

let wrap = document.getElementsByClassName('wrap')[0];
let postDiv = document.createElement('div');

let id = document.createElement('div');
let userId = document.createElement('div');
let title = document.createElement('div');
let body = document.createElement('div');
let btn = document.createElement('button');


id.innerHTML = `id: ${postObj.id}`
userId.innerHTML = `userId: ${postObj.userId}`
title.innerHTML = `title: ${postObj.title}`
body.innerHTML = `body: ${postObj.body}`
btn.innerText = 'show comments';

postDiv.append(id, userId, title, body, btn)
wrap.appendChild(postDiv)


btn.onclick = () => {
    btn.style = 'display: none'

    fetch(`https://jsonplaceholder.typicode.com/posts/${postObj.id}/comments`)
        .then(value => value.json())
        .then(comments => {
            let ulList = document.getElementsByTagName('ul');
            for (const u of ulList) {
                u.innerText = '';
            }
            let ul = document.createElement('ul');
            ul.classList.add('uls')
            for (const comment of comments) {
                let li = document.createElement('li');
                li.classList.add('lis')
                li.innerText = comment.name;
                ul.appendChild(li);
            }
            wrap.appendChild(ul);

        })
};



