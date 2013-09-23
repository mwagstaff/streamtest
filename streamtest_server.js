var io = require('socket.io').listen(8000);

io.sockets.on('connection', function (socket) {
  socket.emit('initial_connect', { hello: "Connection established" });
  socket.on('connect', function (data) {
    //console.log(data);
    socket.emit('new_response', {
      message_padding: getPaddedString( data["message_padding_size"] ),
      sequence_id: data["sequence_id"],
      timestamp_start: data["timestamp_start"]
    });
  });
});

function getPaddedString(size)
{
  var padded_string = '';
  for (var i = 0; i < size; i ++)
    padded_string += 'a';
  return padded_string;
}

