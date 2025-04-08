export default function loadAbout() {
    const content = document.getElementById('content');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const headline = document.createElement('h2');
    headline.textContent = 'About Us';

    const description = document.createElement('p');
    description.textContent = 'We are passionate about delivering the best dining experience.';

    aboutDiv.appendChild(headline);
    aboutDiv.appendChild(description);
    content.appendChild(aboutDiv);
}