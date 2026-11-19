const tabs = document.querySelectorAll('.filter-tabs button');
const cards = document.querySelectorAll('.card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 清除选中
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filterVal = tab.dataset.filter;

    cards.forEach(card => {
      const cat = card.dataset.cat;
      if (filterVal === 'all' || filterVal === cat) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});
