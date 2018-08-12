import '../css/main.scss';

import { plus, minus, counter } from './counter';

const counterPlus = () => {
  var current = parseInt(counter.textContent);
  counter.innerHTML = current + 1;
}

const counterMinus = () => {
  var current = parseInt(counter.textContent);
  counter.innerHTML = current - 1;
}

plus.addEventListener('click', counterPlus);
minus.addEventListener('click', counterMinus);