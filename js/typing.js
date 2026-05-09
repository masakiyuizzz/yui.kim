const TypingModule = (function() {
    let typingText = null;
    let charIndex = 0;
    let isRunning = false;
    
    function init(elementId) {
        typingText = document.getElementById(elementId);
        
        if (!typingText) {
            console.error('TypingModule: 找不到打字元素');
            return false;
        }
        
        return true;
    }
    
    function start() {
        if (!typingText || isRunning) return;
        isRunning = true;
        
        setTimeout(function() {
            typeText();
        }, CONFIG.typing.startDelay);
    }
    
    function typeText() {
        if (!typingText) return;
        
        const text = CONFIG.typing.text;
        const speed = CONFIG.typing.speed;
        
        if (charIndex < text.length) {
            typingText.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, speed);
        } else {
            setTimeout(resetText, CONFIG.typing.pauseDuration);
        }
    }
    
    function resetText() {
        if (!typingText) return;
        
        typingText.textContent = '';
        charIndex = 0;
        setTimeout(typeText, CONFIG.typing.speed);
    }
    
    function stop() {
        isRunning = false;
    }
    
    return {
        init: init,
        start: start,
        stop: stop
    };
})();
