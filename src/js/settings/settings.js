import SideBar from '../sidebar';

class SettingsMenu {
    openSettingsMenu() {
        let sideBar = new SideBar;
        sideBar.hideSidebar();

        document.querySelector('.settings-container').classList.add('show');
        document.querySelector('.settings-container').classList.add('showing');
        setTimeout(function() {
            document.querySelector('.settings-container').classList.remove('showing');
        }, 400);
    }

    closeSettingsMenu() {
        document.querySelector('.settings-container').classList.add('hiding');
        setTimeout(function () {
            document.querySelector('.settings-container').classList.remove('hiding');
            document.querySelector('.settings-container').classList.remove('show');
        }, 400);
    }

    init() {
        document.querySelector('#sidebarOpenSettings').addEventListener('click', this.openSettingsMenu);
        document.querySelector('.settings-container').addEventListener('click', this.closeSettingsMenu);
    }
}

export default SettingsMenu;