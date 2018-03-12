var HexColor;

function componentToHex(c) {
    var Hex = Number(c).toString(16);
    if (Hex.length < 2) {
        hex = "0" + hex;
    }
    console.log(Hex);
    return Hex;
}

function rgbToHex(r, g, b) {
    var hex = Number(r)
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function ColorConverter() {
    red = $("#RC").val();
    green = $("#GC").val();
    blue = $("#BlC").val();
    HexColor = rgbToHex(red, green, blue); // #0033ff
}
$(document).on("change", "#on", function() {
        console.log("first step")
        $('input[type="radio"]').filter('.lights').each(function() {
            if ($(this).is(':checked')) {
                console.log("third step")
                msg = "c:on:" + $(this).val()
                $.post("/chandelier/" + msg)
            }
        })
    }),
    $(document).on("change", "#off", function() {
        console.log("first step")
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
    $(document).on("slidestop", "#RC", function(e) {
        console.log($("#RC").val());
        console.log($("#GC").val());
        console.log($("#BlC").val());
        ColorConverter();
        console.log(HexColor);
        $("#ColorButton").css('background-color', HexColor);
    })
$(document).on("change", "#RightSwitch", function(e) {
    console.log($(this).prop("checked"));
    $.post('/bedroomlight/right')
})
$(document).on("change", "#LeftSwitch", function(e) {
    console.log($(this).prop("checked"));
    $.post('/bedroomlight/left')
})
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