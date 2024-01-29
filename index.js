let dog = document.querySelector('.dogu');
let fox = document.querySelector(".foxu");
let btn = document.querySelectorAll("button");

btn.forEach((button)=>
{
    button.addEventListener("click",(e)=>
    {
        if(e.target.innerText === "Get Fox")
        {
             RandomFox();
        }
        else if(e.target.innerText === "Get Dog")
        {
             RandomDog();
        }
    })
})

const RandomFox = async()=>
{
    let response = await fetch("https://randomfox.ca/floof/");
    let data = await response.json();
    console.log(data.image);
    fox.innerHTML = `<img src="${data.image}" alt="" />`
}

const RandomDog = async()=>
{
  
    let response = await fetch("https://random.dog/woof.json");
    let data = await response.json();
    console.log(data.url);
    dog.innerHTML = `<img src="${data.url}" alt="" />`
}