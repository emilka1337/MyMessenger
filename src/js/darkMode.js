class DarkMode {
    _toggleDarkMode() {
        document.querySelector('#sidebarDarkModeToggler .switch-btn').classList.toggle("switch-on");
    }


    init() {
        document.querySelector('#sidebarDarkModeToggler').addEventListener('click', this._toggleDarkMode);
        if (window.matchMedia('(prefers-color-scheme: dark)')) {
            // проверка на включенную темную тему
        }
    }
}

export default DarkMode;