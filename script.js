window.addEventListener('load', function() {
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('header');
    const Content = document.getElementById('content');
    
    const sidebarWidth = sidebar.offsetWidth;
    console.log(Content, sidebarWidth, 23)
    Content.style.width = `calc(100vw - ${sidebarWidth}px)`;
    header.style.width = `calc(100vw - ${sidebarWidth}px)`;
    // Content.style.width = `calc(98.682vw - ${sidebarWidth}px)`;
    // header.style.width = `calc(98.682vw - ${sidebarWidth}px)`;
});


