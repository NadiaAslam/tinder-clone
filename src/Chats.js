import React from "react";
import Chat from "./Chat.js";
const Chats = () => {
	return (
		<div>
			<Chat
				name="john"
				message="hey what's up"
				timestamp="35 mins ago"
				profilePic="..."
			/>
			<Chat
				name="john"
				message="hey what's up"
				timestamp="35 mins ago"
				profilePic="..."
			/>
			<Chat
				name="ellen"
				message="hey how are you"
				timestamp="5 mins ago"
				profilePic="..."
			/>
			<Chat
				name="john"
				message="hey hello how do feel now "
				timestamp="15 mins ago"
				profilePic="..."
			/>
		</div>
	);
};

export default Chats;
