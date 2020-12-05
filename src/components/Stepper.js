import React from 'react';
import './stepper.css';

export default function Stepper() {

  document.addEventListener('DOMContentLoaded', () => {
    var list = document.getElementById('progress'),
      next = document.getElementById('next'),
      clear = document.getElementById('clear'),
      children = list.children,
      completed = 0;

    // simulate activating a node
    next.addEventListener('click', function () {

      // count the number of completed nodes.
      completed = (completed === 0) ? 1 : completed + 2;
      if (completed > children.length) return;

      // for each node that is completed, reflect the status
      // and show a green color!
      for (var i = 0; i < completed; i++) {
        children[i].children[0].classList.remove('grey');
        children[i].children[0].classList.add('green');

        // if this child is a node and not divider, 
        // make it shine a little more
        if (i % 2 === 0) {
          children[i].children[0].classList.add('activated');
        }
      }

    }, false);

    // clear the activated state of the markers
    clear.addEventListener('click', function () {
      for (var i = 0; i < children.length; i++) {
        children[i].children[0].classList.remove('green');
        children[i].children[0].classList.remove('activated');
        children[i].children[0].classList.add('grey');
      }
      completed = 0;
    }, false);
  });

  return (
    <div class="container">
      <h1>Relocation Status</h1>
      <br />
      <br />
      <br />
      <ul id="progress">
        <li><div class="node green"></div><p>Transport tickets confirmed</p></li>
        <li><div class="divider grey"></div></li>
        <li><div class="node grey"></div><p>Packers & movers due to come in a day</p></li>
        <li><div class="divider grey"></div></li>
        <li><div class="node grey"></div><p>school admission being confirmed</p></li>
        <li><div class="divider grey"></div></li>
        <li><div class="node grey"></div><p>House is empty</p></li>
      </ul>
      <input type="button" value="Next" id="next" />
      <input type="button" value="Clear" id="clear" />
    </div>
  )

}