(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();



































































this.addRoom = function(newRoomName) {
  Room.addRoom(newRoomName)
}
