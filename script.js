        const colorPicker = document.getElementById("colorPicker");
        const canvascolor = document.getElementById("canvascolor");
        const canvas = document.getElementById("mycanvas");
        const clearbutton = document.getElementById("clearbutton");
        const savebutton = document.getElementById("savebutton");
        const Fontsize = document.getElementById("Fontsize");
        const retrievebutton = document.getElementById("retrievebutton");
        const ctx = canvas.getContext("2d");
       
        colorPicker.addEventListener('change' , (e)=>{
            ctx.strokeStyle = e.target.value;
            ctx.fillStyle = e.target.value;
        })

        canvas.addEventListener('mousedown',(e)=>{
            isDrawing = true;
            lastX = event.offsetX;
            lastY = event.offsetY;
        })

        canvas.addEventListener('mousemove', (e)=>{
            if(isDrawing){
                ctx.beginPath();
                ctx.moveTo(lastX,lastY);
                ctx.lineTo(event.offsetX,event.offsetY);
                ctx.stroke();

                lastX = event.offsetX;
                lastY = event.offsetY;
            }

        })

        canvas.addEventListener('mouseup',() =>{
            isDrawing=false;
        })

        canvascolor.addEventListener('change',(e)=>{
            ctx.fillStyle = e.target.value;
            ctx.fillRect(0,0,800,500);
        })

        Fontsize.addEventListener('change',(e)=>{
            ctx.lineWidth = e.target.value;
        })
        clearbutton.addEventListener('click' ,()=>{
            ctx.clearRect(0,0,canvas.width,canvas.height);
        })
        savebutton.addEventListener('click',()=>{
            localStorage.setItem('canvasContent',canvas.toDataURL());
            let link = document.createElement('a');

            link.download = 'my-canvas.png';
            link.href = canvas.toDataURL();
            link.click();
        })

        retrievebutton.addEventListener('click',()=>{
            let savedCanvas = localStorage.getItem('canvasContents');

            if(savedCanvas){
                let img = new Image();
                img.src = savedCanvas;
                ctx.drawImage(img,0,0);
            }
        })
