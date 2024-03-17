

$(document).ready(function()  {

    /* Function for dynamic picture display with active button */

    current_360loc_idx = 0;
    _360locScene = document.getElementById('360loc-scene-stats');

    _360locSceneNames = ['atrium', 'concourse', 'hall', 'piatrium'];
    _360loc_scene_btn_prefix = '360loc-btn-';
    _360locSceneButtons = [];
    for (let i = 0; i < _360locSceneNames.length; i++) {
        _360locSceneButtons.push(document.getElementById(_360loc_scene_btn_prefix + _360locSceneNames[i]))
    }
    for (let i = 0; i < _360locSceneButtons.length; i++) {
        _360locSceneButtons[i].addEventListener('click', _360loc_change_active_btn.bind(this, i));
    }


});

/*
* Functions for dynamic picture display with active button
* Modified from instruct-nerf2nerf.github.io
* */
function _360loc_change_active_btn (idx) {
    _360locSceneButtons[idx].classList.add("active");
    if (current_360loc_idx != idx) {
        _360locSceneButtons[current_360loc_idx].classList.remove("active");
    }
    current_360loc_idx = idx;
    _360locScene.src = "img/" + _360locSceneNames[idx] + ".jpg";
}


