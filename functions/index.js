const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

/*
Update functions by running the command:
  firebase deploy --only functions

The endpoint is as follows:
  https://us-central1-funretro-90d9a.cloudfunctions.net/newboard?name=<board-name>
 */
exports.newboard = functions.https.onRequest((req, res) => {
  // Test response
  // name = req.query.name;
  // res.send("New Board: " + name);

  let board = firebaseService.getBoardRef($scope.userId);
  board.set({
    boardId: req.query.name,
    date_created: new Date().toString(),
    columns: $scope.messageTypes,
    user_id: userData.uid,
    max_votes: $scope.newBoard.max_votes || 6,
    text_editing_is_private : $scope.newBoard.text_editing_is_private
  }, function(error) {
    if (error) {
      $scope.loading = false;
    } else {
      redirectToBoard();
    }
  });
})