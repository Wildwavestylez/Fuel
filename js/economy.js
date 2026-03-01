let money = 500000;

function addMoney(amount) {
  money += amount;
  renderMoney();
}

function spendMoney(amount) {
  money -= amount;
  renderMoney();
}

function renderMoney() {
  const tabContent = document.getElementById('tab-content');
  const moneyDiv = document.createElement('div');
  moneyDiv.textContent = `Pokladna: ${money.toLocaleString()} Kč`;
  tabContent.appendChild(moneyDiv);
}