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

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

function createNav() {
    const nav = document.createElement('nav');

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        clearContent();
        loadHome();
        setActiveButton(homeButton);
    });

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        clearContent();
        loadMenu();
        setActiveButton(menuButton);
    });

    const aboutButton = document.createElement('button');
    aboutButton.textContent = 'About'; // Changed from 'Contact' to match module name
    aboutButton.addEventListener('click', () => {
        clearContent();
        loadAbout();
        setActiveButton(aboutButton);
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

function createFooter() {
    const footer = document.createElement('footer');
    footer.textContent = '© 2025 The Fancy Fork. All rights reserved.';
    return footer;
}

// Initial page setup
function initializePage() {
    const contentDiv = document.getElementById('content');
    const header = createHeader();
    const footer = createFooter();

    // Insert header before the content div
    document.body.insertBefore(header, contentDiv);
    document.body.appendChild(footer);

    // Load the home page content initially
    loadHome();
}

initializePage(); // Run setup