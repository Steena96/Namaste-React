import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Body from './components/Body'
const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
      ></img>
      <h3>AnnaPoorna</h3>
      <h4>Curd Rice, South Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>10 minutes</h4>
    </div>
  );
};


const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
