function onLoad() {
        document.addEventListener("deviceready", onDeviceReady, false);
    }

    // device APIs are available
    //
    function onDeviceReady() {
        // Now safe to use device APIs
	    $('.flicker-example').flickerplate(

		{
         arrows: true,
        arrows_constraint: false,
        auto_flick: true,
        auto_flick_delay: 10,
        block_text: true,
        dot_alignment: 'center',
        dot_navigation: true,
        flick_animation: 'transition-slide',
        flick_position: 1,
        theme: 'light'       });
    }