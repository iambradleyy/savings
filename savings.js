
// handle form submission
$("#form-name").submit(function(e) {
    var username = $("#input-name").val();
    localStorage.setItem('username', username);
    var targetAmount = $("#input-targetamount").val();
    localStorage.setItem('targetAmount', targetAmount);
    e.preventDefault();
});