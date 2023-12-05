document.getElementById('popup').style.display = 'block';

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});


document.querySelector('.tooltip').addEventListener('mouseover', function() {
  document.querySelector('.tooltiptext').style.visibility = 'visible';
});

document.querySelector('.tooltip').addEventListener('mouseout', function() {
  document.querySelector('.tooltiptext').style.visibility = 'hidden';
});
