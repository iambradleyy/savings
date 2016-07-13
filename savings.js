
$("#form-name").submit(function(e) {
    var username = $("#input-name").val();
    var targetAmount = $("#input-targetamount").val();
    console.info(username, targetAmount);
    e.preventDefault();
});