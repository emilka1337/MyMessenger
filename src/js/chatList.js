class ChatList {
    constructor() {
        this._chatList = [];
    }

    _createChatContainer(params = { username, messagePreview, avatar, chatID }) {
        let chat = document.createElement("div");
        chat.className = "row chat";
        chat.dataset.chatID = params.chatID;

        let chatAvatar = document.createElement("div");
        chatAvatar.className = "col-3 chat-avatar";

        let img = document.createElement("img");
        img.src = params.avatar;

        let chatInfo = document.createElement("div");
        chatInfo.className = "col-9 chat-info";

        let h4 = document.createElement("h4");
        h4.className = "username";
        h4.innerHTML = params.username;

        let p = document.createElement("p");
        p.className = "message-preview";
        p.innerHTML = params.messagePreview;

        chat.append(chatAvatar);
        chatAvatar.append(img);
        chat.append(chatInfo);
        chatInfo.append(h4);
        chatInfo.append(p);

        chat.addEventListener("click", () => this._openChat(params));

        chat.addEventListener('click', function () {
            document.querySelectorAll('.chat').forEach(chat => chat.classList.remove('active'));
            chat.classList.add('active');
        })

        return chat;
    }

    _openChat(params = { username, messagePreview, avatar, chatID }) {
        let currentChat = this.chatList.find(chat => chat.chatID == params.chatID);

        console.log(currentChat);
        // Дописать функцию
    }

    _displayChats() {
        for (let i = 0; i < 20; i++) {
            let params = {
                username: "Ako, Nazadi daniwan?",
                messagePreview: "Lorem ipsum dolor sit amet consectetur.",
                avatar: "./src/img/avatar.jpg",
                chatID: i
            }

            this._chatList.push(params);

            let chatContainer = this._createChatContainer(params);
            document.querySelector('.chatlist-container .chatlist').append(chatContainer);
        }

        console.log(this._chatList);
    }

    init() {
        this._displayChats();
    }
}

export default ChatList;