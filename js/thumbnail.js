const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const fragmentContainer = document.createDocumentFragment();

const renderThumbnails = (getPictures, container) => {
  getPictures.forEach(({url, description, comments, likes, id}) => {
    const thumbnailPhoto = thumbnailTemplate.cloneNode(true);
    thumbnailPhoto.querySelector('.picture__img').src = url;
    thumbnailPhoto.querySelector('.picture__img').alt = description;
    thumbnailPhoto.querySelector('.picture__comments').textContent = comments.length;
    thumbnailPhoto.querySelector('.picture__likes').textContent = likes;
    thumbnailPhoto.dataset.photoId = id;
    fragmentContainer.append(thumbnailPhoto);
    container.append(fragmentContainer);
  });
};

export { renderThumbnails };
