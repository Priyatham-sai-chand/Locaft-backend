import React, {useState} from 'react';
import styles from '../stepper.module.css';
import classNames from 'classnames';

export default function Stepper() {

  const[next,setNext] = useState(false);
  const[clear,setClear] = useState(false);

  document.addEventListener('DOMContentLoaded', () => {
    var list = document.getElementById('progress'),
      next = document.getElementById('next'),
      clear = document.getElementById('clear'),
      children = [...document.querySelectorAll('ele')],
      completed = 0;
      console.log(children);

    // simulate activating a node
    if(next === true){

      // count the number of completed nodes.
      completed = (completed === 0) ? 1 : completed + 2;
      if (completed > children.length) return;

      // for each node that is completed, reflect the status
      // and show a green color!
      for (var i = 0; i < completed; i++) {
        children[i].children[0].classNameList.remove(styles['grey']);
        children[i].children[0].classNameList.add(styles['green']);

        // if this child is a node and not divider, 
        // make it shine a little more
        if (i % 2 === 0) {
          children[i].children[0].classNameList.add('activated');
        }
      }

    }

    // clear the activated state of the markers
    if(clear === true){
      for (var i = 0; i < children.length; i++) {
        children[i].children[0].classNameList.remove('green');
        children[i].children[0].classNameList.remove('activated');
        children[i].children[0].classNameList.add('grey');
      }
      completed = 0;
    }
  });

  return (
    <div className="container">
      <h1>Relocation Status</h1>
      <br />
      <br />
      <br />
      <ul id="progress">
        <li className="ele"><div className={classNames({'node':true,'grey': true })}></div><p>Transport tickets confirmed</p></li>
        <li  className="ele" ><div className={classNames({'divider':true, 'grey':true})}></div></li>
        <li className="ele"  ><div className="node grey"></div><p>Packers & movers due to come in a day</p></li>
        <li className="ele"><div className="divider grey"></div></li>
        <li className="ele"><div className="node grey"></div><p>school admission being confirmed</p></li>
        <li className = "ele"><div className="divider grey"></div></li>
        <li className = "ele"><div className="node grey"></div><p>House is empty</p></li>
      </ul>
      <input type="button" onClick={() => setNext(true)} value="Next" id="next" />
      <input type="button" onClick={ () => setNext(true)} value="Clear" id="clear" />
    </div>
  )

}