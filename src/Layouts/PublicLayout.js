import { Outlet } from "react-router-dom";

const PublicLayout = ({ header }) => {
  return (
    <>
      {header}
      <Outlet />
    </>
  )
};

export default PublicLayout;