'use strict';

window.onload = function() {
    let fragment = new DocumentFragment();
class Face {
    constructor(facecontour,righteye,lefteye,nose,lip){
        this.facecontour = facecontour;
        this.righteye = righteye;
        this.lefteye = lefteye;
        this.nose = nose;
        this.lip = lip;
    }
}
    //imgの相対パスを定数に格納
    const faceContour_url = './images/hanako_rinkaku.svg';
    const leftEye_cut_url = './images/hanako_lefteye_cut.svg';
    const lip_url = './images/hanako_lip_cut.svg';
    const nose_cut_url = './images/hanako_nose_cut.svg';
    const rightEye_url = './images/hanako_righteye_cut.svg';

   

   

    //顔エリアをまっさらにする
    const faceArea = document.getElementById('face_area');
    faceArea.innerText = '';

    //説明文を入れる
    const descriptionSentence = '福笑いに挑戦して鶴亀算を解いてください。正解かどうかで顔が変わります。';
    const p = create_element('p','description','',descriptionSentence,'');
    faceArea.appendChild(p);
    

    const faceContour = create_element('object','faceContour','absolute img-responsive','',faceContour_url);
    faceArea.appendChild(faceContour);

    /*

    const leftEyeCut = create_element('object','leftEye','absolute image-fluid','',leftEye_cut_url);
    faceArea.appendChild(leftEyeCut);
    
    const noseCut = create_element('object','nose','absolute image-fluid','',nose_cut_url);
    faceArea.appendChild(noseCut);
    
    const rightEye = create_element('object','rightEye','absolute image-fluid','',rightEye_url);
    faceArea.appendChild(rightEye);

    const lip = create_element('object','lip','absolute image-fluid','',lip_url);
    faceArea.appendChild(lip);
    */

    //id=['faceContour','leftEye','nose','rightEye','lip']

    //TODO IDを配列に入れて誤答するとIDを書き換えることによってパーツをずらす

    //const nose = create_element('object','nose','absolute','',nose_url);
    //faceArea.appendChild(nose);



    //全てを追加
    //faceArea.append(fragment);


    

    //TODO パーツを定数に格納

    //TODO CSSにrelative abusoluteクラスを記述

    //turukame.jsを呼び出す
    const turukame_js = document.createElement('script');
    turukame_js.src = './js/turukame.js';
    faceArea.appendChild(turukame_js);

    
}