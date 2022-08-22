import { useEffect } from "react";
import { getData } from "../api/database";
import { config } from "../config";
import Sample from "./Sample";

function MultiSites({ site }) {

  const siteToComponentMapping = {
    'sample': <Sample />
  };

  const getSiteData = async () => {
    let siteDataPath = site;
    if (config.deployment === 'dev') {
      siteDataPath += 'Dev';
    }
    const data = await getData(`/${siteDataPath}`);
    window.localStorage.setItem(siteDataPath, JSON.stringify(data));
  };

  useEffect(() => {
    getSiteData();
  }, []);

  return (
    <>
    {siteToComponentMapping[site]}
    </>
  );
}

export default MultiSites;
