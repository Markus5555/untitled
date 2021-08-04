const params = new URLSearchParams(location.search).get('userId');
const id = JSON.parse(params);


//let post = {};

// let postList = document.getElementsByClassName('posts')[0];
// let postDiv = document.createElement('div');
//
// let post = document.createElement('post');
// post.innerHTML = `${post.id}`
// postDiv.appendChild(post)
// postList.appendChild(postDiv)

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())
    .then(posts => {
        let postsWrap = document.getElementsByClassName('posts-wrap')[0];
        for (const post of posts) {
            let div = document.createElement('div');
            let title = document.createElement('h2');
            let body = document.createElement('p');
            let btn = document.createElement('button');
            // let post = document.createElement('div')
            // post.innerHTML = `${posts.id}`

            title.innerText = post.title;
            body.innerText = post.body;
            btn.innerText = 'comments';

            div.appendChild(title);
            div.appendChild(body);
            div.appendChild(btn);
            btn.onclick = () => {
                btn.style = 'display: none'

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(comments => {
                        let ulList = document.getElementsByTagName('ul');
                        for (const u of ulList) {
                            u.innerText = '';
                        }
                        let ul = document.createElement('ul');

                        for (const comment of comments) {
                            let li = document.createElement('li');
                            li.innerText = comment.name;
                            ul.appendChild(li);
                        }
                        div.appendChild(ul);

                    })
            };

            postsWrap.appendChild(div);
        }

    })
