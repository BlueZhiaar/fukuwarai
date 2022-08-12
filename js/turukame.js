'use strict';

const turukameArea = document.getElementById('turukame_area');
turukameArea.innerText = '';

const faceAreaSecond = document.getElementById('face_area');

const makeTurukameButton = create_element('button','make_turukame_button','btn btn-info','福笑いに挑戦する','');
turukameArea.appendChild(makeTurukameButton);

makeTurukameButton.onclick = function() {
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
    const turukameQuestion = create_element('p','turukame_question','',questionSentence,'');

    turukameArea.appendChild(turukameQuestion);
    
    const inputArea = create_element('input','input_area','','','');
    turukameArea.appendChild(inputArea);
    const answerButton = create_element('button','input_area','','解答する','');
    turukameArea.appendChild(answerButton);

    answerButton.onclick = function(){
        console.log(inputArea.value);

        if(parseInt(inputArea.value) === parseInt(turukameObject.turu)){
            const seikai = create_element('h1','seikai','','正解','');
            faceAreaSecond.appendChild(seikai);
            console.log('正解');
        }else{
            const huseikai = create_element('h1','huseikai','','不正解','');
            faceAreaSecond.appendChild(huseikai);
            console.log('不正解');
        }
    }

    console.log(returnBrokenArray(['faceContour','leftEye','nose','rightEye','lip'],3))
    
    
}

//1-リミットまでのランダムな整数を返す
/**
 * @param {int} リミット
 * @return {int}
 */

function returnRandomNum(limit_num){
    return Math.floor((Math.random() * limit_num) + 1);
}

class TuruAndKame {
    constructor(each_limit,turu,kame,turu_and_kame,turu_legs_num,kame_legs_num,all_legs_num){
        this.each_limit = each_limit;
        this.turu = turu;
        this.kame = kame;
        this.turu_and_kame = turu_and_kame;
        this.turu_legs_num = turu_legs_num;
        this.kame_legs_num = kame_legs_num;
        this.all_legs_num = all_legs_num;
    }

    setNumbers(){
        this.turu = returnRandomNum(this.each_limit);
        this.kame = returnRandomNum(this.each_limit);
        this.turu_and_kame = this.turu + this.kame;
        this.turu_legs_num = this.turu * 2;
        this.kame_legs_num = this.kame * 4;
        this.all_legs_num = this.turu_legs_num + this.kame_legs_num;
    }

    returnQuestionSentence(){
        return `鶴と亀が合計で${this.turu_and_kame}匹います。足の数は合計で${this.all_legs_num}本です。鶴は何匹いるでしょう。`
    }


}

//id=['faceContour','leftEye','nose','rightEye','lip']

//配列とintを引数にして引数の数だけずれた配列を返す。回って前と同じ配列になった場合は一つずらす
function returnBrokenArray(arr = ['faceContour','leftEye','nose','rightEye','lip'],wrong_num){
   //全パターン手入力でいいじゃない
   let change_num = wrong_num % arr.length;
   
   if(change_num === 1){
    return ['leftEye','nose','rightEye','lip','faceContour'];
   } else if(change_num === 2){
    return ['nose','rightEye','lip','faceContour','leftEye'];
   } else if(change_num === 3){
    return ['rightEye','lip','faceContour','leftEye','nose'];
   }else if(change_num === 4){
    return ['lip','faceContour','leftEye','nose','rightEye'];
   }else {
    return ['leftEye','nose','rightEye','lip','faceContour'];
   }
}

