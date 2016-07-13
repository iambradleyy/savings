// prefill the form if we have stored data
if (localStorage.getItem("username") !== null) {
    $("#input-name").val(localStorage.getItem('username'));
    $("#username").html(localStorage.getItem('username'));
}
$("#input-targetamount").val(localStorage.getItem('targetAmount'));

// handle form submission
$("#form-name").submit(function(e) {
    var username = $("#input-name").val();
    localStorage.setItem('username', username);
    $("#username").html(username);
    var targetAmount = $("#input-targetamount").val();
    localStorage.setItem('targetAmount', targetAmount);
    e.preventDefault();
});

// handle form submission
$("#form-saved").submit(function(e) {
    var amountSaved = $("#input-amountsaved").val();
    localStorage.setItem('amountSaved', amountSaved);
    var percentSaved = calcPercent(localStorage.getItem('amountSaved'), localStorage.getItem('targetAmount'));
    console.log(percentSaved + "%");

    $("#progress-bar").css("width", percentSaved + "%");
    $("#progress-bar").html(percentSaved + "%");

    $("#progress-bar").removeClass('progress-bar-success progress-bar-warning progress-bar-danger progress-bar-default progress-bar-info');
    if (percentSaved <= 25) {
        console.log('red');
        $("#progress-bar").addClass('progress-bar-danger');
    }
    else if (percentSaved > 25 && percentSaved < 75) {
        console.log('amber');
        $("#progress-bar").addClass('progress-bar-warning');
    }
    else if (percentSaved >= 75) {
        console.log('green');
        $("#progress-bar").addClass('progress-bar-success');
    }

    e.preventDefault();
});

function calcPercent(current, target) {
    var out = 0;
    if (current <= target) {
        out = (current / target) * 100;
    }
    else {
        out = 100;
    }
    return out;
}

$(".scroll-to").click(function(e) {
    $('html, body').animate({
        scrollTop: $($(this).attr('scroll-to')).offset().top
    }, 1000);
    e.preventDefault();
});