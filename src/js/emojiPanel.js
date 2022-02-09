class EmojiPanel {
    _createEmoji(code) {
        let button = document.createElement("button");
        button.innerHTML = `&#${code};`;
        button.className = "emoji";

        button.addEventListener("click", function () {
            let message = document.querySelector('#messageInput').value;
            message += this.innerHTML;
            document.querySelector('#messageInput').value = message;
        });

        return button;
    }

    _fillEmojiPanel() {
        for (let i = 128512; i <= 129472; i++) {
            document.querySelector('#emojiPanel').append(this._createEmoji(i));
        }
    }

    _toggleEmojiPanel() {
        document.querySelector('#emojiPanel').classList.toggle("show");
    }

    _hideEmojiPanel() {
        document.querySelector('#emojiPanel').classList.remove("show");
    }

    _showEmojiPanel() {
        document.querySelector('#emojiPanel').classList.add("show");
    }

    init() {
        this._fillEmojiPanel();
        document.querySelector('#toggleEmojiPanel').addEventListener("click", (e) => {
            e.preventDefault();
            this._toggleEmojiPanel();
        });
        document.querySelector('#messageInput').addEventListener("click", (e) => {
            this._hideEmojiPanel();
        });
    }
}

export default EmojiPanel;