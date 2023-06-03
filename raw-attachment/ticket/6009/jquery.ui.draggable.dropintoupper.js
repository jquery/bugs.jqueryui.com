/**
 * To make draggable drop into droppable that has the biggest zIndex.
 * Usually drop works on the first droppable element thet receives event bubbling.
 * To use this plugin add to draggable
 * options
 *     dropIntoUpper: true
 */
$.ui.plugin.add("draggable", "dropIntoUpper", {
    start: function(event, ui)
    {
        // get scope of draggable element if it's not set it equals "default"
        var o = $(this).data("draggable").options
        
        if (
            !o || !o.scope ||
            !$.ui.ddmanager || 
            !$.ui.ddmanager.droppables ||
            !$.ui.ddmanager.droppables[o.scope]
        )
        {
            return
        }
        
        $.ui.ddmanager.droppables[o.scope].sort(function(a, b){

            var zA = parseInt(a.element.css("zIndex"), 10) || 0,
                zB = parseInt(b.element.css("zIndex"), 10) || 0

            if ( zA >= zB )
            {
                return -1
            }
            else if ( zA < zB ) 
            {
                return 1
            }
        })
    }
})