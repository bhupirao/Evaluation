let arr=JSON.parse(localStorage.getItem("products")) || []
 

let container =document.getElementById("all_products");

arr.map(function (el,index){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let type=document.createElement("h4");
    type.innerText=el.type;
    let desc=document.createElement("h4");
    desc.innerText=el.desc;
    let price=document.createElement("h4");
    price.innerText=el.price;

    let btn=document.createElement("button");
    btn.innerText="Remove";
    btn.addEventListener('click',function(){
        removeProduct(el,index);
    })
    btn.setAttribute("id","remove_product")

    div.append(image,type,desc,price,btn);
    document.getElementById("all_products").append(div)
})

function removeProduct(el,index){
    arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arr));
    window.location.reload();

}