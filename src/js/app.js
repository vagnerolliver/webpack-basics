import '../css/main.css';

import { plus, minus, counter } from './counter';

plus.addEventListener('click', counterPlus);
minus.addEventListener('click', counterMinus);

function counterPlus() {
  var current = parseInt(counter.textContent);
  counter.innerHTML = current + 1;
}

function counterMinus() {
  var current = parseInt(counter.textContent);
  counter.innerHTML = current - 1;
}