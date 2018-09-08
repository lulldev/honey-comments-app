<?

require '../core/db.php';
require '../core/api.php';

$db = DB::getInstance();

header('Content-Type: application/json');

if (!empty($_POST)) {
  $username = $_POST['username'];
  $email = $_POST['email'];
  $comment = $_POST['comment'];

  if (!$username || !$email || !$comment) {
    showJSONResponse('error', ['msg' => 'All parameters not required']);
  }
  else if (strlen($username) < 2 || strlen($username) > 20 || !preg_match('/^[a-zA-Zа-яА-Я0-9-_ ]*$/', $username)) {
    showJSONResponse('error', ['msg' => 'Invalid username']);
  }
  else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    showJSONResponse('error', ['msg' => 'Invalid user email']);
  }
  else if (strlen($username) == 0 || strlen($username) > 200) {
    showJSONResponse('error', ['msg' => 'Invalid user comment']);
  }
  else {
    $db->insert('comments', [
      'username' => htmlspecialchars($username),
      'email' =>  $email,
      'comment' => htmlspecialchars($comment),
    ]);
    showJSONResponse('success', ['result' => 'Create new commit done']);
  }
}
else if (!empty($_GET)) {
  $action = $_GET['action'];
  if ($action === 'fetch') {
    showJSONResponse('success', $db->select('comments', '*', ['ORDER' => ['created_at' => 'DESC']]));
  }
}
else {
  showJSONResponse('error', ['msg' => 'Invalid request']);
}

?>
