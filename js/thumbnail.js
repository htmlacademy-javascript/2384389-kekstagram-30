const thumbnailTemplateElement = document.querySelector('#picture').content.querySelector('.picture');

const fragmentContainerElement = document.createDocumentFragment();

const renderThumbnails = (getPictures, container) => {
  getPictures.forEach(({url, description, comments, likes, id}) => {
    const thumbnailPhoto = thumbnailTemplateElement.cloneNode(true);
    thumbnailPhoto.querySelector('.picture__img').src = url;
    thumbnailPhoto.querySelector('.picture__img').alt = description;
    thumbnailPhoto.querySelector('.picture__comments').textContent = comments.length;
    thumbnailPhoto.querySelector('.picture__likes').textContent = likes;
    thumbnailPhoto.dataset.photoId = id;
    fragmentContainerElement.append(thumbnailPhoto);
    container.append(fragmentContainerElement);
  });
};

export { renderThumbnails };
