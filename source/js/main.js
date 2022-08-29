import {iosVhFix} from './utils/ios-vh-fix';
import {initFormValidate} from './modules/init-form-validate';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  window.addEventListener('load', () => {
    initFormValidate();
  });
});
