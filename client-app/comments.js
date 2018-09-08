const CommentForm = {

  formSelector: 'comment-form',

  resetForm() {
    document.getElementById(CommentForm.formSelector).reset();
  },

  sendComment(username, email, comment) {
    fetch('/comments-page/api/comments.php', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'  
      },
      body: `username=${username}&email=${email}&comment=${comment}`,
    })
      .then(res => res.json())
      .then(res => {
        CommentForm.resetForm();
        CommentBlock.updateCommentsList();
      })
      .catch((error) => console.log('error', error));
  }
};

const CommentBlock = {

  commentBlockSelector: 'comment-block',

  updateCommentsList() {
    const formElement = document.getElementById(CommentBlock.commentBlockSelector);
    formElement.innerHTML = '';
    fetch('/comments-page/api/comments.php?action=fetch')
      .then(res => res.json())
      .then(comments => {
        
        if (comments.length === 0) {
          formElement.innerHTML = '<i>Пока здесь нет комментариев</i>';
        }

        comments.forEach((comment, i) => {
          formElement.innerHTML +=
            '<div class="col-md-4">' +
              '<div class="card mb-4 text-center">' +
                '<div class="card-header">' +
                  comment.username +
                '</div>' +
                '<div class="card-body">' +
                  '<strong class="card-title">' + comment.email + '</strong><br />' +
                  '<p class="card-text">' + comment.comment + '</p>' +
                '</div>' +
              '</div>' +
            '</div>'
          ;
        });
    })
    .catch((error) => alert('Возникла ошибка при создании комментария. Попробуйте еще раз!'));
  }
};

window.onload = function() {

  /* Events listeners */

  document.getElementById(CommentForm.formSelector).onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    CommentForm.sendComment(username, email, comment);
  };

  CommentBlock.updateCommentsList();
};