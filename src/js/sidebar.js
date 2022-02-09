class Sidebar {
    _toggleSidebar() {
        document.querySelector('.sidebar').classList.toggle('show');
        document.querySelector('#sidebarToggle').classList.toggle("toggled");
    }

    
    init() {
        document.querySelector('#sidebarToggle').addEventListener('click', this._toggleSidebar);
        
    }
}

export default Sidebar;