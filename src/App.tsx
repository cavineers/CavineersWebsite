// Standard Imports
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import About from './components/About';
import Homepage from './components/Main';
import Outreach from './components/Outreach';
import Sponsors from './components/Sponsors';

// Main application window.
function App() {
    return (
        <Router>
            <>
                <Navbar />
                <Sidemenu />
                <Route exact path="/about" component={About} />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/outreach" component={Outreach} />
                <Route exact path="/sponsors" component={Sponsors} />
            </>
        </Router>
    );
}

export default App;
