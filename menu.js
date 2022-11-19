function openMenu(){
    document.getElementById('close-menu').classList.remove('hidden');
    document.getElementById('close-menu').classList.add('show');
    document.getElementById('open-menu').classList.remove('show');
    document.getElementById('open-menu').classList.add('hidden');
    document.getElementById('hidden-nav').id = 'center-nav'
}
function closeMenu(){
    document.getElementById('open-menu').classList.remove('hidden');
    document.getElementById('open-menu').classList.add('show');
    document.getElementById('close-menu').classList.remove('show');
    document.getElementById('close-menu').classList.add('hidden');
    document.getElementById('center-nav').id = 'hidden-nav'
}