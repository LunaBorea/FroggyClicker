function sidebarButton(id) {
    // Gets all sidebar contents
    const sidebars = document.querySelectorAll('.sidebar-content > div')

    // Loops through each sidebar
    sidebars.forEach((sidebar) => {
        // Checks if sidebar id is correct
        if (sidebar.id === `sidebar-${id}`) {
            // Displays content if not visible
            sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : sidebar.style.display
        } else {
            // Hides unwanted content
            sidebar.style.display = 'none'
        }
    })
}

