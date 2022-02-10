import SideBar from '../sidebar';

class SettingsMenu {
    openSettingsMenu() {
        let sideBar = new SideBar;
        sideBar.hideSidebar();

        document.querySelector('.settings-container').classList.add("show");
    }

    closeSettingsMenu() {
        document.querySelector('.settings-container').classList.remove("show");
        document.querySelector('.settings').classList.add("hiding");
        setTimeout(function() {
            document.querySelector('.settings').classList.remove("hiding");
        }, 1000);
    }

    init() {
        document.querySelector('#sidebarOpenSettings').addEventListener('click', this.openSettingsMenu);
        document.querySelector('.settings-container').addEventListener('click', this.closeSettingsMenu);
        document.querySelector('.settings').addEventListener('click', (e) => e.stopPropagation());
    }
}

export default SettingsMenu;