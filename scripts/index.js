function toggleList() {
    const listLinks = document.getElementById('list_links'); // corrigido
    const menu = document.querySelector('.menu');
    const links = document.querySelector('.links');

    menu.classList.toggle('active');
    links.classList.toggle('active');
    listLinks.classList.toggle('active');
}
