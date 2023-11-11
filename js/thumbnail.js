// const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

// const containerPhoto = document.querySelector('.pictures');

// const createThumbnail = ({url, description, comments, likes}) => {
//   const thumbnailPhoto = thumbnailTemplate.cloneNode(true);

//   thumbnailPhoto.querySelector('.picture__img').src = url;
//   thumbnailPhoto.querySelector('.picture__img').alt = description;
//   thumbnailPhoto.querySelector('.picture__comments').textContent = comments.length;
//   thumbnailPhoto.querySelector('.picture__likes').textContent = likes;
//   //console.log(thumbnailPhoto);
//   return thumbnailPhoto;
// };

// const renderThumbnails = (pictures) => {
//   const fragmentContainer = document.createDocumentFragment();
//   pictures.forEach((picture) => {
//     const thumbnail = createThumbnail(picture);
//     fragmentContainer.append(thumbnail);
//   });

//   containerPhoto.append(fragmentContainer);
// };

// export {renderThumbnails};


const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

const containerPhoto = document.querySelector('.pictures');

const fragmentContainer = document.createDocumentFragment();


const renderThumbnails = (getPictures) => {
  getPictures.forEach(({url, description, comments, likes}) => {
    const thumbnailPhoto = thumbnailTemplate.cloneNode(true);

    thumbnailPhoto.querySelector('.picture__img').src = url;
    thumbnailPhoto.querySelector('.picture__img').alt = description;
    thumbnailPhoto.querySelector('.picture__comments').textContent = comments.length;
    thumbnailPhoto.querySelector('.picture__likes').textContent = likes;
    fragmentContainer.append(thumbnailPhoto);
    //console.log(thumbnailPhoto);
  });
  containerPhoto.append(fragmentContainer);
};

export {renderThumbnails};
