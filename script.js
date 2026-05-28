let balance = 0;

function addExpense(){

  const title = document.getElementById("title").value;
  const amount = document.getElementById("amount").value;

  if(title === "" || amount === ""){
    alert("Please fill all fields");
    return;
  }

  balance -= amount;

  document.getElementById("balance").innerText = "₹" + balance;

  const li = document.createElement("li");

  li.innerHTML = `
    ${title} - ₹${amount}
    <button onclick="deleteExpense(this, ${amount})">X</button>
  `;

  document.getElementById("list").appendChild(li);

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
}

function deleteExpense(button, amount){

  balance += Number(amount);

  document.getElementById("balance").innerText = "₹" + balance;

  button.parentElement.remove();
    }
