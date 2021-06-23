import {offersFragment} from './offers.js';
import {formsDisabled} from './disable-form.js';

const map = document.querySelector('#map-canvas');
map.appendChild(offersFragment);

formsDisabled();
