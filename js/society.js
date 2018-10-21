const name = document.querySelector('.name');
const description = document.querySelector('.description');
const timing = document.querySelector('.timing');

class Society{
    constructor(name,img,desc){
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}

let society = new Array();

description.textContent = 'A society where one gets to know the world, world politics, societies and obviously all of that through a multitude of never ending fun. A society meant for the strong of heart, meant for the listener, the speaker in you. With the flagship event of KIIT International Model UN 2015, the society promises to deliver many grilling session over the coming year.';

name.textContent = 'Model UN Society (KMUN)';

timing.textContent = '5.30 p.m. to 7.30 p.m. Saturday'



coordinatorsflex = document.querySelector('#coordinator-flex');
facultysflex = document.querySelector('#faculty-flex');

for(var x=0;x<5;x++)
    {
        let outcard = document.createElement("div");
        outcard.classList.add('col','s12','m6','l1','out-card');
        outcard.innerHTML =
            `<div class="card">
                <div class="card-image">
                  <img src="img/karakalem_hande_ercel_by_serkanpainter-dawsitd.jpg">
                  <span class="card-title">Just another sexy coordinator</span>
                </div>
                <div class="card-content">
                  <p  class="flow-text">How may I assist you?</p>
                </div>
                <div class="card-action">
                  <a href="#">Facebook link</a>
                </div>
              </div>`;
        
        coordinatorsflex.appendChild(outcard);
    }
for(var x=0;x<5;x++)
    {
        let outcard = document.createElement("div");
        outcard.classList.add('col','s12','m6','l1','out-card');
        outcard.innerHTML =
            `<div class="card">
                <div class="card-image">
                  <img src="img/karakalem_hande_ercel_by_serkanpainter-dawsitd.jpg">
                  <span class="card-title">Just another sexy coordinator</span>
                </div>
                <div class="card-content">
                  <p class="flow-text">How may I assist you?</p>
                </div>
                <div class="card-action">
                  <a href="#">Email id</a>
                </div>
              </div>`;
        facultysflex.appendChild(outcard);
        
    }

const eventlist = document.querySelector('#events');
let events=[1,2,3,4,5];
for(var x=0;x<5;x++)
    {
        let shade = 'lighten-'+events[x];
        let event = document.createElement("li");
     event.classList.add('center','amber',shade,'flow-text');
        event.innerHTML = events[x]+'. Bragging rights';
        eventlist.appendChild(event);
    }