<?

function showJSONResponse($type = 'error', $data) {
  $header = '';
  switch ($type) {
    case 'success':
      $header = 'HTTP/1.1 200 OK';
      break;
    case 'not_found':
      $header = 'HTTP/1.1 404 Not found';
      break;
    case 'error':
      $header = 'HTTP/1.1 500 Error';
      break;
  }
  header($header);
  echo json_encode($data); 
  die();
}

?>
