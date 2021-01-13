//menu
function openMenu() {
    const $mobileMenuButton = document.querySelector('.burger'),
          $mobileMenu = document.querySelector('.header-mobile__menu')

    $mobileMenuButton.addEventListener('click', () => {
        $mobileMenu.classList.toggle('mobile-menu__active')
    })
}

//задание динамческого padding для callback'а в меню категорий
function addPaddingForCategoryCallback() {
    const $categoryCallback = document.querySelector('.category-callback')
    const paddingFromRightSide = (document.querySelector('.header').clientWidth - document.querySelector('.container').clientWidth) / 2

    $categoryCallback.style.paddingRight = paddingFromRightSide + 'px'
}





openMenu()
addPaddingForCategoryCallback()
