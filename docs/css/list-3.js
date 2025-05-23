const loadArticles = async () => {
  try {
    const response = await fetch('/md/mdlist.json');
    const articles = await response.json();

    const container = document.getElementById('articleContainer');
    const loader = document.getElementById('loader');

    container.innerHTML = articles.map(article => `
    <a href="view.html?file=${encodeURIComponent(article.file)}" target="_blank">
      <article class="item">
          <h2 class="title-l">${article.title}</h2>
          <p class="desc">${article.desc}</p>
      </article>
    </a>
    `).join('');

    loader.style.display = 'none';

  } catch (error) {
    console.error('加载失败:', error);
    document.getElementById('loader').innerHTML = `
      <p class="error-msg">⚠️ 加载失败</p>
    `;
  }
}
window.addEventListener('DOMContentLoaded', loadArticles); // 重新加载


//          <p class="date">${article.date}</p>

