const sizeToggleOptions = document.querySelectorAll('.size-toggle__option');
const addToCartButton = document.querySelector('.add-to-cart__button');

sizeToggleOptions.forEach(option => {
  option.addEventListener('click', () => {
    sizeToggleOptions.forEach(option => {
      option.classList.remove('selected');
    });
    option.classList.add('selected');
  });
});

addToCartButton.addEventListener('click', () => {
  const selectedOption = document.querySelector('.size-toggle__option.selected');
  if (selectedOption) {
    selectedOption.classList.add('added-to-cart');
  }
});
