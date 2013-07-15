$(function(){
    DatePicker();
    checkbox();
    Popup();
    Carousel();
});
function checkbox(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_minimal-yellow',
        radioClass: 'iradio_minimal-yellow'
    });
}
function DatePicker(){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('#datepicker').datepicker({
        showOn: 'both',
        buttonImageOnly: true,
        showOtherMonths: true,
        selectOtherMonths: true
    });
}


function Carousel(){
    $("#prev").click(function(e){
        move();
        e.preventDefault();
    });

    $("#next").click(function(e){
        move(true);
        e.preventDefault();
    });

    function move(gonext){
        var prev = $(".jslink").eq(0),
            mid = $(".jslink").eq(1),
            next = $(".jslink").eq(2),
            blocks = $(".cnt__info-block-inner"),
            linktext;

        if (gonext){
            linktext = next.clone();

            next.text(prev.text());
            next.attr("data-block", prev.attr("data-block"));

            prev.text(mid.text());
            prev.attr("data-block", mid.attr("data-block"));

            mid.text(linktext.text());
            mid.attr("data-block", linktext.attr("data-block"));
        }
        else {
            linktext = prev.clone();

            prev.text(next.text());
            prev.attr("data-block", next.attr("data-block"));

            next.text(mid.text());
            next.attr("data-block", mid.attr("data-block"));

            mid.text(linktext.text());
            mid.attr("data-block", linktext.attr("data-block"));
        }
        blocks.hide();
        blocks.eq(mid.attr("data-block") -1).fadeIn(300);
    }

}
function Popup(){
        $(".choose-foto").click(function(e) {
            initPopup();
            $(".popup").show();
            $(".popup").css("top", $(window).scrollTop());
            console.log($(window).scrollTop());

            e.preventDefault();
        });
        $(".popup .ico_type_close").click(function(e) {
            $(".popup").hide();
            e.preventDefault();
        });

        $("#choose").click(function(e) {
            $(".popup__calendar, .popup__box-bottom-calendar").show();
            $(".popup__box-block,.popup__box-bottom-look").hide();
            e.preventDefault();
        });

        $("#back").click(function(e) {
            initPopup();
            e.preventDefault();
        });
}

function initPopup(){
    $(".popup__calendar, .popup__box-bottom-calendar").hide();
    $(".popup__box-block,.popup__box-bottom-look").show();
}

function InitIE(){
	if (($.browser.msie) && (/MSIE (5\.5|6).+Win/.test(navigator.userAgent))) {

	}
}

