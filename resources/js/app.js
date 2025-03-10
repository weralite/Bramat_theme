// Navigation toggle
function toggleMobileMenu() {
    let main_navigation = document.querySelector('#mobile-menu');
    document.querySelector('#mobile-menu-toggle').addEventListener('click', function (e) {
        e.preventDefault();
        main_navigation.classList.toggle('mobile-menu-open');
    });
};

document.addEventListener('DOMContentLoaded', function() {
    // Select all menu items with submenus
    const submenuItems = document.querySelectorAll('#mobile-menu .menu-item-has-children');

    submenuItems.forEach(item => {
        const submenu = item.querySelector('ul'); // Locate the submenu <ul>
        if (submenu) {
            // Create a new <nav> element and wrap the submenu <ul> inside it
            const navWrapper = document.createElement('nav');
            navWrapper.classList.add('mobile-wrapper', 'grid-rows-transition');
            item.insertBefore(navWrapper, submenu);
            navWrapper.appendChild(submenu);
        }
    });
});


// Navigation toggle
function toggleMobileSubMenu() {
    const mobileMenu = document.getElementById('menu-mobile-menu');
    if (mobileMenu) {
      const menuItemsWithChildren = mobileMenu.querySelectorAll(':scope > li.menu-item-has-children');
      
      menuItemsWithChildren.forEach((menuItem) => {
        const link = menuItem.querySelector('a');
  
        const indicator = document.createElement('span');
        indicator.innerHTML = `
          <svg height="20" viewBox="0 0 15 8" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="m7.5 5.6 5.8-5.4c.4-.4 1-.3 1.4.1s.3 1-.1 1.4l-6.5 6c-.4.4-1 .4-1.4 0l-6.5-6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0z" fill="#ffffff"></path>
          </svg>
        `;
        indicator.classList.add('menu-indicator');
        link.appendChild(indicator);

        link.addEventListener('click', function (e) {
          e.preventDefault();
          const submenu = menuItem.querySelector('nav.mobile-wrapper');
          if (submenu) {
            submenu.classList.toggle('mobile-submenu-open');
            indicator.classList.toggle('rotate');
          }
        });
      });
    }
  }

// Hamburger animation toggle
function toggleHamburgerMenuIcon() {
    let toggleMenu = document.querySelector('#toggleMenu');
    toggleMenu.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMenu.classList.toggle('hamburger-toggle');
    });
};


// Add span to secondary menu items for animation
function appendSpanToSecondaryMenuItems() {
    const secondaryMenu = document.getElementById('menu-secondary-menu');

    if (secondaryMenu) {
        const menuItems = secondaryMenu.querySelectorAll(':scope > li');
        menuItems.forEach((menuItem) => {
            const newSpan = document.createElement('span');
            newSpan.textContent = '';
            newSpan.className = 'absolute left-0 top-0 min-w-13 max-w-13 h-0 transition-all duration-200 bg-gray-300 z-5 group-hover:h-full';
            menuItem.appendChild(newSpan);
        });
    } else {
        console.error('Element with ID "menu-secondary-menu" not found.');
    }
}


// Function to display none if submenu is clicked
function hideMenuOnClick() {
    const primaryMenu = document.getElementById('menu-primary-menu');
    const menuItemsWithSubMenus = primaryMenu.querySelectorAll('li:has(.sub-menu)');

    menuItemsWithSubMenus.forEach((menuItem) => {
        menuItem.addEventListener('click', function () {
            const subMenu = menuItem.querySelector('.sub-menu');

            if (subMenu) {
                subMenu.style.display = 'none';
                setTimeout(() => {
                    subMenu.style.display = '';
                }, 50);
            }
        });
    });
}


// // AJAX navigation
function ajaxNavigation() {
    const links = document.querySelectorAll('.ajax-link');

    const currentSlug = window.location.pathname;
    toggleBodyClass(currentSlug);

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let slug = this.getAttribute('data-slug');

            if (slug === '#') {
                return;
            }

            if (!slug || slug === '/') {
                slug = '/';
            }

            toggleBodyClass(slug);
            // Perform AJAX request withfetch
            fetch(my_ajax_object.ajax_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'load_page',
                    page_slug: slug
                })
            })
                .then(response => response.text())
                .then(data => {
                    const contentContainer = document.getElementById('content-container');
                    if (contentContainer) {
                        const newUrl = slug === '/' ? '/' : `/${slug}`;
                        contentContainer.innerHTML = data; // Load new content
                        history.pushState(null, '', newUrl); // Update URL without reloading
                    } else {
                        console.error('Element with ID "content-container" not found.');
                    }
                })
                .catch(error => {
                    console.error('Failed to load content:', error);
                });
        });
    });
};


// Function to toggle body class for opacity
function toggleBodyClass(slug) {
    if (slug !== '/' && slug !== '#') {
        document.body.classList.add('expanded'); // Add the expanding class
    } else {
        document.body.classList.remove('expanded'); // Remove if on homepage
    }
}



window.addEventListener('DOMContentLoaded', function () {
    toggleMobileMenu();
    toggleMobileSubMenu();
    toggleHamburgerMenuIcon();
    appendSpanToSecondaryMenuItems();
    hideMenuOnClick();
    ajaxNavigation();
    toggleBodyClass();
});