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
    e.preventDefault();
});

function calcPercent(current, target) {
    return (current / target)*100;
}