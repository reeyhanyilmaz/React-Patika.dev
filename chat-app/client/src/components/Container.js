import { useEffect } from "react";

import ChatList from "./ChatList";
import ChatForm from "./ChatForm";
import { useChat } from "../context/ChatContext";

import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";

function Container() {
	const { setMessages } = useChat();

	useEffect(() => {
		//didmount anında init(); calısacak.
		init();

		//Sayfa yenilenince mesajların kaybolmaması icin yazıyoruz.
		subscribeInitialMessages((messages) => setMessages(messages));

		
		//subscribeChat ile yeni mesaj geldiginde context'i güncellemek icin setMessages ile cb yazdık. Sadece subscribeChat(); olarak atasaydık sadece console'a yeni mesaj geldi diye bildirim alırız diger kullanıcı ekranına basamazdık.
		subscribeChat((message) => {
			setMessages((prevState) => [...prevState, { message }]);
		});
	}, []);

	return (
		<div className="App">
			<ChatList />
			<ChatForm />
		</div>
	);
}

export default Container;
