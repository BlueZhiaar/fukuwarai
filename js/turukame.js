'use strict';

const turukameArea = document.getElementById('turukame_area');
turukameArea.innerText = '';

const makeTurukameButton = create_element('button','make_turukame_button','','福笑いに挑戦する','');
turukameArea.appendChild(makeTurukameButton);

makeTurukameButton.onclick = function() {
    //問題文の表示
    //解答入力欄の表示

    let questionSentence = '問　test';
    const turukameQuestion = create_element('p','turukame_question','',questionSentence,'');

    turukameArea.appendChild(turukameQuestion);
}

