let data=JSON.parse(localStorage.getItem("purchase"))


data.map(function(el){
    let container=document.getElementById("purchased_vouchers")
    let div= document.createElement("div")

    let img=document.createElement("img")
    img.src=el.image;
    let  name=document.createElement("p")
    name.innerText=el.name;
    let price=document.createElement("p")
    price.innerText=el.price;
    div.append(img,name,price,btn)
    container.append(div)
})
