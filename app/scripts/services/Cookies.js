(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('currentUser');
    if (!currentUser || currentUser === '') {
      var userName = prompt("What is your name?")
      $cookies.put('currentUser', userName)  
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
