async function addCoffee(id, name, int, img) {
    let coffee = document.createElement('div')
    let coffeeContainer = document.querySelector('.Cont')

    let ViewerContent = `
    <div class="Cont__container">
        <h2>${id}</h2>
        <img src="${img}">
        <h3> ${name} </h3>
        <p>
            ${int}
        </p>
    </div>`
    coffee.innerHTML = ViewerContent;
    coffeeContainer.append(coffee);
}

async function Get_Coffee() 
{
    fetch("http://localhost:3000/about").then(
        (response)=>{
            return response.text()
        }
    ).then((text)=>{
        let aboutArray = JSON.parse(text)
        aboutArray.forEach(element => {

            id = `${element.id}`
            nam =`${element.name}`
            int = `${element.intensity}`
            img = `${element.img}`

            addCoffee(id, nam, int, img)
        })
    })
}
Get_Coffee();