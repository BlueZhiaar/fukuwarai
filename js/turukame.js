'use strict';

const faceContour_url = './images/hanako_rinkaku.svg';
const leftEye_cut_url = './images/hanako_lefteye_cut.svg';
const lip_url = './images/hanako_lip_cut.svg';
const nose_cut_url = './images/hanako_nose_cut.svg';
const rightEye_url = './images/hanako_righteye_cut.svg';
const turukameArea = document.getElementById('turukame_area');
turukameArea.innerText = '';

const faceAreaSecond = document.getElementById('face_area');

const makeTurukameButton = create_element('button', 'make_turukame_button', 'btn btn-info btn-lg absolute', '福笑いに挑戦する', '');
turukameArea.appendChild(makeTurukameButton);

makeTurukameButton.onclick = function () {
    turukameArea.innerText = '';
    let turukameObject = new TuruAndKame();
    //問題文の表示
    //解答入力欄の表示
    //鶴と亀の上限を設定
    turukameObject.each_limit = 5;
    turukameObject.setNumbers();
    //テスト用コード
    console.log(turukameObject.turu);

    let questionSentence = turukameObject.returnQuestionSentence();
    const turukameQuestion = create_element('p', 'turukame_question', '', questionSentence, '');

    turukameArea.appendChild(turukameQuestion);

    const inputArea = create_element('input', 'input_area', '', '', '');
    turukameArea.appendChild(inputArea);
    const answerButton = create_element('button', 'input_area', 'answer_button', '解答する', '');
    turukameArea.appendChild(answerButton);
    const retryButton = create_element('button', '', 'retry_button', '再挑戦する', '');
    turukameArea.appendChild(retryButton);

    //ボタンを押した回数
    let clickButtonNum = 0;

    answerButton.onclick = function () {
        //入力無しにボタンを押されたらアラートを出す

        if(inputArea.value==='' || !(inputArea.value.match(/^[0-9]*$/))){
            alert('半角数字を入力してから解答ボタンを押してください。');
            return;
        }
        //一回入力したらボタンが無効になる
        const button = document.getElementById('answer_button');


        if (clickButtonNum > 0) {
            alert('再挑戦する場合は再挑戦するボタンを押してください。');
            button.disabled = true;

            //TODO 再チャレンジボタンを作る
            //TODO 再読み込みwindow.location.reload();

            //解答すると説明が消えてしまうので消えないようにする
        }



        clickButtonNum = clickButtonNum + 1;

        
        if (parseInt(inputArea.value) === parseInt(turukameObject.turu)) {

            //一度入力したらやり直しボタンを押さないと入力できないようにする
            faceAreaSecond.innerText = '';

            //説明文を入れる
            const descriptionSentence = '福笑いに挑戦して鶴亀算を解いてください。正解かどうかで顔が変わります。';
            const p = create_element('p', 'description', '', descriptionSentence, '');
            faceArea.appendChild(p);
            const seikai = create_element('h1', 'seikai', '', '正解', '');
            turukameArea.appendChild(seikai);
            console.log('正解');
            const faceContour2 = create_element('object', 'faceContour', 'absolute image-fluid', '', faceContour_url);
            faceAreaSecond.appendChild(faceContour2);

            const leftEyeCut2 = create_element('object', 'leftEye', 'absolute image-fluid', '', leftEye_cut_url);
            faceAreaSecond.appendChild(leftEyeCut2);

            const noseCut2 = create_element('object', 'nose', 'absolute image-fluid', '', nose_cut_url);
            faceAreaSecond.appendChild(noseCut2);

            const rightEye2 = create_element('object', 'rightEye', 'absolute image-fluid', '', rightEye_url);
            faceAreaSecond.appendChild(rightEye2);

            const lip2 = create_element('object', 'lip', 'absolute image-fluid', '', lip_url);
            faceAreaSecond.appendChild(lip2);

        } else {

            let wn = parseInt(turukameObject.turu) - parseInt(inputArea.value);

            console.log(`wn=${wn}`);
            let brokenArray = returnBrokenArray(['leftEye', 'nose', 'rightEye', 'lip'], wn);

            faceAreaSecond.innerText = '';

            const faceContour2 = create_element('object', 'FaceCountour', 'absolute image-fluid', '', faceContour_url);
            faceAreaSecond.appendChild(faceContour2);

            const leftEyeCut2 = create_element('object', brokenArray[0], 'absolute image-fluid', '', leftEye_cut_url);
            faceAreaSecond.appendChild(leftEyeCut2);

            const noseCut2 = create_element('object', brokenArray[1], 'absolute image-fluid', '', nose_cut_url);
            faceAreaSecond.appendChild(noseCut2);

            const rightEye2 = create_element('object', brokenArray[2], 'absolute image-fluid', '', rightEye_url);
            faceAreaSecond.appendChild(rightEye2);

            const lip2 = create_element('object', brokenArray[3], 'absolute image-fluid', '', lip_url);
            faceAreaSecond.appendChild(lip2);


            const huseikai = create_element('h1', 'huseikai', '', '不正解', '');
            turukameArea.appendChild(huseikai);
            console.log('不正解');

        }
    }

    retryButton.onclick = function () {
        makeTurukameButton.onclick();
    }




}

//1-リミットまでのランダムな整数を返す
/**
 * @param {int} リミット
 * @return {int}
 */

function returnRandomNum(limit_num) {
    return Math.floor((Math.random() * limit_num) + 1);
}

class TuruAndKame {
    constructor(each_limit, turu, kame, turu_and_kame, turu_legs_num, kame_legs_num, all_legs_num) {
        this.each_limit = each_limit;
        this.turu = turu;
        this.kame = kame;
        this.turu_and_kame = turu_and_kame;
        this.turu_legs_num = turu_legs_num;
        this.kame_legs_num = kame_legs_num;
        this.all_legs_num = all_legs_num;
    }

    setNumbers() {
        this.turu = returnRandomNum(this.each_limit);
        this.kame = returnRandomNum(this.each_limit);
        this.turu_and_kame = this.turu + this.kame;
        this.turu_legs_num = this.turu * 2;
        this.kame_legs_num = this.kame * 4;
        this.all_legs_num = this.turu_legs_num + this.kame_legs_num;
    }

    returnQuestionSentence() {
        return `鶴と亀が合計で${this.turu_and_kame}匹います。足の数は合計で${this.all_legs_num}本です。鶴は何匹いるでしょう。`
    }


}

//id=['faceContour','leftEye','nose','rightEye','lip']

//配列とintを引数にして引数の数だけずれた配列を返す。回って前と同じ配列になった場合は一つずらす
function returnBrokenArray(arr = ['leftEye', 'nose', 'rightEye', 'lip'], wrong_num) {
    //全パターン手入力でいいじゃない
    let change_num = Math.abs(wrong_num) % arr.length;

    if (change_num === 1) {
        return ['nose', 'lip', 'leftEye', 'rightEye'];
    } else if (change_num === 2) {
        return ['nose', 'rightEye', 'lip', 'leftEye'];
    } else if (change_num === 3) {
        return ['rightEye', 'lip', 'leftEye', 'nose'];
    } else if (change_num === 4) {
        return ['lip', 'leftEye', 'nose', 'rightEye'];
    } else {
        return ['rightEye', 'leftEye', 'nose', 'lip'];
    }
}

