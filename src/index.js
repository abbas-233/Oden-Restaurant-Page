import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './styles.css'; // Import CSS

function createHeader() {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.textContent = 'The Fancy Fork'; // Example Restaurant Name

    const nav = createNav(); // Get the nav element

    header.appendChild(title);
    header.appendChild(nav);
    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
    });

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About'; // Changed from 'Contact' to match module name
    aboutButton.addEventListener('click', () => {
        clearContent();
        loadAbout();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function clearContent() {
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
    }
}

// Initial page setup
function initializePage() {
    const contentDiv = document.getElementById('content');
    const header = createHeader();

    // Insert header before the content div
    document.body.insertBefore(header, contentDiv);

    // Load the home page content initially
    loadHome();
}

initializePage(); // Run setup