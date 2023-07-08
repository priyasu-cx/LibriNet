import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./routes/admin";
import Home from "./routes/home";

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow">
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/admin" Component={Admin}/>
        </Routes>
        </main>
        <Footer />
      </Router>
      </div>
    </>
  );
};

export default App;
