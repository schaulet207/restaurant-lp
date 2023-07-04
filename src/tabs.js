// tabs.js

import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');

    // Create top nav div
    const nav = document.createElement('div');
    nav.classList.add('nav');

    // Create the Restaurant Name
    const cGrill = document.createElement('h1');
    cGrill.classList.add('name');
    cGrill.textContent = 'The Chaulet Grill';

    // Create main tabs div
    const tabs  = document.createElement('div');
    tabs.classList.add('tabs');

    // Create sub tab divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3  = document.createElement('div');

    // Set IDs for tabs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    // Set classes for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    // Set text content for each tab
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    // Append the divs to the content div
    content.appendChild(nav);
    nav.appendChild(cGrill);
    nav.appendChild(tabs);
    tabs.appendChild(div1);
    tabs.appendChild(div2);
    tabs.appendChild(div3);

    div1.addEventListener('click', () => {
        createHomePage();
    })
    div2.addEventListener('click', () => {
        createMenuPage();
    })
    div3.addEventListener('click', () => {
        createContactPage();
    })
}

export default createTabs;