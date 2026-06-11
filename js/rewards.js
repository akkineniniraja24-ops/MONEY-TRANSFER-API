function loadRewards(){

const rewards = [

{
brand:"Amazon",
voucher:"₹200 Gift Voucher",
cashback:"5% Cashback"
},

{
brand:"Flipkart",
voucher:"₹500 Discount Voucher",
cashback:"10% Cashback"
},

{
brand:"Myntra",
voucher:"20% OFF Coupon",
cashback:"₹100 Cashback"
}

];

let output="";

rewards.forEach(item=>{
output += `
<div class="reward-card">
<div class="brand">${item.brand}</div>
<div class="offer">🎟 ${item.voucher}</div>
<div class="cashback">💰 ${item.cashback}</div>
</div>
`;
});

document.getElementById("rewards").innerHTML = output;
}