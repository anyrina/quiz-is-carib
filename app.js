const quiz = [
    {
        question: 'カリブ海の海賊時代、最盛期は？',
        answers: [
            '1530年〜1660年',
            '1560年〜1630年',
            '1630年〜1760年',
            '1660年〜1730年'
        ],
        correct: '1660年〜1730年'
    },{
        question: '海賊が利用できた海港、組み合わせが正しいのはどれ？',
        answers: [
            'ジャマイカ/ナッソー',
            'ハイチ/トルトゥーガ島',
            'バハマ/ポート・ロイヤル'
        ],
        correct: 'ハイチ/トルトゥーガ島'
    },{
        question: '18世紀の海賊旗で有名な人物の名前は？',
        answers: [
            'ジャックダニエル',
            'ジャックラカム',
            'ジャックスパロウ',
            'ジャックスパム'
        ],
        correct: 'ジャックラカム'
    },{
        question: '「人生は太く短く」がモットーの海賊、バーソロミュー・？',
        answers: [
            'クマ',
            'ロバーツ',
            'ロバース',
            'ロダーツ'
        ],
        correct: 'ロバーツ'
    },{
        question: '宝物船隊がヨーロッパへ向かう際に通る海峡は？',
        answers: [
            'ユカタン海峡',
            'ユースタス海峡',
            'ユーフラテス海峡',
            'ユーラシア海峡'
        ],
        correct: 'ユカタン海峡'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
     $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
     buttonIndex++;
    }
}

setupQuiz();

const clickHandler =(e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;
    
    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
    }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
