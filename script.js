function createPixels(size) {
    let container = document.querySelector(".container");
    for (currentPixel = 0; currentPixel < size * size; currentPixel++) {
      let pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      pixel.addEventListener("pointerover", addRgb);
      container.appendChild(pixel);
    }
  }
  
  createPixels(20);
  
  function addRgb(e) {
    e.target.style = `background-color: rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 255)})`;
    e.target.removeEventListener("pointerover", addRgb);
  }
  
  function resetContainer() {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => pixel.parentNode.removeChild(pixel));
  }


            
         
           
            
       

