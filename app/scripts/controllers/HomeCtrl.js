(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;

      this.addRoom = function (newRoom){
        Room.addRoom(newRoom);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

































































//
// //
// this.addRoom = function(newRoomName) {
//   Room.addRoom(newRoomName)
// }
