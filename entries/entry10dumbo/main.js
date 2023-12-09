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

document.getElementById("image1").addEventListener('click', function() {
  if (document.getElementById("image1").style.marginTop == "280px") {
    document.getElementById("image1").style.marginTop = "0px";
    document.getElementById("image1").style.marginLeft = "80%";
    document.getElementById("image1").style.transform = "scale(1)";
    document.getElementById("image1").style.zIndex = "1";
  } else {
    document.getElementById("image1").style.marginTop = "280px";
    document.getElementById("image1").style.marginLeft = "42%";
    document.getElementById("image1").style.transform = "scale(4)";
    document.getElementById("image1").style.zIndex = "5";
  }
});

document.getElementById("image2").addEventListener('click', function() {
  if (document.getElementById("image2").style.marginTop == "280px") {
    document.getElementById("image2").style.marginTop = "250px";
    document.getElementById("image2").style.marginLeft = "75%";
    document.getElementById("image2").style.transform = "scale(1)";
    document.getElementById("image2").style.zIndex = "1";
  } else {
    document.getElementById("image2").style.marginTop = "280px";
    document.getElementById("image2").style.marginLeft = "42%";
    document.getElementById("image2").style.transform = "scale(4)";
    document.getElementById("image2").style.zIndex = "5";
  }
});

document.getElementById("image3").addEventListener('click', function() {
  if (document.getElementById("image3").style.marginTop == "280px") {
    document.getElementById("image3").style.marginTop = "500px";
    document.getElementById("image3").style.marginLeft = "10%";
    document.getElementById("image3").style.transform = "scale(1)";
    document.getElementById("image3").style.zIndex = "1";
  } else {
    document.getElementById("image3").style.marginTop = "280px";
    document.getElementById("image3").style.marginLeft = "42%";
    document.getElementById("image3").style.transform = "scale(4)";
    document.getElementById("image3").style.zIndex = "5";
  }
});

document.getElementById("image4").addEventListener('click', function() {
  if (document.getElementById("image4").style.marginTop == "280px") {
    document.getElementById("image4").style.marginTop = "100px";
    document.getElementById("image4").style.marginLeft = "10%";
    document.getElementById("image4").style.transform = "scale(1)";
    document.getElementById("image4").style.zIndex = "1";
  } else {
    document.getElementById("image4").style.marginTop = "280px";
    document.getElementById("image4").style.marginLeft = "42%";
    document.getElementById("image4").style.transform = "scale(4)";
    document.getElementById("image4").style.zIndex = "5";
  }
});

document.getElementById("image5").addEventListener('click', function() {
  if (document.getElementById("image5").style.marginTop == "280px") {
    document.getElementById("image5").style.marginTop = "500px";
    document.getElementById("image5").style.marginLeft = "80%";
    document.getElementById("image5").style.transform = "scale(1)";
    document.getElementById("image5").style.zIndex = "1";
  } else {
    document.getElementById("image5").style.marginTop = "280px";
    document.getElementById("image5").style.marginLeft = "42%";
    document.getElementById("image5").style.transform = "scale(4)";
    document.getElementById("image5").style.zIndex = "5";
  }
});

document.getElementById("image6").addEventListener('click', function() {
  if (document.getElementById("image6").style.marginTop == "280px") {
    document.getElementById("image6").style.marginTop = "350px";
    document.getElementById("image6").style.marginLeft = "33%";
    document.getElementById("image6").style.transform = "scale(1)";
    document.getElementById("image6").style.zIndex = "1";
  } else {
    document.getElementById("image6").style.marginTop = "280px";
    document.getElementById("image6").style.marginLeft = "42%";
    document.getElementById("image6").style.transform = "scale(4)";
    document.getElementById("image6").style.zIndex = "5";
  }
});