async function addCustomer(title, body, imgScr, alt) {
    let customer = document.createElement('div')
    let CustomersContainer = document.querySelector('.Res_content')

    let CustomersContent = `
    <div class="Res_box">
        <img src="${imgScr}" alt="${alt}">
        <p>
            ${body}
        </p>
        <h3> ${title} </h3>
        
    </div>`
    customer.innerHTML = CustomersContent;
    CustomersContainer.append(customer);
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
        await addCustomer(title, body, imgScr, alt)
    };
}