fetch('md/mdlist.json').then(res => res.json()).then(list => {
  const c = document.getElementById('list');
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <a href="view.html?file=${encodeURIComponent(item.file)}" target="_blank">
      <div class="title-l">${item.title}</div>
      <div class="desc">${item.desc || ''}</div></a>
    `;
    c.appendChild(div);
  });
});