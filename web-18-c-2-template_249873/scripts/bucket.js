// On clicking remove button the item should be removed from DOM as well as localstorage.
let data =JSON.parse(localStorage.getItem("coffee"))|| []
let total=data.reduce(function(sum,el,index){
    return sum + Number(el.price)
},0)
document.getElementById("total_amount").innerText=`${total}`

data.map(function(el,index){
    let div =document.createElement("div")
    let image=document.createElement("img")
    image.src=el.image;
    let name=document.createElement("h3")
    name.innerText=el.title;
    let price=document.createElement("p")
    price.innerText=el.price;
    let btn=document.createElement("button")
    btn.innerText="Remove";
    btn.setAttribute("id","remove_coffee")
    btn.addEventListener('click',function(){
        remove(el,index)
    })

    div.append(image,name,price,btn)
    document.getElementById("bucket").append(div)
})
function remove(el,index){
    data.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}