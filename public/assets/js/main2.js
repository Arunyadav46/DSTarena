// Dashboard

 
function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('toggled');
}



const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
sidebar.classList.toggle('close')
toggleButton.classList.toggle('rotate')

closeAllSubMenus()
}

function toggleSubMenu(button) {

if (!button.nextElementSibling.classList.contains('show')) {
closeAllSubMenus()
}

button.nextElementSibling.classList.toggle('show')
button.classList.toggle('rotate')

if (sidebar.classList.contains('close')) {
sidebar.classList.toggle('close')
toggleButton.classList.toggle('rotate')
}
}

function closeAllSubMenus() {
Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
ul.classList.remove('show')
ul.previousElementSibling.classList.remove('rotate')
})
}

// Function to toggle the sidebar visibility
function toggleSidebar() {
var sidebar = document.getElementById('sidebar');

// Check current visibility state
if (sidebar.style.visibility === 'visible') {
// If sidebar is visible, hide it
sidebar.style.visibility = 'hidden';
sidebar.style.width = '0'; // Collapse the sidebar
sidebar.style.height = '0'; // Collapse the sidebar
} else {
// If sidebar is hidden, show it
sidebar.style.visibility = 'visible';
sidebar.style.width = '500px'; // Adjust to your desired width
sidebar.style.height = '60%'; // Adjust to your desired height
sidebar.style.fontSize = '19px'; // Adjust to your desired height
}
}


// Filtering Logic
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
      button.addEventListener("click", function () {
          filterButtons.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");
          const category = this.getAttribute("data-category");

          projectCards.forEach(card => {
              if (category === "all" || card.getAttribute("data-category") === category) {
                  card.style.display = "block";
              } else {
                  card.style.display = "none";
              }
          });
      });
  });
});

