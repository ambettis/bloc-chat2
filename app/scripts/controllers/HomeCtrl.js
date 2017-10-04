(function() {
    function HomeCtrl(Room, Message) {
      this.rooms = Room.all;
      this.messages = []
      this.roomId = '-KuS1lD9ApO-kpt3ynFe'

      this.addRoom = function (newRoom){
        Room.addRoom(newRoom);
      }

      this.setRoom = function(roomId){
        this.messages = Message.getByRoomId(roomId)
        this.roomId = roomId
      }.bind(this);

      this.addMessage = function(newMessage){
        Message.addMessage(newMessage, this.roomId);
      }.bind(this)

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

































































//
// //
// this.addRoom = function(newRoomName) {
//   Room.addRoom(newRoomName)
// }
