export default function decorate(block) {
  const articles = block.querySelectorAll('li');
  const listItems = Array.from(articles).map(li => `<li>${li.textContent}</li>`).join('');
  block.innerHTML = `
    <div class="related-articles">
      <h4>Related Articles</h4>
      <ul>${listItems}</ul>
    </div>
  `;
}
