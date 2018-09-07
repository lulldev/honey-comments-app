<?

require '../core/db.php';

$db = DB::getInstance();

if (!empty($_GET)) {
  $username = $_GET['username'];
  $email = $_GET['email'];
  $comment = $_GET['comment'];

  if (!preg_match('/^[a-zA-Zа-яА-Я ]*$/', $username)) {
    var_dump('Only letters and white space allowed'); 
  }

  // $db->insert('comments', [
  //   'username' => 'test',
  //   'email' => 'foo@bar.com',
  //   'comment' => 'test',
  // ]);
}

?>
