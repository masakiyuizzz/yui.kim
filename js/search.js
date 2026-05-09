const SearchModule = (function() {
    let searchInput = null;
    let searchBtn = null;
    
    function init(inputId, btnId) {
        searchInput = document.getElementById(inputId);
        searchBtn = document.getElementById(btnId);
        
        if (!searchInput || !searchBtn) {
            console.error('SearchModule: 找不到搜索元素');
            return false;
        }
        
        bindEvents();
        return true;
    }
    
    function bindEvents() {
        searchBtn.addEventListener('click', performSearch);
        
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('typing');
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('typing');
        });
    }
    
    function performSearch() {
        if (!searchInput) return;
        
        const query = searchInput.value.trim();
        if (query) {
            const engine = CONFIG.search.engines[CONFIG.search.engine];
            const encodedQuery = encodeURIComponent(query);
            window.open(engine.url + encodedQuery, '_blank');
        }
    }
    
    function focus() {
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    return {
        init: init,
        focus: focus,
        performSearch: performSearch
    };
})();
