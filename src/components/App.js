// import React from "react";

// import About from "./About";

// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home />
//       <About />
//     </div>
//   );
// }

// export default App;

// src/components/App.jsx

import React from 'react';

import About from './About'; // Adjust the import path as necessary

const App = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Our Application</h1>
      </header>
      <main>
        <About />
      </main>
    </div>
  );
};

export default App;

