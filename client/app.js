var socket = io();

$('form').on('submit',function () {
    var text = $('#message').val();
    var initials = $('#initials').val();

    socket.emit('initials', initials);
    $('#initials').val('');

    socket.emit('message', text);
    $('#message').val('');
    return false;
});


socket.on('initials', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});

socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});