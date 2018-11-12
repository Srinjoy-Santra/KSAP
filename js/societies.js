const mainRow = document.querySelector('.row');

class Society{
    constructor(name,img,desc){
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}
images = ['KSCE.jpg', 'alumni.jpg', 'apogie.jpg', 'automobile.jpg', 'cook.jpg', 'drama.jpg', 'e-cell.jpg', 'fashion.jpg', 'film.jpg', 'finance.jpg', 'it.jpg', 'kamakshi.jpg', 'karma.jpg', 'kartavya.jpg', 'khetsen.jpg', 'khwab.jpg', 'khwahishein.jpg', 'kiitmun.jpg', 'korus.jpg', 'kreative.jpg', 'krs.jpg', 'marketing.jpg', 'qutopia.jpg', 'webdevet.jpg', 'write.jpg'];

let society = new Array();

desc = 'This society aims to perceive, build and conceive what the world normally cannot. It welcomes members who are strongly motivated to work for the populace of the world.'
for(var x=0;x<images.length;x++)
    {
        let col = document.createElement("div");
        col.classList.add('col','l3','m6','s12');
        society.push(new Society(images[x].toUpperCase().slice(0,-4),images[x],desc));
        
        cardDiv = '<div class="card"><div class="card-image"><img src="http://ksac.kiit.ac.in/pix/societies/'+society[x].img+'"><span class="card-title white-text flow-text" style="font-size:50px;">'+society[x].name+'</span></div><div class="card-content"><p>'+society[x].desc+'</p></div><div class="card-action"><a href="#">Facebook page link</a><a href="KSAP/society.html">Details link</a></div></div>';

        col.innerHTML=cardDiv;
        mainRow.appendChild(col);
    }
    
    
console.log("It's running!");