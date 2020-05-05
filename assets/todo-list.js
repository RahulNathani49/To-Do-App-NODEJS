$(document).ready(function() {
    var todo = document.getElementById("todoval").value;

    $('form').on('submit', function() {

        console.log(todo);
        $.ajax({
            type: 'POST',
            url: '127.0.0.1:3000/todo',
            data: 'todo',
            success: function() {
                location.reload();
            }
        });
    });
});