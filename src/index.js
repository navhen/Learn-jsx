// 1) import React and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) Get a reference to eht div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
// ---- Start Function
// function App() {

    // Printing JS variable
    
    // -- sample text area with autofocus

    /* const maxLengthtext = 10;
    return <textarea 
                autoFocus={true} 
                maxLength={ maxLengthtext }
                spellCheck //if false use spellCheck = { false }
            />; */

    // -- END sample text area with autofocus

    // -- sample input number

    /* const inputType = 'number';
    const minvalue = 5;
    const maxValue = 10;

    return <input 
                type={inputType}
                min={minvalue}
                max={maxValue} />; */

    // -- end sample input number

    // -- Sample multi Object
    /* const name = 'Rezha';
    const age = 23;

    return <h1>
        Hello my name is { name } an my age { age }
    </h1>; */
    // --End sample Multi Object 

    // - Sample Date
    /* return <h1>
        { new Date().toLocaleTimeString()}
    </h1>; */
    // -- End sample Date
    
    // -- sample Function
    /* let mesaage = 'Bye There!';
    if (Math.random() > 0.5) {
        mesaage = 'Hello There';
    }
    // End printing
    return <h1>{ mesaage }</h1> */

    // -- End sample Function
// }
// ----- End Function
// 5) Show the component on the screen
root.render(<App />);