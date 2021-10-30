
const getAds = async function() {

  const response = await fetch('https://24.javascript.pages.academy/keksobooking/data', {
    method: 'GET',
    credentials: 'same-origin',
  });
  if (!response.ok) {
    throw new Error('error on network');
  }
  return await response.json();
};

const postAds = function(form, body, succes) {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://24.javascript.pages.academy/keksobooking', {
        method: 'POST',
        body: formData,
      },
    ).then(() => {
      body.appendChild(succes)
    });
  });
}

export {
  getAds,
  postAds
};