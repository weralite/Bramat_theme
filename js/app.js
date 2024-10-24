/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

// Navigation toggle
function toggleMobileMenu() {
  var main_navigation = document.querySelector('#mobile-menu');
  document.querySelector('#mobile-menu-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    main_navigation.classList.toggle('mobile-menu-open');
  });
}
;

// Navigation toggle
function toggleMobileSubMenu() {
  var mobileMenu = document.getElementById('menu-mobile-menu');
  if (mobileMenu) {
    var menuItemsWithChildren = mobileMenu.querySelectorAll(':scope > li.menu-item-has-children');
    menuItemsWithChildren.forEach(function (menuItem) {
      var link = menuItem.querySelector('a');
      var indicator = document.createElement('span');
      indicator.innerHTML = "\n          <svg height=\"20\" viewBox=\"0 0 15 8\" width=\"20\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path d=\"m7.5 5.6 5.8-5.4c.4-.4 1-.3 1.4.1s.3 1-.1 1.4l-6.5 6c-.4.4-1 .4-1.4 0l-6.5-6c-.4-.4-.4-1 0-1.4s1-.4 1.4 0z\" fill=\"#ffffff\"></path>\n          </svg>\n        ";
      indicator.classList.add('menu-indicator');
      link.appendChild(indicator);
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var submenu = menuItem.querySelector('ul.mobile-submenu');
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
  var toggleMenu = document.querySelector('#toggleMenu');
  toggleMenu.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu.classList.toggle('hamburger-toggle');
  });
}
;

// Add span to secondary menu items for animation
function appendSpanToSecondaryMenuItems() {
  var secondaryMenu = document.getElementById('menu-secondary-menu');
  if (secondaryMenu) {
    var menuItems = secondaryMenu.querySelectorAll(':scope > li');
    menuItems.forEach(function (menuItem) {
      var newSpan = document.createElement('span');
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
  var primaryMenu = document.getElementById('menu-primary-menu');
  var menuItemsWithSubMenus = primaryMenu.querySelectorAll('li:has(.sub-menu)');
  menuItemsWithSubMenus.forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
      var subMenu = menuItem.querySelector('.sub-menu');
      if (subMenu) {
        subMenu.style.display = 'none';
        setTimeout(function () {
          subMenu.style.display = '';
        }, 50);
      }
    });
  });
}

// // AJAX navigation
function ajaxNavigation() {
  var links = document.querySelectorAll('.ajax-link');
  var currentSlug = window.location.pathname;
  toggleBodyClass(currentSlug);
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var slug = this.getAttribute('data-slug');
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
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          action: 'load_page',
          page_slug: slug
        })
      }).then(function (response) {
        return response.text();
      }).then(function (data) {
        var contentContainer = document.getElementById('content-container');
        if (contentContainer) {
          var newUrl = slug === '/' ? '/' : "/".concat(slug);
          contentContainer.innerHTML = data; // Load new content
          history.pushState(null, '', newUrl); // Update URL without reloading
        } else {
          console.error('Element with ID "content-container" not found.');
        }
      })["catch"](function (error) {
        console.error('Failed to load content:', error);
      });
    });
  });
}
;

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

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nError: Can't resolve '../../assets/fonts/Assistant-VariableFont_wght.ttf' in 'C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\resources\\css'\n    at finishWithoutResolve (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:369:18)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:461:15\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:89:43\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:27:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\DescriptionFilePlugin.js:89:43\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:16:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\Resolver.js:519:5\n    at eval (eval at create (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\enhanced-resolve\\lib\\DirectoryExistsPlugin.js:41:15\n    at process.processTicksAndRejections (node:internal/process/task_queues:81:21)\n    at processResult (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\webpack\\lib\\NormalModule.js:764:19)\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\webpack\\lib\\NormalModule.js:866:5\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\laragon\\www\\PressWind\\wp-content\\themes\\Bramat_theme\\node_modules\\css-loader\\dist\\index.js:155:5)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/editor-style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailpress"] = self["webpackChunktailpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/editor-style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/editor-style"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/editor-style"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;