(function() {
    function init() {
        const searchReady = SearchModule.init('searchInput', 'searchBtn');
        const typingReady = TypingModule.init('typingText');
        const cardsReady = CardsModule.render('cardsContainer');
        
        if (!searchReady || !typingReady || !cardsReady) {
            console.error('初始化失败，请检查元素 ID');
            return;
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                SearchModule.focus();
            }, CONFIG.focus.delay);
            
            TypingModule.start();
        });
    }
    
    init();
})();
