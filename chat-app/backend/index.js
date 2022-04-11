//REDİS'i burada mesajları veri tabanına kaydetmek, gelen bi kulanıcınında gecmis mesajları görebilmesi icin kullanıyoruz!!******************************************************.

const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const cors = require("cors");

const Messages = require("./lib/Messages");

app.use(cors());

app.get("/", (req, res) => {
	res.end("Merhaba Socket.IO");
});

io.on("connection", (socket) => {
	console.log("a user connected");

	//redis ile mesajları alıp baglanan kullanıcıya iletiyoruz burada.
	Messages.list((data) => {
		console.log(data);
		socket.emit("message-list", data);
	});

	//herhangi mesaj emit edildiginde backend'e redis'e yazıyoruz (MEssages.upsert kısmı) sonrasında baglı diger clientlara emitliyoruz. (socket.broadcast.emit kısmı). 
	socket.on("new-message", (message) => {
	console.log(message);
	Messages.upsert({ message });

	socket.broadcast.emit("receive-message", message);
	});

	//disconnect event listener'ı.
	socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(process.env.PORT || "3000", () => {
	console.log("listening on *:3000");
});
