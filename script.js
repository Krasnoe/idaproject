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

  goodsItem.forEach(item => {
    const trash = document.createElement('img');
    trash.className = 'trash';
    trash.src = 'img/trash.svg';

    item.addEventListener('mouseover', () => {
      item.appendChild(trash);
    });

    item.addEventListener('mouseout', () => {
      item.removeChild(trash);
    });
  });
};
addTrash();
