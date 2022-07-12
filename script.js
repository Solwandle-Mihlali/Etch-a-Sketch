
            const header = document.getElementById('head');
            const container = document.getElementById('container');
            const div = document.createElement('div');
            
            const blackBtn = document.createElement('button');
            const greyBtn = document.createElement('button');
            const rgbBtn = document.createElement('button');
            const btnSize = document.createElement('button');
            

            blackBtn.className = "button";
            greyBtn.className = "button";
            rgbBtn.className = "button";
            btnSize.className = "button";
 
            header.append(blackBtn,greyBtn,rgbBtn,btnSize)

            function headerStyle(){
              
                header.style.minHeight = "10vh";
                header.style.width = "60%";
                header.style.border = "solid"
                header.style.display = "flex"
                header.style.alignItems = "center"
                header.style.justifyContent = "center"
                header.style.gap="30px"
                header.style.background = "red"
            }
            headerStyle();
            //defining container styles
            function containerStyle()
            {
                container.style.borderStyle = "solid";
                container.style.borderWidth = "5px"
                container.style.minHeight = "80vh";
                container.style.height = "80vh"
                container.style.width= "60%";
                container.style.display = "grid";
                container.style.alignItems = "center";
                container.style.justifyContent="center";
                container.style.boxShadow ="10px 4px 10px black"
            }
            containerStyle();

            function createGrids(col,row){

                for(let x = 0; x < (col * row); x++){
                     
                    container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
                    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
                    container.appendChild(div).classList.add('box')
                }
            }
            createGrids(16,16);


            
         
           
            
       

