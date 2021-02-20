import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Tindercards.css";
import database from "./firebase.js";
// import firebase from "./firebase.js";

const Home = () => {
	const [people, setPeople] = useState([
		// {
		// 	Name: "Elon Musk",
		// 	url:
		// 		"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
		// },
		// {
		// 	Name: "Bil gates",
		// 	url:
		// 		"https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg",
		// },
	]);

	useEffect(() => {
		database
			.collection("people")
			.onSnapshot((snapshot) =>
				setPeople(snapshot.docs.map((doc) => doc.data()))
			);
	}, []);
	return (
		<div className="tindercards__cardcontainer">
			{people.map((person) => (
				<TinderCard
					className="swipe"
					key={person.name}
					preventSwipe={["up", "down"]}
				>
					<div
						className="card"
						style={{ backgroundImage: `url(${person.url})` }}
					>
						<h3>{person.Name}</h3>
					</div>
				</TinderCard>
			))}
		</div>
	);
};

export default Home;
