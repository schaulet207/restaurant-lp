// contact.js
import createTabs from './tabs';

const createContactPage = () => {
    const contentDiv = document.getElementById('content');

  // Clear the current contents
  contentDiv.innerHTML = '';

  createTabs();

  const contactContent = document.createElement('div');
  contactContent.classList.add('tab-content');

  const contactTitle = document.createElement('h2');
  contactTitle.innerText = 'Contact Us';

  const contactInfo = document.createElement('p');
  contactInfo.innerText = 'For reservations or inquiries, please contact us at:';

  const contactEmail = document.createElement('p');
  contactEmail.innerText = 'Email: contact@restaurant.com';

  const contactPhone = document.createElement('p');
  contactPhone.innerText = 'Phone: +1 123-456-7890';

  contactContent.appendChild(contactTitle);
  contactContent.appendChild(contactInfo);
  contactContent.appendChild(contactEmail);
  contactContent.appendChild(contactPhone);

  contentDiv.appendChild(contactContent);
  }

  export default createContactPage;