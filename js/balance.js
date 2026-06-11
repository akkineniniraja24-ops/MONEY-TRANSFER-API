const accounts = [

{
balance:"₹25,000",
accNo:"XXXX1234",
bank:"Silver Bank",
type:"Savings"
},

{
balance:"₹78,500",
accNo:"XXXX5678",
bank:"Silver Bank",
type:"Salary"
},

{
balance:"₹1,45,000",
accNo:"XXXX9876",
bank:"Silver Bank",
type:"Business"
}

];

function switchAccount(index){

document.getElementById("balance").innerHTML =
accounts[index].balance;

document.getElementById("accNo").innerHTML =
accounts[index].accNo;

document.getElementById("bank").innerHTML =
accounts[index].bank;

document.getElementById("type").innerHTML =
accounts[index].type;
}