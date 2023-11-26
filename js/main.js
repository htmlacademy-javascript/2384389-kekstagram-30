import { renderGallery } from './gallery.js';
import { showErrorMessage } from './utils.js';
import { loadData } from './api.js';
import { initFilter } from './filters.js';
import './form.js';

const bootstrap = async () => {
  try {
    const pictures = await loadData();
    renderGallery(pictures);
    initFilter(pictures);
  } catch (error) {
    showErrorMessage();
  }
};

bootstrap();
