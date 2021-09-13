const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
;
const page = document.querySelector('.page');


const body = document.body;

burger.addEventListener('click', event => {
  
  if( body.classList.contains('blocked') ) {  
    closeSidebar();
} else {
    showSidebar();
}
  
});


function showSidebar() {
  const mask = document.createElement('div');
  mask.classList.add('page__mask')
  page.appendChild(mask);
  burger.classList.add('cross');
  body.classList.add('blocked')
  sidebar.classList.add('active')
  mask.addEventListener('click', closeSidebar);

}

function closeSidebar() {
  body.classList.remove('blocked');
  document.querySelector('.page__mask').remove();
  burger.classList.remove('cross');
  body.classList.remove('active');
  sidebar.classList.remove('active');

}
