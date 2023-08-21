window.addEventListener('resize', function () {
    const headerlogo = document.querySelector('.header-logo');
    const buttons = header.querySelectorAll('.header-button');

    const distanceFromCorners = 10; // Adjust this value as needed

    const screenWidth = window.innerWidth;
    const buttonWidth = buttons[0].offsetWidth;

    const rightMargin = (screenWidth / 2) - (buttonWidth + distanceFromCorners);

    buttons[0].style.marginLeft = leftMargin + 'px';
    buttons[1].style.marginRight = rightMargin + 'px';
    headerlogo.style.paddingRight = 500 + 'px';
});