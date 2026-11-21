const filterBtns = document.querySelectorAll('.filter-nav button');
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filterVal = btn.dataset.filter;

    cards.forEach(card => {
      if (filterVal === 'all') {
        card.classList.remove('hidden');
      } else {
        card.classList.toggle('hidden', card.dataset.cat !== filterVal);
      }
    });
  });

// 默认选中全部
document.querySelector('.filter-nav button[data-filter="all"]').classList.add('active');
