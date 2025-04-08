export default function loadMenu() {
    const content = document.getElementById('content');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const headline = document.createElement('h2');
    headline.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    const items = ['Pizza', 'Pasta', 'Salad', 'Dessert'];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    const image = document.createElement('img');
    image.src = 'https://via.placeholder.com/600x400'; // Replace with actual image URL
    image.alt = 'Delicious food';

    menuDiv.appendChild(headline);
    menuDiv.appendChild(menuList);
    menuDiv.appendChild(image);
    content.appendChild(menuDiv);
}