var HexColor;
var Color1;
var Color2;

function componentToHex(c) {
    var hex = Number(c).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function rgbToHex(r, g, b) {
    var hex = Number(r)
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function ColorConverter(r, g, b) {
    red = r;
    green = g;
    blue = b;
    return rgbToHex(red, green, blue); // #0033ff
}
$(document).on("change", "#on", function(e) {
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                msg = "c:on:" + $(this).val()
                $.post("/chandelier/" + msg)
            }
        })
    }),
    $(document).on("change", "#off", function() {
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                msg = "c:off:" + $(this).val()
                $.post("/chandelier/" + msg)
            }
        })
    }),
    $(document).on("slidestop", "#BC", function(e) {
        alert($("#BC").val());
        Brightness = $("#BC").val()
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                Light = $(this).val()
                msg = "c:set:" + Light + ":" + Brightness
                $.post("/chandelier/" + msg)
            }
        })
    }),
    $(document).on("slidestop", "#RC, #GC, #BlC", function(e) {
        red = $("#RC").val();
        green = $("#GC").val();
        blue = $("#BlC").val();
        Color1 = red + ":" + green + ":" + blue;
        console.log(Color1);
        HexColor = ColorConverter(red, green, blue);
        $("#ColorButton").parent().css('background-color', HexColor);

    }),
    $(document).on("slidestop", "#Theater1RC, #Theater1GC, #Theater1BlC", function(e) {
        red = $("#Theater1RC").val();
        green = $("#Theater1GC").val();
        blue = $("#Theater1BlC").val();
        HexColor = ColorConverter(red, green, blue);
        $("#Theater1Color a").css('background-color', HexColor);
        Color1 = red + ":" + green + ":" + blue;
    }),
    $(document).on("slidestop", "#Theater2RC, #Theater2GC, #Theater2BlC", function(e) {
        red = $("#Theater2RC").val();
        green = $("#Theater2GC").val();
        blue = $("#Theater2BlC").val();
        HexColor = ColorConverter(red, green, blue);
        Color2 = red + ":" + green + ":" + blue;
        $("#Theater2Color a").css('background-color', HexColor);
    }),
    $(document).on("slidestop", "#Fade1RC, #Fade1GC, #Fade1BlC", function(e) {
        red = $("#Fade1RC").val();
        green = $("#Fade1GC").val();
        blue = $("#Fade1BlC").val();
        HexColor = ColorConverter(red, green, blue);
        Color1 = red + ":" + green + ":" + blue;
        $("#Fade1Color a").css('background-color', HexColor);
    }),
    $(document).on("slidestop", "#Fade2RC, #Fade2GC, #Fade2BlC", function(e) {
        red = $("#Fade2RC").val();
        green = $("#Fade2GC").val();
        blue = $("#Fade2BlC").val();
        HexColor = ColorConverter(red, green, blue);
        Color2 = red + ":" + green + ":" + blue;
        $("#Fade2Color a").css('background-color', HexColor);
    }),
    $(document).on("click", "#ColorButton", function(e) {
        console.log("geood day");
        console.log(Color1);
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                Light = $(this).val();
                msg = "a:set:" + Light + ":" + Color1;
                console.log(msg);
                $.post("/chandelier/" + msg);
            }
        })
    }),
    $(document).on("click", "#TheaterChase", function(e) {
        console.log("geood day");
        console.log(Color1);
        console.log(Color2);
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                Light = $(this).val();
                msg = "a:tc:" + Light + ":" + Color1 + ":" + Color2;
                console.log(msg);
                $.post("/chandelier/" + msg);
            }
        })
    }),
    $(document).on("click", "#ColorFade", function(e) {
        console.log("geood day");
        console.log(Color1);
        console.log(Color2);
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                Light = $(this).val();
                msg = "a:fd:" + Light + ":" + Color1 + ":" + Color2;
                console.log(msg);
                $.post("/chandelier/" + msg);
            }
        })
    }),
    $(document).on("click", "#RainbowChase", function(e) {
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                Light = $(this).val();
                msg = "a:rbc" + Light + ":";
                console.log(msg);
                $.post("/chandelier/" + msg);
            }
        })
    }),
    $(document).on("change", "#RightSwitch", function(e) {
        console.log($(this).prop("checked"));
        $.post('/bedroomlight/right')
    })
$(document).on("change", "#LeftSwitch", function(e) {
    console.log($(this).prop("checked"));
    $.post('/bedroomlight/left')
});
$(document).on("click", "#AlarmTime", function(e) {
    hour = parseInt($("#Hour").val());
    minute = $("#Minute").val();
    time = $("#AmPm").prop("checked");
    if ((hour < 0 || hour > 23) || (minute < 0 || minute > 59)) {
        if (hour < 0 || hour > 23) {
            alert('hours must be between 0 and 23');
        } else {
            alert('minutes must be between 0 and 59');
        }
    } else {
        msg = 'Set,' + hour + ',' + minute;
        console.log(msg);
        $.post('/AlarmClock/' + msg);
    }
});
$(document).on("click", "#RadioOn", function(e) {
    msg = 'Play';
    $.post('/AlarmClock/' + msg);
});
$(document).on("click", "#RadioNext", function(e) {
    msg = 'Next';
    $.post('/AlarmClock/' + msg);
});
$(document).on("click", "#RadioPrev", function(e) {
    msg = 'Prev';
    $.post('/AlarmClock/' + msg);
});
$('#ScheduleSubmit').click(function() {
    alert('Hello Paul');
    var status = $('input[type="checkbox"]').filter('.custom').each(function() {
        if ($(this).is(':checked')) {
            weekday = $(this).val();
            alert(weekday);
        }
    });
    var status = $('input[type="radio"]').filter('.Rooms').each(function() {
        if ($(this).is(':checked')) {
            room = $(this).val();
            alert(room);
        }
    });
    var status = $('input[type="radio"]').filter('.OnOffControl').each(function() {
        if ($(this).is(':checked')) {
            OnOff = $(this).val();
            alert(OnOff)
        }
    });
    var status = $('#Time').val();
    alert(status)
});