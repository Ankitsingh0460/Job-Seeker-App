import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import SignIn from "./component/Auth/SignIn";
import SignUp from "./component/Auth/SignUp";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import { Context } from "./main";
import Jobs from "./component/Job/Jobs";
import JobDetail from "./component/Job/JobDetail";
import Application from "./component/Applications/Application";
import MyApplication from "./component/Applications/MyApplication";
import PostJob from "./component/Job/PostJob";
import MyJob from "./component/Job/MyJobs";
import NotFound from "./component/NotFound/NotFound";
import { useContext, useEffect } from "react";

const App = () => {
  const { isAuthorized, setIsAuthorised, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("", { withCredentials: true });
        setUser(response.data.user);
        setIsAuthorised(true);
      } catch (error) {
        setIsAuthorised(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applicaion/me" element={<MyApplication />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
