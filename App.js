import React from 'react';
import './App.css';
import SearchPage from "./SearchPage.js";
import Header from "./Header.js";
import RecommendedVideo from './RecommendedVideo';
import Sidebar from "./Sidebar.js";
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
      <Header />
        <Switch>
          <Route path="/search:searchTerm">
          <div className="app_page">
      <Sidebar />
      <SearchPage />
      </div>
          </Route>
          <Route path="/">
          <div className="app_page">
      <Sidebar />
      <RecommendedVideo />
      </div>  
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
