class ChatHeader {
    _toggleInChatMenu() {
        let menu = document.querySelector('#inChatMenu');

        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    }

    _hideInChatMenu() {
        document.querySelector('#inChatMenu').classList.remove('show');
    }

    init() {
        document.body.addEventListener('click', () => {
            this._hideInChatMenu();
        });

        document.querySelector('#inChatMenuButton').addEventListener('click', (e) => {
            e.stopPropagation();
            this._toggleInChatMenu();
        });

        document.querySelector('#inChatMenu').addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    
}

module.exports = ChatHeader;