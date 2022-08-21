import Sample from "./Sample";

function MultiSites({ site }) {

  const siteToComponentMapping = {
    'sample': <Sample />
  };

  return (
    <>
    {siteToComponentMapping[site]}
    </>
  );
}

export default MultiSites;
