// Add the coffee to local storage with key "coffee"
let data =JSON.parse(localStorage.getItem("coffee"))|| []
const url="https://masai-mock-api.herokuapp.com/coffee/menu"

async function getData(){
    try{
       let res=await fetch(url);
       let users=await res.json();
         append(users.menu.data)
    } catch(err){
        console.log(err)
    }
    
}
getData()

function append(data){
    data.forEach(function(el){
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.image;
        let name=document.createElement("h3")
        name.innerText=el.title;
        let price=document.createElement("p")
        price.innerText=el.price;
        let btn=document.createElement("button")
        btn.innerText="Add to Bucket";
        btn.setAttribute("id","add_to_bucket")
        btn.addEventListener('click',function(){
            addBucket(el)
        })

        div.append(image,name,price,btn)
        document.getElementById("menu").append(div)
    })
  
}
function addBucket(el){
    data.push(el);
    localStorage.setItem("coffee",JSON.stringify(data));
}

const addbutton=document.getElementById("add_to_bucket")
const count =document.getElementById("coffee_count")

for(let i=0; i<addbutton.length;i++){
    addbutton[i].addEventListener('click',function(el){
        addCount(el);
    })
}
function addCount(el){
    let prdCount=localStorage.getItem("counts");
    prdCount=parseInt(prdCount)
    if(prdCount){
        localStorage.setItem("counts",1);
        count.innerText=prdCount+1;

    }
    else{
        localStorage.setItem("counts")
        count.innerText=prdCount=1;
    }
}
function displayCount(){
    let prdCount=localStorage.getItem("counts")
    if(prdCount){
        count.innerText=prdCount;
    }
}
displayCount()