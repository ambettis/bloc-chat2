(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));

    };

    Message.addMessage = function(newMessage, roomId) {
        messages.$add({ content: newMessage,
                        sentAt: new Date,
                        roomId: roomId,
                        username: $cookies.get('currentUser')
        })
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
