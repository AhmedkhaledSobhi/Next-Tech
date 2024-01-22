
function displaySlide(event) {
    event.preventDefault()
    document.getElementById('slide-img').style.display='block'; 
    const imageUrl = event.target.parentElement.parentElement.parentElement.style.backgroundImage.slice(5, -2);

    document.getElementById("showImage").src = imageUrl;

    document.body.scroll(undefined)

}

function closeSlide (){
    document.getElementById('slide-img').style.display='none';
}