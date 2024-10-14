document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('blur');

    // Update aria-expanded attribute
    const isExpanded = sidebar.classList.contains('active');
    this.setAttribute('aria-expanded', isExpanded);
});
