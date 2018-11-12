eventsflex = document.querySelector('#events-flex');

for(var x=0;x<10;x++)
    {
        let outcard = document.createElement("div");
        outcard.classList.add('col','s12','m6','l1','out-card');
        outcard.innerHTML =
            `<div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                      <span class="card-title">Event Name</span>
                      
                      <p>Date and Timing</p>
                      <p>Society</p>
                      <p>Venue</p>
                    </div>
                    <div class="card-action">
                      <a href="/society.html">Society link</a>
                      <a href="#">FB link</a>
                    </div>
                  
                </div>`;
        
        eventsflex.appendChild(outcard);
    } 






/*$(document).ready(function(){
    $('.carousel').carousel();
  });

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    dist:0
  });

$('.carousel').carousel({
    shift: 50    
});

autoplay();
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}*/

$(document).ready(function(){
    $('.slider').slider();
  });