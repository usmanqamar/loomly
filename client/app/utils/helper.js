export const getThumbnailPath = (image, size = 'm') => {
  const { type } = image;
  let { link: url, gifv } = image;
  if (type === 'image/gif') {
    url = gifv;
  }
  return url.replace(/(\.[\w\d_-]+)$/i, `${size}$1`);
};
