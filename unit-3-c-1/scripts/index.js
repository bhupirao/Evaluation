//store the products array in localstorage as "products"

function Puma(type,desc,price,image){
    this.type=type;
    this.description=desc;
    this.price=price;
    this.image=image;

}
let arr=JSON.parse(localStorage.getItem("products")) || []

function addProducts(e){
e.preventDefault();
let form =document.getElementById("products")

let type=form.type.value;
let desc=form.desc.value;
let price=form.price.value;
let image=form.image.value;

document.getElementById("type").value=null;
document.getElementById("desc").value=null;
document.getElementById("price").value=null;
document.getElementById("image").value=null;

let p =new Puma(type,desc,price,image)
arr.push(p)

localStorage.setItem("products",JSON.stringify(arr))

}