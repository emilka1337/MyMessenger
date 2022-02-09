class DarkMode {
    _toggleDarkMode() {
        document.querySelector('#sidebarDarkModeToggler .switch-btn').classList.toggle("switch-on");
    }


    init() {
        document.querySelector('#sidebarDarkModeToggler').addEventListener('click', this._toggleDarkMode);
    }
}

export default DarkMode;