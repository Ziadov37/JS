
    var leftArrow = document.querySelector(".arrow > #left");
    var rightArrow = document.querySelector(".arrow > #right");
    var i = 0 ;
    var images =["images/image1.png","images/image2.png","images/image3.png","images/image4.png"];
    var slider = function(){
      document.slider.src= images[i];

      if(i< images.length -1  ){
        i++;
      }else{
        i = 0;
      }

      leftArrow.addEventListener("click", slider);
      rightArrow.addEventListener("click", slider);


    }
    slider();


