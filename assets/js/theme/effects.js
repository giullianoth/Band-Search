const animationTime = 500;

export default function effects() {
    return {
        fadeIn: function (element, elementDisplay = "block") {

            let elementOpacity = 0;
        
            element.style.display = elementDisplay;
            element.style.opacity = elementOpacity;
        
            let fade = setInterval(function() {
        
                element.style.opacity = elementOpacity / 100;
        
                if (elementOpacity >= 100) {
                    clearInterval(fade);
                }
        
                elementOpacity++;
            }, animationTime / 100);
        },

        fadeOut: function (element) {

            let elementOpacity = 100;
            element.style.opacity = elementOpacity / 100;
        
            let fade = setInterval(function() {
        
                element.style.opacity = elementOpacity / 100;
        
                if (elementOpacity === 0) {
                    clearInterval(fade);
                    element.style.display = "none";
                }
        
                elementOpacity--;
            }, animationTime / 100);
        }
    }
}