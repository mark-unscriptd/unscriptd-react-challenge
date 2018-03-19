import React from 'react';
import ReactDOM from 'react-dom';
import ResultCol from '../../assets/jsx/ResultCol.jsx';


ReactDOM.render(
    <div >
        <div className="card-header bg-gray no-border text-center">
            <h4 className="w-300">Results </h4>
        </div>
        
        <ResultCol />

    </div>, document.getElementById('app_result')
);

