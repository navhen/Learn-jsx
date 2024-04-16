  function App() { 
   // -- sample Function
    let mesaage = 'Bye There!';
    if (Math.random() > 0.5) {
        mesaage = 'Hello There';
    }
    // // End printing
    return <h1>{ mesaage }</h1>
  }
    /*
import React from 'react';

function App() {
    const name = 'Rezha';

    return(
        <div>
            <text>My Name is :</text>
            <h1>
                { name }
            </h1>
        </div>
    );
}
*/
export default App;