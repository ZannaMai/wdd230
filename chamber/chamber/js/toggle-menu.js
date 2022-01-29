window.onload = function() {
    function toggleMenu() {
        document.getElementById('Nav').classList.toggle('open');
        document.getElementById('hamburgerMenu').classList.toggle('open');
    }
    const x = document.getElementById('hamburgerMenu');
    x.onclick = toggleMenu;
}