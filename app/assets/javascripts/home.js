$(document).ready(function() {
    $('#main-menu li:first').addClass('current');
    $('#nav').onePageNav({
    begin: function() {
        //Hack so you can click other menu items after the initial click
        $('body').append('<div id="device-dummy" style="height: 1px;"></div>');
    },
    end: function() {
        $('#device-dummy').remove();
    }
});
});

