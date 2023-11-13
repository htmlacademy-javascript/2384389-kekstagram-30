const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const fragmentContainerComment = document.createDocumentFragment();
const commentContainer = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.social__comments-loader');

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComment = (comments) => {
  commentContainer.innerHTML = '';
  comments.forEach((element) => {
    const newComment = createComment(element);
    fragmentContainerComment.appendChild(newComment);

  });
  commentContainer.appendChild(fragmentContainerComment);
};

const showCommentCount = () => {
  commentCount.classList.add('hidden');
  commentLoader.classList.add('hidden');
};

export {renderComment, showCommentCount};
