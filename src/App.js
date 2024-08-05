// The bug is that the ChildComponent does not update the text correctly.


import React, { useState } from 'react';
import './App.css';

function ChildComponent({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello, World!");

  return (
    <div className="App">
      <h1>React Debugging Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <ChildComponent message={"Fixed Message"} />
    </div>
  );
}

export default App;


//STEPS TO FIX THE BUG USING REACT DEVELOPER TOOLS

// Open React Developer Tools:

// Install the React Developer Tools browser extension.
// Open the application in the browser.
// Open the developer tools (select "Inspect").
// Navigate to the "Components" tab.

// Inspect Component Tree:

// Select the App component and inspect its state and props.
// Observe the text state and message prop passed to ChildComponent.

// Identify the Bug:

// The ChildComponent should display the text state, but it displays "Fixed Message" instead.
// The issue is that the message prop passed to ChildComponent is hardcoded to "Fixed Message".

// Fix the Bug:

// Update the message prop to pass the text state instead of a fixed message.
// Implement the Fix

// Modify the App.js file to fix the bug:

// import React, { useState } from 'react';
// import './App.css';

// function ChildComponent({ message }) {
//   return (
//     <div>
//       <p>{message}</p>
//     </div>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("Hello, World!");

//   return (
//     <div className="App">
//       <h1>React Debugging Example</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <p>Count: {count}</p>
//       <input 
//         type="text" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//       />
//       <ChildComponent message={text} />
//     </div>
//   );
// }

// export default App;


// Inspect the Updated Application:

// Open the application in the browser.
// Open React Developer Tools and inspect the App and ChildComponent.
// Verify that the message prop in ChildComponent now updates correctly when the input field changes.
// Test the Application