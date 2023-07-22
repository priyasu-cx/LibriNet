import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./routes/admin";
import AdminDashboard from "./routes/adminDashboard";
import Home from "./routes/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Router>
        <ToastContainer />
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/admin" Component={Admin}/>
          <Route path="/admin/dashboard" Component={AdminDashboard}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>
        </main>
        <Footer />
      </Router>
      </div>
    </>
  );
};

export default App;
