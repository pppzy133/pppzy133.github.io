const filterBtns = document.querySelectorAll('.filter-nav button');
const sections = document.querySelectorAll('.work-category');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterVal = btn.dataset.filter;
    sections.forEach(sec => {
      if (filterVal === 'all' || sec.dataset.category === filterVal) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });
});
