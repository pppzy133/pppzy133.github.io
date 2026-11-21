const filterBtns = document.querySelectorAll('.filter-nav button');
const sections = document.querySelectorAll('.work-category');

console.log('找到按钮数量：', filterBtns.length);
console.log('找到板块数量：', sections.length);

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterVal = btn.dataset.filter.trim();
    console.log('点击，筛选值：', filterVal);

    sections.forEach(sec => {
      const cat = sec.dataset.category.trim();
      if (filterVal === 'all' || cat === filterVal) {
        sec.style.display = 'block';
      } else {
        sec.style.display = 'none';
      }
    });
  });
});
