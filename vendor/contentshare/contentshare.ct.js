/*
 * @build  : 24 Aug, 2013
 * @author : Ram swaroop
 * @company: Compzets.com
Modified by Casey to getContent() before tooltip is shown.
 */
(function($){
    $.fn.contentshare = function(options) {        
        // fetch options
        var opts = $.extend({},$.fn.contentshare.defaults,options);
        
        $.extend($.fn.contentshare,{
            
            init : function(shareable) {
                $.fn.contentshare.defaults.shareable = shareable;
            },
            getContent : function() {
                var content="";
                //disabled var to enable Edit>Copy
                //var selection = this.getSelection();
                for(var i=0;i<opts.shareLinks.length;i++){
                    content+='<a href="'+opts.shareLinks[i]+this.getSelection()+'" '+((opts.newTab)?"target=\"_blank\"":"")+'><i class=\"fa '+opts.shareIcons[i]+'" '+((i!=0)?"style=\"margin-left:5px\"":"")+'></i></a>';
                }
                return content;
            },
            getSelection : function(option) {
                if(window.getSelection){
                    return (option=='string')?encodeURIComponent($.trim(window.getSelection().getRangeAt(0).toString())):window.getSelection().getRangeAt(0);
                }
                else if(document.selection){
                    return (option=='string')?encodeURIComponent($.trim(document.selection.createRange().text)):document.selection.createRange();
                }
            },                
            showTooltip : function() {
                this.clear();
                if(this.getSelection('string').length < opts.minLength)
                    return;
                var content = this.getContent();
                this.preloadShareIcons(opts.shareIcons);
                var range = this.getSelection();
                var newNode = document.createElement("span");
                $(newNode).addClass('mark');
                range.surroundContents(newNode);
                $('span.mark').addClass(opts.className);
                $('.'+opts.className).tooltipster({trigger:'custom',interactive:true,content:content,animation:opts.animation});
                $('.'+opts.className).tooltipster('show');
            },
            preloadShareIcons : function(array) {
                for (var i = 0; i < array.length; i++) {
                    var img = new Image();
                    img.src = array[i];
                }
            },
            clear : function() {
                $('.'+opts.className).tooltipster('hide');
                $('span.mark').contents().unwrap();
                $('span.mark').remove();
            }
        });        
        
        // initialize the awesome plugin
        $.fn.contentshare.init(this);
    };
    
    // default options
    $.fn.contentshare.defaults = {
        shareable  : {},
        shareIcons : ["images/fb.png","images/tw.png"],
        shareLinks : ["http://www.facebook.com/sharer.php?s=100&p[url]="+document.URL+"&p[title]="+document.title+"&p[summary]={{text}}" , "http://twitter.com/intent/tweet?text={{text}}"],
        minLength  : 1,
        newTab     : true,
        className  : "contentshare",
        animation  : "grow"
    };

}(jQuery));