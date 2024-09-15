import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Drafts } from "./pages/Drafts";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Prompt } from "./pages/Prompt";
import { Register } from "./pages/Register";
import { Error } from "./pages/Error";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { GeneratedBlog } from "./pages/GeneratedBlog";

const App = () => {
    return(
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/drafts" element={<Drafts/>}/>
            <Route path="/prompt" element={<Prompt/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/generated-blog" element={<GeneratedBlog />} />
            <Route path="*" element={<Error/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </>
    );
  };

export default App;