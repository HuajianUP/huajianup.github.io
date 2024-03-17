
$(document).ready(function()  {

    /* Function for dynamic picture display with active button */
    scene_current_idx = 0;
    Scene = document.getElementById('scene-stats');

    SceneNames = ['atrium', 'concourse', 'hall', 'piatrium'];
    _scene_btn_prefix = 'btn-';
    SceneButtons = [];
    for (let i = 0; i < SceneNames.length; i++) {
        SceneButtons.push(document.getElementById(_scene_btn_prefix + SceneNames[i]));
        SceneButtons[i].addEventListener('click', _change_active_btn.bind(this, i));
    }


    /* Function for carousel display*/
    carousel_item_idx = 0;
    // Carousel = document.getElementById('carousel-dots');
    _carousel_dot_prefix = 'img-dot-';
    CarouselDots = [];
    dot_number = 2;
    for (let i = 0; i < dot_number; i++) {
        CarouselDots.push(document.getElementById(_carousel_dot_prefix + i.toString()));
        CarouselDots[i].addEventListener('click', _change_active_dot.bind(this, i));
    }
});

/*
* Functions for dynamic picture display with active button
* Modified from instruct-nerf2nerf.github.io
* */
function _change_active_btn (idx) {
    SceneButtons[idx].classList.add("active");
    if (scene_current_idx != idx) {
        SceneButtons[scene_current_idx].classList.remove("active");
    }
    scene_current_idx = idx;
    Scene.src = "img/" + SceneNames[idx] + ".jpg";
}

function _change_active_dot (idx) {
    CarouselDots[idx].classList.add("active");
    if (carousel_item_idx != idx) {
        CarouselDots[carousel_item_idx].classList.remove("active");
    }
    carousel_item_idx = idx;
}


