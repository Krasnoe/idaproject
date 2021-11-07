'use srtict';

const blockAdd = () => {

  const addBlock = document.querySelector('.add-block');

  const scroll = () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 80) {
      addBlock.classList.add('add-block-active');
    }
    if (scrollY <= 55) {
      addBlock.classList.remove('add-block-active');
    }
  };
  document.addEventListener('scroll', () => {
    scroll();
  });
};
blockAdd('.add-block');

const addTrash = () => {

  const goodsItem = document.querySelectorAll('.goods-item');

  const trash = document.createElement('img');
  trash.className = 'trash';
  trash.src = 'img/trash.svg';

  goodsItem.forEach(item => {
    item.addEventListener('mouseover', () => {
      item.appendChild(trash);
    });
  });
  document.addEventListener('mouseover', event => {
    if (!event.target.closest('.goods-item') && trash) {
      trash.remove();
    }
  });
};
addTrash();
