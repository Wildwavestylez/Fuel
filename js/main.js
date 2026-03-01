// Inicializace mapy a tabů
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initGame();
});

function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.dataset.tab;
      renderTab(tabName);
    });
  });
}

function renderTab(tabName) {
  const tabContent = document.getElementById('tab-content');
  if(tabName === 'dispatch') {
    tabContent.innerHTML = "<h3>Dispečink</h3><p>Zde budou objednávky.</p>";
  } else if(tabName === 'vehicles') {
    tabContent.innerHTML = "<h3>Vozidla</h3><div id='vehicle-list'></div>";
  } else if(tabName === 'economy') {
    tabContent.innerHTML = "<h3>Ekonomika</h3>";
  } else if(tabName === 'progress') {
    tabContent.innerHTML = "<h3>Vývoj</h3>";
  }
}

function initGame() {
  console.log("Fuel Tycoon V2 initialized");
}