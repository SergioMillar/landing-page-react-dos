//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Navbar from "./component/Navbar.jsx";
import Footer from "./component/Footer.jsx";
import Deckofcards from "./component/Cards.jsx";

const App = () => {
	return (
		<div>
			<Navbar />
			<Deckofcards />
			<Footer />
		</div>
	);
};

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
