class Sidebar {
    constructor() {
        this.sidebarContainer = document.querySelector('.sidebar-container');
        this.sidebar = document.querySelector('.sidebar');
        this.sidebarToggler = document.querySelector('#sidebarToggler')
    }
    
    toggleSidebar() {
        this.sidebar.classList.toggle('show');
        this.sidebarToggler.classList.toggle("toggled");
        this.sidebarContainer.classList.toggle("show");
    }

    hideSidebar() {
        this.sidebar.classList.remove('show');
        this.sidebarToggler.classList.remove("toggled");
        this.sidebarContainer.classList.remove("show");
    }
    
    openSidebar() {
        this.sidebar.classList.add('show');
        this.sidebarToggler.classList.add("toggled");
        this.sidebarContainer.classList.add("show");
    }

    init() {
        this.sidebar.addEventListener("click", (e) => e.stopPropagation());
        this.sidebarToggler.addEventListener('click', () => this.toggleSidebar());
        this.sidebarContainer.addEventListener("click", () => this.hideSidebar());
    }
}

export default Sidebar;