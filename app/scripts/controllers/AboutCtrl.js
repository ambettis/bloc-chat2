(function() {
    function AboutCtrl() {
      this.ceo = 'Austin Bettis';
      this.cfo = 'Ashleigh Bettis';
    }

    angular
        .module('blocChat')
        .controller('AboutCtrl', AboutCtrl);
})();
