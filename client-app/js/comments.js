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
        document.getElementById(CommentBlock.commentBlockSelector).scrollIntoView({block: 'center'});
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
          formElement.innerHTML = '<div class="container">Пока здесь нет комментариев</div>';
        }

        comments.forEach((comment, i) => {
          const type = (i % 2 !== 0) ? 'even' : 'odd';
          formElement.innerHTML +=
            '<div class="col-md-4 comment ' + type + '">' +
              '<div class="card mb-4 text-center">' +
                '<div class="card-header">' +
                  comment.username +
                '</div>' +
                '<div class="card-body">' +
                  '<div class="card-title email">' + comment.email + '</div>' +
                  '<div class="card-text comment">' + comment.comment + '</div>' +
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