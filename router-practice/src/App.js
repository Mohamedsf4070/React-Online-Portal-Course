import { Route,Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Users from "./Components/Home";
import Navbar from "./Navbar";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="about" element={<About/>}> </Route>
      <Route path="users" element={<Users/>}> </Route>
      <Route path="contact" element={<Contact/>}></Route>
   </Routes>
   </>
  );
}

export default App;
