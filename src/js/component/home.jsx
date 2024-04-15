import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<div classname="container-fluid">
			<Navbar/>
			<Jumbotron/>
			<div className="row">
				<div className="col-4">
				<Card
				image={rigoImage}
				title="Title"
				text="Texto muestra 1"
				link="https://4geeks.com/"
			/>
				</div>
				<div className="col-4">
				<Card
				image={rigoImage}
				title="Title"
				text="Texto muestra 1"
				link="https://4geeks.com/"
			/>
				</div>
				<div className="col-4">
				<Card
				image={rigoImage}
				title="Title"
				text="Texto muestra 1"
				link="https://4geeks.com/"
			/>
				</div>
			</div>
		</div>
	);
};

export default Home;
