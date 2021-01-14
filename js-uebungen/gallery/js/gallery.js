// Liste der Bildnamen
let images = [
    'pexels-anna-tarazevich-5896071',
    'pexels-elias-tigiser-4519978',
    'pexels-elle-hughes-5764076',
    'pexels-evgenia-basyrova-5028950',
    'pexels-julia-volk-5273076',
    'pexels-kalz-2970225',
    'pexels-michael-4387462',
    'pexels-nick-bondarev-4558692',
    'pexels-skyler-ewing-4725902',
    'pexels-sophie-dale-4828953',
];

let gallery = $('#gallery');

let lightboxContainer = $('<div id="lightbox" class="hide">   <span class="close">X</span>    <div class="lightbox-inner"></div>   </div>');
$('body > .wrapper').append(lightboxContainer);

// Ausgabe der Thumbs
// https://api.jquery.com/each/
$(images).each(
    function (index, element) {
        

        // image tag
        let htmlImageTag = `<img src="img/thumbs/${element}.jpg" alt="" class="thumb">`;

        // image-link zum Original-Bild
        htmlImageTag = `<a href="img/original/${element}.jpg"> ${htmlImageTag} </a>`;

        // gallery.html(htmlImageTag);
        gallery.append(htmlImageTag);
        //console.log(htmlImageTag);

        // html-Code für das vergrößerte Bild

        // eventhandler für den klick auf das Thumb

    }
);


$('#gallery a').click(
    function(event){
        event.preventDefault();

        let urlToMyOriginalImage = $(this).attr('href');
        console.log(urlToMyOriginalImage);

        // TODO: Image Tag dynamisch erzeugen (zusammenbauen)
        lightboxContainer.find('.lightbox-inner').html('<!-- hier kommt das Image Tage rein -->');

        lightboxContainer.removeClass('hide'); 

    }
);

/*  
    TODO: <span class="close"></span> mit click Event versehen 
    um die Klasse "hide" wieder hinzuzufügen und somit den Lighbox-Container wieder auszublenden
*/

