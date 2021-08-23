let boxes= document.querySelectorAll('.box');

window.addEventListener("scroll",content);
console.log(boxes[0].getBoundingClientRect().top);

function content()
{
    boxes.forEach(box=>{
        var BottomView= window.innerHeight/5*4;
        var topVIew= box.getBoundingClientRect().top;
        if(topVIew<BottomView)
        {
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }

    })
}