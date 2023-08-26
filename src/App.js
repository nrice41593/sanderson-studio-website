import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/home"
import ContactUs from "./pages/contact-us"
import Login from "./pages/login"
import Store from "./pages/store"
import Navigation from "./components/navigation";


function App() {
  return (
    <Router>
      <div className="App">
          <Navigation/>
          <Routes>
              <Route path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/contactus" component={ContactUs} />
              <Route path="/store" component={Store} />
              <Route component={() => 404} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
