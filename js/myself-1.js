// // 在页面加载完成后运行
// window.addEventListener('load', () => {
//   document.querySelectorAll('br').forEach(br => {
//     const spacer = document.createElement('span');
//     spacer.style.display = 'block';
//     spacer.style.height = '0.75em';
//     spacer.style.width = '100%';
//     spacer.style.verticalAlign = 'top';

//     br.parentNode.insertBefore(spacer, br.nextSibling);
//   });
// });

// 排除table元素
window.addEventListener('load', () => {
  // 获取页面中所有的 <br> 标签
  document.querySelectorAll('br').forEach(br => {
    // 检查 <br> 是否在 <table> 内
    const isInsideTable = br.closest('table') !== null;

    // 如果 <br> 不在 <table> 内，则应用规则
    if (!isInsideTable) {
      const spacer = document.createElement('span');
      spacer.style.display = 'block';
      spacer.style.height = '0.3em';
      spacer.style.width = '100%';
      spacer.style.verticalAlign = 'top';

      // 将占位元素插入到 <br> 后面
      br.parentNode.insertBefore(spacer, br.nextSibling);
    }
  });
});