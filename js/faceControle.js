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
    const faceContour_url = './images/faceContour.svg';
    //const leftEye_url = './images/leftEye.svg';
    const leftEye_cut_url = './images/lefteye_cut.svg';
    const lip_url = './images/lip.svg';
    //const nose_url = './images/nose.svg';
    const nose_cut_url = './images/nose_cut.svg';
    const rightEye_url = './images/rightEye.svg';

   

   

    //顔エリアをまっさらにする
    const faceArea = document.getElementById('face_area');
    faceArea.innerText = '';
    
    //TODO create_element関数を作る。

    const faceContour = create_element('object','faceContour','absolute','',faceContour_url);
    faceArea.appendChild(faceContour);

    const leftEyeCut = create_element('object','leftEye','absolute lefteye_position','',leftEye_cut_url);
    faceArea.appendChild(leftEyeCut);
    
    const noseCut = create_element('object','nose','absolute nose_position','',nose_cut_url);
    faceArea.appendChild(noseCut);
    //const leftEye = create_element('object','leftEye','absolute','',leftEye_url);
    //faceArea.appendChild(leftEye);

    const rightEye = create_element('object','rightEye','absolute','',rightEye_url);
    faceArea.appendChild(rightEye);

    const lip = create_element('object','lip','absolute','',lip_url);
    faceArea.appendChild(lip);

    //const nose = create_element('object','nose','absolute','',nose_url);
    //faceArea.appendChild(nose);



    //全てを追加
    //faceArea.append(fragment);


    

    //TODO パーツを定数に格納

    //TODO CSSにrelative abusoluteクラスを記述
    
}