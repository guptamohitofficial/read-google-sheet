import { Routes, Route } from "react-router-dom";
import PublicLayout from "../../Layouts/PublicLayout";
import Header from "./Header";
import Error404 from "./404";
import Home from "./Home";
import Detail from "./Detail";
import Contact from "./Contact";

function Sample() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout header={<Header />} />}>
          <Route index element={<Home />} />
          <Route path="post/:postId" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default Sample;
