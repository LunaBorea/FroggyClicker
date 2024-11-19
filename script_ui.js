function sidebarButton(param) {
    // Gets all sidebar contents
    const sidebars = document.querySelectorAll('.sidebar-content > div')
    const btns = document.querySelectorAll('.sidebar-header > img')

    // Loops through each sidebar
    sidebars.forEach((sidebar) => {
        // Checks if id is correct
        if (sidebar.id === `sidebar-${param}`) {
            // Displays content if not visible
            sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : sidebar.style.display
        } else {
            // Hides unwanted content
            sidebar.style.display = 'none'
        }
    })

    btns.forEach((btn) => {
        // Checks if id is correct
        if (btn.id === `sidebarimg-${param}`) {
            // Get the current background color from computed styles
            const currentBgColor = window.getComputedStyle(btn).backgroundColor;
            
            // Change background color if true
            if (currentBgColor === ('rgb(49, 73, 34)' || '#314922')) {
                btn.style.backgroundColor = '#5F8547';  // Change to #5F8547
            }
        } else {
            // Reset background color of other buttons
            btn.style.backgroundColor = '#314922';
        }
    })
}