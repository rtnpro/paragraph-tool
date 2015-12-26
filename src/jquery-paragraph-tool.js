(function ($) {
    $.fn.paragraphtool = function( options ) {
        var _this = this,
            defaults = {
                menuSelector: '.paragraph-tool-menu',
                hoverClass: 'para-hover'
            },
            _options = $.extend({}, defaults, options),
            $menu = $(_options.menuSelector);

        return {
            enable: function() {
                _this.mouseenter(function(e) {
                    var $target = $(e.target),
                        offset = $target.offset();
                    $menu.css({
                        top: offset.top,
                        left: offset.left + $target.width()
                    }).show();
                });

                _this.mouseleave(function(e) {
                    var $target = $(e.target)
                        offset = $target.offset();
                    if (e.pageX < offset.left ||
                            e.pageX > (offset.left + $target.outerWidth())) {
                        $menu.hide();
                    }
                });
            },
            disable: function() {
                this.unbind('mouseenter mouseleave');
            }
        }
    };
}( jQuery ));
