

let url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

async function getData(){
    try{
        let res =await fetch(url)
        let items= await res.json()
        append(items)
        console.log(items)
        
    } catch(err){
        console.log(err)
    }
}
let data=JSON.parse(localStorage.getItem("purchase"))
getData()
function append(vouchers){
    let container=document.getElementById("voucher_list")

    vouchers.forEach(function(el){
        let div= document.createElement("div")

        let img=document.createElement("img")
        img.src=el.image;
        let  name=document.createElement("p")
        name.innerText=el.name;
        let price=document.createElement("p")
        price.innerText=el.price;
        let btn=document.createElement("button")
        btn.innerText="BUY"
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
            buyItem(el)
        })

        div.append(img,name,price,btn)
        container.append(div)
    })
}
function buyItem(el){
    data.push(el)
localStorage.setItem("purchase",JSON.stringify(data))
}