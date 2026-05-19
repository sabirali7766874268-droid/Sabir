// Switch user chat
const users = document.querySelectorAll(".user");
const chatName = document.getElementById("chatName");
const chatBody = document.getElementById("chatBody");

users.forEach(user => {
    user.addEventListener("click", () => {

        // remove active
        users.forEach(u => u.classList.remove("active"));
        user.classList.add("active");

        // change name
        chatName.innerText = user.dataset.name;

        // clear chat
        chatBody.innerHTML = `
            <div class="msg received">Hello from ${user.dataset.name}</div>
        `;
    });
});

// Send message
function sendMessage(){
    let input = document.getElementById("messageInput");
    let message = input.value;

    if(message.trim() === "") return;

    let div = document.createElement("div");
    div.classList.add("msg","sent");
    div.innerText = message;

    chatBody.appendChild(div);

    input.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;
}

// Search user
document.getElementById("search").addEventListener("keyup", function(){
    let value = this.value.toLowerCase();

    users.forEach(user=>{
        let name = user.dataset.name.toLowerCase();

        user.style.display = name.includes(value) ? "flex" : "none";
    });
});