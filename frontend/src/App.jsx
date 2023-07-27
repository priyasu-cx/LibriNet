import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Admin from "./routes/admin/AdminLogin";
import AdminDashboard from "./routes/admin/AdminDashboardScreen";
import Home from "./routes/home/home";
import "react-toastify/dist/ReactToastify.css";
import LoginScreen from "./routes/login/LoginScreen";
import MagicLoginCallback from "./routes/login/magicLogin";
import ProfileScreen from "./routes/profile/ProfileScreen";
import BookGallery from "./routes/books/BookGallery";
import BookDetails from "./routes/books/components/BookDetails";

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
          <Route path="/login" exact Component={LoginScreen}/>
          <Route path="/profile" exact Component={ProfileScreen}/>
          <Route path="/books" exact Component={BookGallery}/>
          <Route path="/books/:bookno" exact Component={BookDetails}/>
          <Route path="/magiclogin" exact Component={MagicLoginCallback}/>
          <Route path="/admin" Component={Admin}/>
          {/* Admin Routes */}
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
