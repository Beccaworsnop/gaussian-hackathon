import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LandingPage1 from "./components/landingpages1";
import LandingPage2 from "./components/landingpage2";
import LandingPage3 from "./components/landingpage3";
import WaysToHelp from "./components/getinvolve";
import EducationCorner from "./learn/educationcorner"; // Import Learn page

function App() {
    return (
        <Router>
            <Navbar /> {/* Navbar stays at the top across all pages */}
            <Routes>
                {/* Home Page */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <LandingPage1 />
                            <LandingPage2 />
                            <LandingPage3 />
                            <WaysToHelp />
                            <EducationCorner />
                        </>
                    } 
                />
                
                {/* Learn Page & Subsections */}
                <Route path="./learn" />
                <Route path="./learn/" element={<h2>Kid’s Corner</h2>} />
                <Route path="./learn/educationcorner.js" element={<h2>Educational Corner</h2>} />
                <Route path="./learn/stories.js" element={<h2>Stories</h2>} />
            </Routes>
        </Router>
    );
}

export default App;