// import React from 'react';  // No JSX in file so not needed.

// A component (JSX tag) passed within another component is identified as a prop called 'children' to the outer component.
const Route=({ path, children })=>{
  return window.location.pathname===path?children : null;
}

export default Route;