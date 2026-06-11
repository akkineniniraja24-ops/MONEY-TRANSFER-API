const contacts = [
    {name:"Nanna", number:"9876543210"},
    {name:"Thammudu", number:"9123456780"},
    {name:"Niraja", number:"9000011111"},
    {name:"Kaigala Siva", number:"9555512345"},
    {name:"Friend", number:"9888877777"}
];

let output = "";

contacts.forEach(contact => {
    output += `
    <div class="contact">
        <div class="avatar">${contact.name.charAt(0)}</div>

        <div class="info">
            <div class="name">${contact.name}</div>
            <div class="number">${contact.number}</div>
        </div>

        <button class="sendBtn"
        onclick="sendMoney('${contact.name}','${contact.number}')">
        Send
        </button>
    </div>`;
});

document.getElementById("contacts").innerHTML = output;

function sendMoney(name, number){
    let amount = prompt("Enter amount to send to " + name);

    if(amount){
        alert("₹" + amount + " sent to " + name + " (" + number + ")");
    }
}