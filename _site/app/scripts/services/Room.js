(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child('rooms')

    var Room = {};

    Room.all = $firebaseArray(ref)

    Room.addRoom = function(name) {
      $firebaseArray(ref).$add({name: name})
    }

    return Room;
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
