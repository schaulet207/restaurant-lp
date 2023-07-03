import createHomePage from './home';
import createTabs from './tabs';


function initialLoad() {
    createTabs();
    createHomePage();
}

export default initialLoad;