import React from "react";
import Card from "./Card.jsx";
import Jumbotron from './Jumbotron.jsx'
import Navbar from './navbar.jsx'
import Footer from './Footer.jsx'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="row text-center mt-4">
				<div className="col-12">
					<Jumbotron />
				</div>
			</div>
			<div className="row text-center mt-4">
				<div className="col-3">
					<Card
						image={rigoImage}
						title="Title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						link="https://4geeks.com/"
					/>
				</div>
				<div className="col-3">
					<Card
						image={rigoImage}
						title="Title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						link="https://4geeks.com/"
					/>
				</div>
				<div className="col-3">
					<Card
						image={rigoImage}
						title="Title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						link="https://4geeks.com/"
					/>
				</div>
				<div className="col-3">
					<Card
						image={rigoImage}
						title="Title"
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						link="https://4geeks.com/"
					/>
				</div>
			</div>
			<div className="mt-4">
				<Footer />
			</div>
		</div>
	);
};

export default Home;
