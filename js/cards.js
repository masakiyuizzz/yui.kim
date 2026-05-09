const CardsModule = (function() {
    function createCard(card) {
        const cardEl = document.createElement('a');
        cardEl.href = card.url;
        cardEl.className = 'card';
        cardEl.target = '_blank';
        cardEl.setAttribute('aria-label', `访问 ${card.title}`);
        
        cardEl.innerHTML = `
            <div class="card-header">
                <span class="card-icon">
                    <img src="${card.icon}" alt="${card.iconAlt}" width="20" height="20">
                </span>
                <h3 class="card-title">${escapeHtml(card.title)}</h3>
            </div>
            <p class="card-description">${escapeHtml(card.description)}</p>
            <div class="card-footer">
                <span class="card-link">访问 &rarr;</span>
            </div>
        `;
        
        return cardEl;
    }
    
    function createSection(sectionKey, sectionData) {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'cards-section';
        sectionEl.id = `section-${sectionKey}`;
        
        const titleEl = document.createElement('h2');
        titleEl.className = 'section-title';
        titleEl.innerHTML = `
            <span class="section-prefix"># </span>
            ${escapeHtml(sectionData.title)}
        `;
        
        const gridEl = document.createElement('div');
        gridEl.className = 'cards-grid';
        
        sectionData.cards.forEach(card => {
            gridEl.appendChild(createCard(card));
        });
        
        sectionEl.appendChild(titleEl);
        sectionEl.appendChild(gridEl);
        
        return sectionEl;
    }
    
    function render(containerId) {
        const container = document.getElementById(containerId);
        
        if (!container) {
            console.error('CardsModule: 找不到容器元素');
            return false;
        }
        
        container.innerHTML = '';
        
        Object.keys(CARDS_DATA).forEach(key => {
            const section = createSection(key, CARDS_DATA[key]);
            container.appendChild(section);
        });
        
        return true;
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    return {
        render: render,
        createCard: createCard,
        createSection: createSection
    };
})();
