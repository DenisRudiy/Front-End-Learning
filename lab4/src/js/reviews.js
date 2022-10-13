async function addViewer(title, body, imgScr, alt) {
    let viewer = document.createElement('div')
    let ViewerContainer = document.querySelector('.Res_content')

    let ViewerContent = `
    <div class="Res_box">
        <img src="${imgScr}" alt="${alt}">
        <p>
            ${body}
        </p>
        <h3> ${title} </h3>
        
    </div>`
    viewer.innerHTML = ViewerContent;
    ViewerContainer.append(viewer);
}

async function Get_Posts_Users() {
    let response_posts = await fetch(`https://dummyjson.com/posts?skip=22&limit=8`).then(resp => resp.json()).then(jsonp => jsonp.posts);
    let response_users = await fetch(`https://dummyjson.com/users?skip=22&limit=8`).then(resu => resu.json()).then(jsonu => jsonu.users);

    for (let i = 0; i < response_posts.length; i++) {
        let title = await response_posts[i].title;
        let body = await response_posts[i].body;
        let imgScr = `${response_users[i].image}`
        let alt = `viewer${i}`;
        await addViewer(title, body, imgScr, alt)
    };
}
Get_Posts_Users();