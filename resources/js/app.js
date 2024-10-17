// Navigation toggle
window.addEventListener('load', function () {
    let main_navigation = document.querySelector('#primary-menu');
    document.querySelector('#primary-menu-toggle').addEventListener('click', function (e) {
        console.log(main_navigation);
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
        const menuItems = secondaryMenu.querySelectorAll(':scope > li');

        // Iterate over each li element
        menuItems.forEach((menuItem) => {
            // Create a new span element
            const newSpan = document.createElement('span');

            // Optionally, you can add some content or attributes to the span
            newSpan.textContent = '';
            newSpan.className = 'absolute left-0 top-0 w-full h-0 transition-all duration-200 bg-gray-300 z-5 group-hover:h-full'; // Add a class if needed

            // Append the span to the li element
            menuItem.appendChild(newSpan);
        });
    } else {
        console.error('Element with ID "menu-secondary-menu" not found.');
    }
}

window.addEventListener('load', appendSpanToSecondaryMenuItems);

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.ajax-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default behavior

            const slug = this.getAttribute('data-slug'); // Get the slug

            if (slug === '#') {
                return;
            }

            // Perform AJAX request with fetch
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
                        const newUrl = `/${slug}`;
                        console.log('New URL:', newUrl); // Log new URL
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
});




