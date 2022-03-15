// import React from 'react';  // No JSX in file so not needed.

const Route=({ path, children })=>{
  return window.location.pathname===path?children : null;
}

export default Route;