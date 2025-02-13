const bookingButtons = document.querySelectorAll('.card__button');

function reserveCard(card) {
  if (card.classList.contains('reserved')) {
    card.classList.remove('reserved');
  } else {
    card.classList.add('booking');

    card.addEventListener('mouseleave', function onMouseLeave() {
      card.classList.remove('booking');
      card.classList.add('reserved');
      card.removeEventListener('mouseleave', onMouseLeave);
    });
  }
}

bookingButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    const card = this.closest('.card');
    reserveCard(card);
  });
});

const cardTitles = document.querySelectorAll('.card__title');
cardTitles.forEach(title => {
  title.addEventListener('click', function(event) {
    event.stopPropagation();
    const card = this.closest('.card');

    if (card.classList.contains('reserved')) {
      card.classList.remove('reserved');
    }
  });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', function() {
    if (card.classList.contains('reserved')) {
      card.classList.remove('reserved');
    }
  });
});
