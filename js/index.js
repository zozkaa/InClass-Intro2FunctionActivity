window.addEventListener('load', function(){
    function updateInnerHTML(selector, newValue){
        document.querySelector(selector).innerHTML = newValue;
    }
    updateInnerHTML('h2.intro', 'Something New')
    
    function strong(value){
        return '<strong>' + value + '</strong>';
    }
    
    var importantText;
    
    importantText = document.querySelector('p.important').innerHTML;
    importantText = strong(importantText);
    updateInnerHTML('p.important', importantText);
})
