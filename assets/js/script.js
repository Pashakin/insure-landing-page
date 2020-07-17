document.getElementById('btn-toggle').addEventListener('click', function() {
  // Implement toggle button for mobile version
  var img = document.querySelector('#btn-toggle img').src;
  if (img.indexOf('icon-hamburger.svg') !== -1) {
    document.querySelector('#btn-toggle img').src = 'assets/images/icon-close.svg';
  } else {
    document.querySelector('#btn-toggle img').src = 'assets/images/icon-hamburger.svg';
  }

  document.querySelector('.header-nav').classList.toggle('desktop-screen');
  document.querySelector('.header-nav').classList.toggle('mobile-screen');
});
