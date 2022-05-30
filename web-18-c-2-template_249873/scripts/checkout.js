

function data(e){
    e.preventDefault();

    let form=document.getElementById("form")
    let name=form.name.value;
    let number=form.number.value;
    let address=form.address.value;

    let s=new Data(name,number,address)
    console.log(s)
    document.getElementById("name").value=null;
document.getElementById("number").value=null;
document.getElementById("address").value=null;

}
function Data(n,no,a){
    this.name=n;
    this.number=no;
    this.address=a;
}
document.getElementById("confirm").addEventListener('click',order)
function order(){
    arr=Array();
    arr[0]="Your order is accepted"
    arr[1]="Your order is being Prepared"
    arr[2]="Your order is being packed"
    arr[3]="Your order is out for delivery"
    arr[4]="Order delivered"
   setTimer0=setInterval(function(id){
       arr[id]=alert("Your order is accepted")
       
     
   },0,(0));
   setTimer1=setInterval(function(id){
    arr[id]=alert("Your order is being Prepared")
   },3000,(1))
   setTimer2=setInterval(function(id){
arr[id]=alert("Your order is being packed")
},8000,(2))
setTimer3=setInterval(function(id){
    arr[id]=alert("Your order is out for delivery")
},10000,(3))
setTimer4=setInterval(function(id){
    arr[id]=alert("Order delivered")
},12000,(4))

}





