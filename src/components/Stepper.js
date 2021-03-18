import React  from 'react';
import Footer from './Footer';
import  '../stepper.css';
import NavBar from './NavBar';

export default function Stepper() {

  document.addEventListener('DOMContentLoaded', () => {
    var list = document.getElementById('progress'),
    next = document.getElementById('next'),
    clear = document.getElementById('clear'),
    children = list.children,
    completed = 0;

//  activating a node button
next.addEventListener('click', function() {
    
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
clear.addEventListener('click', function() {
    for (var i = 0; i < children.length; i++) {
        children[i].children[0].classList.remove('green');
        children[i].children[0].classList.remove('activated');
        children[i].children[0].classList.add('grey');
    }
    completed = 0;
}, false);
  });

  return (
    <div className="container">
      < NavBar />
      <h1 className ="relocheading">Relocation Status</h1>
      <br />
      <br />
      <br />
      <ul id="progress">
        <li className="ele"><div className="node grey"></div><p>Transport tickets confirmed</p></li>
        <li  className="ele" ><div className="divider grey"></div></li>
        <li className="ele"  ><div className="node grey"></div><p>Packers & movers due to come in a day</p></li>
        <li className="ele"><div className="divider grey"></div></li>
        <li className="ele"><div className="node grey"></div><p>school admission being confirmed</p></li>
        <li className = "ele"><div className="divider grey"></div></li>
        <li className = "ele"><div className="node grey"></div><p>House is empty</p></li>
      </ul>
      <input type="button" value="Next" id="next" />
      <input type="button" value="Clear" id="clear" />
      <Footer />
    </div>
  )

}