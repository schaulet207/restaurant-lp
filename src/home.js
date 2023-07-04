// home.js
import createTabs from './tabs';


const createHomePage = () => {
  const contentDiv = document.getElementById('content');

  // Clear the current contents
  contentDiv.innerHTML = '';

  createTabs();

  const headline = document.createElement('h1');
  headline.innerText = 'Welcome to The Chaulet Grill';

  const restaurantImage = document.createElement('img');
  restaurantImage.src = '/restaurant-lp/img/restaurant_image.jpg';
  restaurantImage.alt = 'Restaurant Image';
  restaurantImage.classList.add('restaurant-image');

  const copy = document.createElement('p');
  copy.innerText = `Experience the finest flavors in a warm and inviting atmosphere. Our dedicated team of chefs and staff is committed to providing you with an exceptional dining experience. From carefully crafted dishes to outstanding service, we strive to make every visit memorable. Join us for a culinary journey that will tantalize your taste buds and leave you wanting more.`;

  contentDiv.appendChild(headline);
  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(copy);
}

export default createHomePage;