import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddCandidate from "./components/AddCandidate";
import ExistingApplications from "./components/ExistingApplications";
import "./styles/index.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col font-sans">
          {/* Navigation Bar */}
          <nav className="bg-gradient-to-r from-blue-700 to-purple-800 p-6 shadow-xl sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-white text-4xl font-extrabold tracking-wide">Candidate Management</h1>
              <div className="flex space-x-20"> {/* Increased spacing between buttons */}
                <Link to="/add-new-candidate" className="text-white hover:text-yellow-300 text-lg font-semibold transition duration-300">Add Candidate</Link>
                <Link to="/existing-applications" className="text-white hover:text-yellow-300 text-lg font-semibold transition duration-300">Applications</Link>
              </div>
            </div>
          </nav>
          
          {/* Hero Section */}
          <header className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-24 shadow-lg">
            <h2 className="text-6xl font-bold drop-shadow-lg">Streamline Your Hiring Process</h2>
            <p className="text-2xl mt-6 opacity-90 drop-shadow-md">A powerful tool for managing candidates efficiently.</p>
          </header>

          {/* Main Content */}
          <main className="container mx-auto p-16 flex-grow bg-white shadow-2xl rounded-xl mt-10 border border-gray-300">
            <Routes>
              <Route path="/add-new-candidate" element={<AddCandidate />} />
              <Route path="/existing-applications" element={<ExistingApplications showRemoveButton={true} />} />
              <Route path="/" element={<AddCandidate />} />
            </Routes>
          </main>

          {/* Footer */}
          <footer className="bg-gray-900 text-white p-8 text-center mt-auto shadow-inner border-t-2 border-gray-700">
            <p className="text-gray-400 text-xl">&copy; {new Date().getFullYear()} Candidate Management System | Designed for Professionals</p>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
