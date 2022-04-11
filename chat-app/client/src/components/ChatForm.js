import { useState } from "react";

import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {
	//input'a girilen ifade state yazılmalı.
	const [message, setMessage] = useState("");

	const { setMessages } = useChat();

	const handleSubmit = (e) => {
		//preventDefault ile form submit olunca sayfa komple yenilenmez. Native davranısı durdurduk.
		e.preventDefault();
		console.log(message);

		//prevState onceki mesajlarıda koruyarak yeni mesajları ekrana basar.
		//setMessages'a [ { message }] böyle atama yapsaydık tek mesajı gösterir , neyi gönderdiysek. Eski mesajalrı korumak icin prevState kullandık.
		//fromMe ile de mesaj benden ise mesajlar sagda görünsün istedik.
		//fromMe ile ilk basta true sayfa yenilenince backend'e kaydolmadıgı icin sola gecer mesaj, login sistemi olmadıgından backend id ile birlestirme yapamıyor.
		setMessages((prevState) => [...prevState, { message, fromMe: true }]);
		sendMessage(message);
		setMessage(""); //form gidince input bosalsın diye.
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.textInput}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default ChatForm;