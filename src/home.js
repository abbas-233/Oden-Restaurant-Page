export default function loadHome() {
    const content = document.getElementById('content');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');

    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to Our Restaurant!';

    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest dining experience with us.';

    homeDiv.appendChild(headline);
    homeDiv.appendChild(description);
    content.appendChild(homeDiv);
}