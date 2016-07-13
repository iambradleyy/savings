// prefill the form if we have stored data
$("#input-name").val(localStorage.getItem('username'));
$("#input-targetamount").val(localStorage.getItem('targetAmount'));

// handle form submission
$("#form-name").submit(function(e) {
    var username = $("#input-name").val();
    localStorage.setItem('username', username);
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