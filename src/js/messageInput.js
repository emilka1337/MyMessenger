import EmojiPanel from "./emojiPanel";

class MessageInput {
    _sendMessage() {
        let emojiPanel = new EmojiPanel();
        emojiPanel._hideEmojiPanel();

        let messageText = document.querySelector('#messageInput').value;
        console.log(messageText);
        document.querySelector('#messageInput').value = "";

        // Дописать функцию отправки сообщений
    }

    init() {
        document.querySelector('#messageInputForm').addEventListener("submit", (e) => {
            e.preventDefault();
            this._sendMessage();
        });
    }
}

export default MessageInput;