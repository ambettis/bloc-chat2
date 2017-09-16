(function() {
  function Room($firebaseArray) {
    var Room = {}; // suitcase. All the functiions get added to this!

    var url = firebase.database().ref().child('rooms'); //https://bloc-chat-1.firebaseio.com/rooms
    var rooms = $firebaseArray(url); // go get me all the objects at the url

    // gets us all the rooms from firebase
    Room.all = rooms;

    // adds the room to firebase


    return Room;
  }

  angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
})();
