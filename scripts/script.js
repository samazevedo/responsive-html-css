const mobileNavEl = document.getElementById('mobile-nav')
const btnOpen = document.getElementById('btn-open')
const btnClose = document.getElementById('btn-close')
function toggleMobileNav() {
    if (mobileNavEl.classList.contains('mobile-header-open')) {
        mobileNavEl.classList.remove('mobile-header-open')
    } else {
        mobileNavEl.classList.add('mobile-header-open')
    }
}
btnOpen.addEventListener('click', function (e) {
    e.preventDefault()
    toggleMobileNav()
})
btnClose.addEventListener('click', function (e) {
    e.preventDefault()
    toggleMobileNav()
})
