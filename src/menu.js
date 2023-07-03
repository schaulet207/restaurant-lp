// menu.js
import createTabs from './tabs';

const createMenuPage = () => {
const contentDiv = document.getElementById('content');

  // Clear the current contents
  contentDiv.innerHTML = '';

  createTabs();

  const menuContent = document.createElement('div');
  menuContent.classList.add('tab-content');

  const menuTitle = document.createElement('h2');
  menuTitle.innerText = 'Menu';

  const appetizersHeading = document.createElement('h3');
  appetizersHeading.innerText = 'Appetizers';

  const appetizersList = document.createElement('ul');
  const appetizers = ['Bruschetta', 'Calamari', 'Caprese Salad'];
  for (const item of appetizers) {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    appetizersList.appendChild(listItem);
  }

  const mainCoursesHeading = document.createElement('h3');
  mainCoursesHeading.innerText = 'Main Courses';

  const mainCoursesList = document.createElement('ul');
  const mainCourses = ['Steak', 'Pasta', 'Fish and Chips'];
  for (const item of mainCourses) {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    mainCoursesList.appendChild(listItem);
  }

  const dessertsHeading = document.createElement('h3');
  dessertsHeading.innerText = 'Desserts';

  const dessertsList = document.createElement('ul');
  const desserts = ['Cheesecake', 'Tiramisu', 'Chocolate Brownie'];
  for (const item of desserts) {
    const listItem = document.createElement('li');
    listItem.innerText = item;
    dessertsList.appendChild(listItem);
  }

  menuContent.appendChild(menuTitle);
  menuContent.appendChild(appetizersHeading);
  menuContent.appendChild(appetizersList);
  menuContent.appendChild(mainCoursesHeading);
  menuContent.appendChild(mainCoursesList);
  menuContent.appendChild(dessertsHeading);
  menuContent.appendChild(dessertsList);

  contentDiv.appendChild(menuContent);
}

    export default createMenuPage;