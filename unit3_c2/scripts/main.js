
function  User(name,email,address,amount){
    this.name=name;
    this.email=email;
    this.address=address;
    this.amount=amount;

}
let user=JSON.parse(localStorage.getItem("user")) || []
function storeData(event){
    event.preventDefault()
   
    let form=document.getElementById("form")
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    let u=new User(name,email,address,amount)
    let data=JSON.parse(localStorage.getItem("user")) || []
    data.push(u)
    localStorage.setItem("user",JSON.stringify(data))
    document.getElementById("name").value=null;
    document.getElementById("email").value=null;
    document.getElementById("address").value=null;
    document.getElementById("amount").value=null;
}