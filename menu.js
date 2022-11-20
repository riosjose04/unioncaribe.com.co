function openMenu(){
    document.getElementById('hidden-nav').id = 'center-nav'
    document.getElementById('open-menu').id = 'opened-menu'
    document.getElementById('closed-menu').id = 'close-menu'
}
function closeMenu(){
    document.getElementById('center-nav').id = 'hidden-nav'
    document.getElementById('opened-menu').id = 'open-menu'
    document.getElementById('close-menu').id = 'closed-menu'
}