// Navigation toggle
window.addEventListener('load', function () {
      let main_navigation = document.querySelector('#primary-menu');
      document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
            e.preventDefault();
            main_navigation.classList.toggle('hidden');
      });
});



function appendSpanToSecondaryMenuItems() {
      // Find the ul element with the ID "menu-secondary-menu"
      const secondaryMenu = document.getElementById('menu-secondary-menu');
  
      // Check if the element exists
      if (secondaryMenu) {
          // Find all li elements within the ul
          const menuItems = secondaryMenu.querySelectorAll('li');
  
          // Iterate over each li element
          menuItems.forEach((menuItem) => {
              // Create a new span element
              const newSpan = document.createElement('span');
  
              // Optionally, you can add some content or attributes to the span
              newSpan.textContent = '';
              newSpan.className = 'absolute left-0 top-0 w-full h-0 transition-all bg-gray-300 z-0 group-hover:h-full'; // Add a class if needed
  
              // Append the span to the li element
              menuItem.appendChild(newSpan);
          });
      } else {
          console.error('Element with ID "menu-secondary-menu" not found.');
      }
  }

  appendSpanToSecondaryMenuItems();