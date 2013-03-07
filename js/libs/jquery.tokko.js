(function ($) {
    function tokko($parent, opts) {
        var $headers = $(':header:not(h1)').map(function() {
            var $e = $(this);
            var depth = parseInt($e.prop('tagName').slice(1), 10);

            var text = $e.text();
            var id = idfy(text);
            var $a = $('<a>', {'class': opts.anchor['class'], href: '#' + id}).
                html(opts.anchor.content).appendTo($e);

            initializeAnimation($a);

            // TODO: make sure ids are unique!
            $e.attr('id', id);
            $e.attr('name', id);

            return {
                text: text,
                id: id,
                depth: parseInt($e.prop('tagName').slice(1), 10)
            };
        });
        var prevDepth = $headers[0].depth;
        var $parents = [$parent];
        var $prev;

        $headers.each(function(i, v) {
            if(v.depth > prevDepth) $parents.push($('<ul>').appendTo($prev));
            else if(v.depth < prevDepth) $parents.pop();

            $prev = $li(v.text, v.id).appendTo(last($parents));

            prevDepth = v.depth;
        });

        initializeAnimation($parent);

        function initializeAnimation($e) {
            if(window.Modernizr && Modernizr.touch) return;

            $e.css({
                'opacity': opts.minAlpha,
                '-webkit-transition': 'opacity 0.5s ' + opts.delay + 's linear',
                '-moz-transition': 'opacity 0.5s ' + opts.delay + 's linear',
                '-ms-transition': 'opacity 0.5s ' + opts.delay + 's linear',
                '-o-transition': 'opacity 0.5s ' + opts.delay + 's linear',
                'transition': 'opacity 0.5s ' + opts.delay + 's linear'
            });

            $e.on('mouseenter', setOpacity.bind(undefined, $e, opts.maxAlpha)).
                on('mouseleave', setOpacity.bind(undefined, $e, opts.minAlpha));
        }
    }

    function setOpacity($e, val) {
        $e.css('opacity', val);
    }

    function $li(val, id) {
        var $e = $('<li>');
        $('<a>', {href: '#' + id}).text(val).appendTo($e);

        return $e;
    }

    function idfy(val) {
        return val.toLowerCase().replace(/[ \-]+/g, '_').replace(/\.+/g, '');
    }

    function last(arr) {
        return arr[arr.length - 1];
    }

    $.fn.tokko = function(options) {
        if(!this.length) return console.error('No element provided to tokko!');

        return this.each(function() {
            tokko($(this), opts(options));
        });

        function opts(o) {
            return $.extend(true, {
                delay: 0.5,
                minAlpha: 0.4,
                maxAlpha: 1.0,
                anchor: {
                    'class': 'anchor',
                    content: '&para;'
                }
            }, o);
        }
    };
})(jQuery);
