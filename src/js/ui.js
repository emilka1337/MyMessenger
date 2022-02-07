class UI {
    //#region In Chat Menu
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

    _addInChatMenuListeners() {
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
    //#endregion

    //#region Chatlist
    
    //#endregion

    addAllEventListeners() {
        this._addInChatMenuListeners();
    }
}

export default UI;