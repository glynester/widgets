import React from 'react';

const Link=({className, href, children})=>{
  // helper function
  const onClick=(event)=>{
    // Makes a link open in a new tab when CTRL (windows) + link clicked
    if (event.metaKey || event.ctrlKey){
      return;
    }
    event.preventDefault(); // Stops page reloading
    window.history.pushState({},'',href);   // Updates the URL
    const navEvent = new PopStateEvent('popstate'); // Tell  route components that data (the URL) has just changed.
    window.dispatchEvent(navEvent);

  }

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  )
}

export default Link;