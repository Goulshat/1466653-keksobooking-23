import {offersFragment} from './offers.js';
import {formDisableToggle} from './disable-form.js';
import './form.js';

const map = document.querySelector('#map-canvas');
map.appendChild(offersFragment);

formDisableToggle();
formDisableToggle();
