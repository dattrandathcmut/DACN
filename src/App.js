import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
<<<<<<< HEAD
=======
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Group from "./pages/Group";
import Group1 from "./pages/Group1";
import Desktop23 from "./pages/Desktop23";

>>>>>>> Incoming
import Desktop22 from "./pages/Desktop22";
import Desktop23 from "./pages/Desktop23";
import Group1 from "./pages/Group1";
import Group from "./pages/Group";
import Frame5 from "./pages/Frame5";
import Frame4 from "./pages/Frame4";
import Frame3 from "./pages/Frame3";
import Frame2 from "./pages/Frame2";
import Frame1 from "./pages/Frame1";
import Frame from "./pages/Frame";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/desktop-23":
=======
      case "/frame-38":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/group-2613":
=======
      case "/frame-36":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/group-2611":
=======
      case "/frame-35":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-33":
=======
      case "/frame-34":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-34":
=======
      case "/frame-33":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-35":
=======
      case "/group-2611":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-36":
=======
      case "/group-2613":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-38":
=======
      case "/desktop-23":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
<<<<<<< HEAD
      case "/frame-37":
=======
      case "/desktop-22":

>>>>>>> Incoming
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Desktop22 />} />
=======
      <Route path="/" element={<Frame />} />
      <Route path="/frame-38" element={<Frame1 />} />
      <Route path="/frame-36" element={<Frame2 />} />
      <Route path="/frame-35" element={<Frame3 />} />
      <Route path="/frame-34" element={<Frame4 />} />
      <Route path="/frame-33" element={<Frame5 />} />
      <Route path="/group-2611" element={<Group />} />
      <Route path="/group-2613" element={<Group1 />} />

>>>>>>> Incoming
      <Route path="/desktop-23" element={<Desktop23 />} />
<<<<<<< HEAD
      <Route path="/group-2613" element={<Group1 />} />
      <Route path="/group-2611" element={<Group />} />
      <Route path="/frame-33" element={<Frame5 />} />
      <Route path="/frame-34" element={<Frame4 />} />
      <Route path="/frame-35" element={<Frame3 />} />
      <Route path="/frame-36" element={<Frame2 />} />
      <Route path="/frame-38" element={<Frame1 />} />
      <Route path="/frame-37" element={<Frame />} />
=======
      <Route path="/desktop-22" element={<Desktop22 />} />

>>>>>>> Incoming
    </Routes>
  );
}
export default App;
