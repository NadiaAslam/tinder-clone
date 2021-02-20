// import logo from "./logo.svg";
// import "./App.css";
import SwipeButton from "./SwipeButton";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Tindercards from "./Tindercards";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/chat/:person">
					<Header backButton="/chat" />
					<ChatScreen />
				</Route>
				<Route path="/chat">
					<Header backButton="/" />
					<Chats />
					
				</Route>
				<Route exact path="/">
					<Header />
					<Tindercards />
					<SwipeButton />
				</Route>

				{/* Header */}

				{/* Tinder Cards */}
				{/* Buttons below tinder cards */}
				{/* when click on the right side of the app icon it opens new screen below */}
				{/* Chats screens  */}
				{/* individual chat screen */}
			</Switch>
		</Router>
	);
}

export default App;
