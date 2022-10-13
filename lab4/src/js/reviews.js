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

let response = fetch('https://dummyjson.com/posts?skip=22&limit=8').then(res => res.json()).then(json => parse(json.posts))
console.log(response);
async function parse(data) {
    for(let element = 0; element < data.length; element++){
        let title = await data[element].title
        let body = await data[element].body
        console.log(body)
        let imgScr = `./img/rec${element}.jpg`
        let alt = `volunteer${element}`
        await addViewer(title, body, imgScr, alt)
    };
}




