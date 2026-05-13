document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('[data-blog-list]');
  if (!listContainer) return;

  const cards = Array.from(listContainer.querySelectorAll('.blog-card'));
  if (!cards.length) return;

  const searchInput = document.getElementById('blog-search');
  const sortSelect = document.getElementById('blog-sort');
  const chipsContainer = document.getElementById('blog-category-chips');
  const countEl = document.getElementById('blog-result-count');

  let activeCategory = 'all';

  const normalize = (value) => (value || '').toString().trim().toLowerCase();

  const setActiveChip = (chip) => {
    if (!chipsContainer) return;
    chipsContainer.querySelectorAll('.blog-chip').forEach((node) => node.classList.remove('active'));
    chip.classList.add('active');
  };

  const matchesCategory = (card) => {
    if (activeCategory === 'all') return true;
    const categories = normalize(card.dataset.categories).split(',').map((s) => s.trim()).filter(Boolean);
    return categories.includes(activeCategory);
  };

  const matchesSearch = (card) => {
    const query = normalize(searchInput ? searchInput.value : '');
    if (!query) return true;

    const haystack = [
      card.dataset.title,
      card.dataset.summary,
      card.dataset.categories,
      card.dataset.tags
    ].map(normalize).join(' ');

    return haystack.includes(query);
  };

  const sortCards = (visibleCards) => {
    const mode = sortSelect ? sortSelect.value : 'newest';

    if (mode === 'oldest') {
      visibleCards.sort((a, b) => Number(a.dataset.date) - Number(b.dataset.date));
      return;
    }

    if (mode === 'title') {
      visibleCards.sort((a, b) => normalize(a.dataset.title).localeCompare(normalize(b.dataset.title)));
      return;
    }

    visibleCards.sort((a, b) => Number(b.dataset.date) - Number(a.dataset.date));
  };

  const render = () => {
    const visible = cards.filter((card) => matchesCategory(card) && matchesSearch(card));
    sortCards(visible);

    cards.forEach((card) => {
      card.style.display = 'none';
    });

    visible.forEach((card) => {
      card.style.display = '';
      listContainer.appendChild(card);
    });

    if (countEl) {
      countEl.textContent = `${visible.length} post${visible.length === 1 ? '' : 's'} shown`;
    }
  };

  if (chipsContainer) {
    chipsContainer.addEventListener('click', (event) => {
      const chip = event.target.closest('.blog-chip');
      if (!chip) return;

      activeCategory = normalize(chip.dataset.cat || 'all');
      setActiveChip(chip);
      render();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', render);
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', render);
  }

  render();
});
