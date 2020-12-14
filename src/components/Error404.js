import React from 'react';
import '../error404.css';
import {Link} from 'react-router-dom'
const Error404 = () => {
    return (
        <div>
            <h1 className="numbering">404</h1>
            <p className="para">Oops! Something is wrong.</p>
            < Link class="button" to="/"><i class="icon-home"></i> Going back to Homepage, is better</Link>
        </div>



    );
}
export default Error404;