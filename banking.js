// Create the functions first!

function getInputValue(inputId) {
  let inputField = document.getElementById(inputId);
  let inputAmountText = inputField.value;
  let amountValue = parseFloat(inputAmountText);
  inputField.value = "";

  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  // debugger;
  let totalElement = document.getElementById(totalFieldId);
  let totalText = totalElement.innerText;
  let totalNumber = parseFloat(totalText);
  totalElement.innerText = totalNumber + amount;
}
function getCurrentBalance() {
  let balanceTotal = document.getElementById("balance-total");
  let balanceTotalText = balanceTotal.innerText;
  let balanceTotalNumber = parseFloat(balanceTotalText);
  return balanceTotalNumber;
}
function updateBalance(amount, isAdd) {
  let balanceTotal = document.getElementById("balance-total");
  let balanceTotalNumber = getCurrentBalance();
  if (isAdd == true) {
    balanceTotal.innerText = amount + balanceTotalNumber;
  } else {
    balanceTotal.innerText = balanceTotalNumber - amount;
  }
}

// Handle Deposit now :)

document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    let depositAmountNumber = getInputValue("deposit-input");
    // Update the balance
    if (depositAmountNumber >= 0) {
      updateTotalField("deposit-total", depositAmountNumber);
      updateBalance(depositAmountNumber, true);
    }
    if (depositAmountNumber < 0) {
      alert("You cannot put negative numbers");
    }
  });

// Handle withdraw now :)

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    let withdrawAmountNumber = getInputValue("withdraw-input");
    let currentBalance = getCurrentBalance();
    // Update the balance
    if (withdrawAmountNumber >= 0 && withdrawAmountNumber < currentBalance) {
      updateTotalField("withdraw-total", withdrawAmountNumber);
      updateBalance(withdrawAmountNumber, false);
    }
    if (withdrawAmountNumber > currentBalance) {
      alert("You cannot withdraw more than your balance");
    }
    if (withdrawAmountNumber < 0) {
      alert("You cannot put negative numbers");
    }
  });
