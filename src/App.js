import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MultiSites from "./Multisites";

const { config } = require('./config');

function App() {

  const [site, setSite] = useState(false);

  useEffect(() => {
    let siteKey = '';
    if (config.deployment === 'dev') {
      siteKey = 'sample';
    } else {
      const hostname = window.location.hostname;
      if (hostname.includes('localhost')) {
        siteKey = 'sample';
      } else if (hostname.includes('hills')) {
        siteKey = 'hills';
      } else {
        siteKey = 'sample';
      }
    }
    setSite(siteKey);
    window.localStorage.setItem('site', siteKey);
  }, []);


  return (
    <>
      <BrowserRouter>
        <MultiSites site={site} />
      </BrowserRouter>
    </>
  );
}

export default App;
