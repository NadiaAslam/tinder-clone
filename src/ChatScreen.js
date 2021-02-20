import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


const ChatScreen = () => {
	const [input, setInput] = useState("");

	const [messages, setMessages] = useState([
		{ name: "ellen", image: "...", message: "hey dude how's doing" },
		{ name: "john", image: "...", message: " how's doing" },
		{ name: "mohin", image: "...", message: "hey dude It's cool man" },
		{ message: "hye how are you ellen" },
	]);
	const handleClick = (e) => {
		e.preventDefault();
		setMessages([...messages, { message: input }]);
		setInput("");
	};
	return (
		<div className="chatscreen">
			<p className="chatscreen__timestamp">You matched ellen at 10/2/2021</p>
			{messages.map((message) =>
				message.name ? (
					<div className="chatscreen__message">
						<Avatar
							className="cahtscreen__image"
							alt={message.name}
							src={message.image}
						/>
						<p className="chatscreen__text">{message.message}</p>
					</div>
				) : (
					<div className="chatscreen__message">
						<p className="chatscreen__textuser">{message.message}</p>
					</div>
				)
			)}

			<form className="chatscreen__input">
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="chatscreen__inputField"
					placeholder="Type a message..."
					type="text"
				/>
				<button
					disabled={!input}
					onClick={handleClick}
					type="submit"
					className="chatscreen__inputButton"
				>
					Send
				</button>
			</form>
		</div>
	);
};

export default ChatScreen;
