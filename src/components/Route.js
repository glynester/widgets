// import React from 'react';  // No JSX in file so not needed.
import { useEffect, useState } from 'react';

// A component (JSX tag) passed within another component is identified as a prop called 'children' to the outer component.
const Route=({ path, children })=>{
  const [currentPath, setCurrentPath]=useState(window.location.pathname);
  useEffect(()=>{
    // Defined separately so it can be removed later on.
    const onLocationChange=()=>{
      // console.log("Location changed!!!");
      // Changing this, get the Route to update
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', onLocationChange);
    // Cleanup function
    return ()=>{
      window.removeEventListener('popstate', onLocationChange);
    }

  },[]); // Only want it to run once (when first rendered to screen), hence '[]' argument.

  // currentPath = window.location.pathname so could use either
  return currentPath === path?children : null;
}

export default Route;

// Listen for event despatched using useState.