$.fn.continuousClick = function(clickTimes, callback) {
    var $this = $(this);
    $this.data('clickTimes', clickTimes);
    $this.data('cnt', 0);
    $this.data('timer', 0);
    $this.data('callback', callback);
    
    /* timer execute function
     * reset the counter after .5s
     */
    function timerExec () {
        console.warn('timer start...');
        $this.data('cnt', 0);
        clearTimer();
    }

    /* clear timer */
    function clearTimer() {
        console.warn('clear timer...');
        window.clearTimeout($this.data('timer'));
    }

    /* incr counter when touchstart */
    $this.on('touchstart', function() {
        var cnt = $this.data('cnt');
        console.warn('click... cnt:' + cnt);
        if (cnt >= clickTimes - 1) {
            $this.data('callback')();
            $this.data('cnt', 0);
            return;
        }
        $this.data('cnt', cnt + 1);
        clearTimer();
        $this.data('timer', window.setTimeout(timerExec, 500));
    });
};
