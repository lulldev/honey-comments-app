<?

require '../vendor/autoload.php';

use Medoo\Medoo;

class DB {
  
  private static $instance = null;
  
  public static function getInstance() {
    if (self::$instance === null) {
      self::$instance = new Medoo([
        'database_type' => 'mysql',
        'database_name' => 'honey-db',
        'server' => 'localhost',
        'username' => 'admin',
        'password' => 'admin'
      ]);
    }
    
    return self::$instance;
  }

  private function __clone() {}
  private function __construct() {}
}

?>
