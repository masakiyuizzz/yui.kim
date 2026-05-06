(function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const typingText = document.getElementById('typingText');
    
    const TEXT_TO_TYPE = 'yui.kim';
    const TYPE_SPEED = 150;
    const PAUSE_DURATION = 3000;
    
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < TEXT_TO_TYPE.length) {
            typingText.textContent += TEXT_TO_TYPE.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, TYPE_SPEED);
        } else {
            setTimeout(resetText, PAUSE_DURATION);
        }
    }
    
    function resetText() {
        typingText.textContent = '';
        charIndex = 0;
        setTimeout(typeText, TYPE_SPEED);
    }
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            const encodedQuery = encodeURIComponent(query);
            window.open('https://www.bing.com/search?q=' + encodedQuery, '_blank');
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    searchInput.addEventListener('input', function() {
        this.value = this.value;
    });
    
    searchInput.addEventListener('focus', function() {
        this.parentElement.classList.add('typing');
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('typing');
    });
    
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(function() {
            searchInput.focus();
        }, 100);
        
        setTimeout(typeText, 500);
    });
})();
