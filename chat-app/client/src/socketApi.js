import io from "socket.io-client";

let socket;

//initialize ediyoruz.
export const init = () => {
	console.log("Connecting...");

	socket = io("http://localhost:3000", {
		transports: ["websocket"],
	});

	socket.on("connect", () => console.log("Connected!"));
};


export const sendMessage = (message) => {
	//new-message backend'den geliyor. Backend'i dinleyerek olusturduk.
	if (socket) socket.emit("new-message", message);
};

//diger clientlarda da mesajların görüntülenmesi icin yazdık.
export const subscribeChat = (cb) => {
	if (!socket) return;

	//burada backend'den gelen "receive-message" kanalını dinliyoruz.
	socket.on("receive-message", (message) => {
		console.log("Yeni mesaj var", message);
		cb(message);
	});
};

//burada backend'den gelen "message-list" kanalını dinliyoruz. Sayfa yenilenince mesajların kaybolmaması icin yazıyoruz.
export const subscribeInitialMessages = (cb) => {
	if (!socket) return;

	socket.on("message-list", (messages) => {
		console.log("Initial", messages);
		cb(messages);
	});
};