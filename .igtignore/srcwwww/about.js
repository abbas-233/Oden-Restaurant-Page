export default function loadAbout() {
    const content = document.getElementById('content');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const headline = document.createElement('h2');
    headline.textContent = 'About Us';

    const description = document.createElement('p');
    description.textContent = 'We are passionate about delivering the best dining experience.';

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/600x400'; // Replace with actual image URL
    image.alt = 'About us';

    aboutDiv.appendChild(headline);
    aboutDiv.appendChild(description);
    aboutDiv.appendChild(image);
    content.appendChild(aboutDiv);
}