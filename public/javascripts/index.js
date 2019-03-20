var now_num = 1
function SelectLink(num){
    $(function(){
        $("html,body").animate({scrollTop:$('.' + num).offset().top});
    })
}

/*スクロール処理---------------------------------------------------------------------------------------------------------------------------*/
$(window).on('scroll', function (){
    var class1 = $('.1');
    var class2 = $('.2');
    var class3 = $('.3');
    var class4 = $('.4');
    class1.each(function(){
        var classOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if(scrollPos > classOffset - wh + (wh / 2)){
            $('#2').toggleClass('link_action', false);
            $('#2').toggleClass('link_button', true);
            $('#3').toggleClass('link_action', false);
            $('#3').toggleClass('link_button', true);
            $('#4').toggleClass('link_action', false);
            $('#4').toggleClass('link_button', true);
            $('#1').toggleClass('link_action', true);
            $('#1').toggleClass('link_button', false);

            $('#h1').toggleClass('close_h',false);
            $('#h2').toggleClass('close_h',true);
            $('#h3').toggleClass('close_h',true);
            $('#h4').toggleClass('close_h',true);

            $('.back_image1').toggleClass('ghost',false)
            $('.back_image2').toggleClass('ghost',true)
            $('.bookmark').toggleClass('ghost',true)
            
        }
    })
    class2.each(function(){
        var classOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if(scrollPos > classOffset - wh + (wh / 2)){
            $('#1').toggleClass('link_action', false);
            $('#1').toggleClass('link_button', true);
            $('#3').toggleClass('link_action', false);
            $('#3').toggleClass('link_button', true);
            $('#4').toggleClass('link_action', false);
            $('#4').toggleClass('link_button', true);
            $('#2').toggleClass('link_action', true);
            $('#2').toggleClass('link_button', false);

            $('#h1').toggleClass('close_h',true);
            $('#h2').toggleClass('close_h',false);
            $('#h3').toggleClass('close_h',true);
            $('#h4').toggleClass('close_h',true);

            $('.back_image1').toggleClass('ghost',true)
            $('.back_image2').toggleClass('ghost',true)
            $('.bookmark').toggleClass('ghost',false)
            
        }
    })
    class3.each(function(){
        var classOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if(scrollPos > classOffset - wh + (wh / 2)){
            $('#1').toggleClass('link_action', false);
            $('#1').toggleClass('link_button', true);
            $('#2').toggleClass('link_action', false);
            $('#2').toggleClass('link_button', true);
            $('#4').toggleClass('link_action', false);
            $('#4').toggleClass('link_button', true);
            $('#3').toggleClass('link_action', true);
            $('#3').toggleClass('link_button', false);

            $('#h1').toggleClass('close_h',true);
            $('#h2').toggleClass('close_h',true);
            $('#h3').toggleClass('close_h',false);
            $('#h4').toggleClass('close_h',true);

            $('.back_image').toggleClass('ghost',true)
            $('.back_image2').toggleClass('ghost',false)
            $('.bookmark').toggleClass('ghost',true)
        }
    })
    class4.each(function(){
        var classOffset = $(this).offset().top;
        var scrollPos = $(window).scrollTop();
        var wh = $(window).height();

        if(scrollPos > classOffset - wh + (wh / 2)){
            $('#1').toggleClass('link_action', false);
            $('#1').toggleClass('link_button', true);
            $('#2').toggleClass('link_action', false);
            $('#2').toggleClass('link_button', true);
            $('#3').toggleClass('link_action', false);
            $('#3').toggleClass('link_button', true);
            $('#4').toggleClass('link_action', true);
            $('#4').toggleClass('link_button', false);

            $('#h1').toggleClass('close_h',true);
            $('#h2').toggleClass('close_h',true);
            $('#h3').toggleClass('close_h',true);
            $('#h4').toggleClass('close_h',false);

            $('.back_image').toggleClass('ghost',true)
            $('.back_image2').toggleClass('ghost',false)
            $('.bookmark').toggleClass('ghost',true)
        }
    })
})

function SetSkill(num){
    console.log('unti')
    $(() => {
        for(i=1; i<=10; i++){
            if(i != num){
                $('#skill' + i).toggleClass('forkus', false);
            }
        }
        $('#skill' + num).toggleClass('forkus', true);

        switch(num){
            case 1:
                $(".skill_description").html(
                    "<h1>JS(ES6)/HTML/CSS</h1>" + 
                    "<p>私が一番使っている言語達です。自主的なアプリケーション開発、研究室の課題や授業課題でも使っています。"+
                    "基本的なことはもちろん、フレームワークもいくつか使っています。</p>"
                );
                break;
            
            case 2:
                $(".skill_description").html(
                    "<h1>React/Redux</h1>"+
                    "<p>カスタムブックマークの作成に使用しました。まだまだ未知の部分も多いですが、"+
                    "基本的なこと(React/Reduxをつかってなにかwebページを作れる程度)はできます。"+
                    "<br>ですがReactが向いているとされる大型のwebページはまだ作ったことがないです。</p>"
                );
                break;
            
            case 3:
                $(".skill_description").html(
                    "<h1>jQuery</h1>"+
                    "<p>このポートフォリオや、お絵描きチャットアプリでも使っています。"+
                    "web制作の際、reactを使うとき以外はだいたいjQueryを使用していて、動きを出すのに使ったり、非同期処理に使ったりします。</p>"
                );
                break;
            
            case 4:
                $(".skill_description").html(
                    "<h1>Node.js/Express.js</h1>"+
                    "<p>サーバー側はほとんどexpressを使っています。ルーティング、フォーム処理、バリデーション、非同期通信、データベースの利用、セッションなど、ある程度のことはできます。</p>"
                );
                break;

            case 5:
                $(".skill_description").html(
                    "<h1>Ruby on Rails</h1>"+
                    "<p>クイズ投稿ページのようなものを途中まで作った時に使いました。expressと同様のことができます。ですがexpressのほうが熟練度が高いです。</p>"
                );
                break;

            case 6:
                $(".skill_description").html(
                    "<h1>PHP</h1>"+
                    "<p>授業で使っていました。ルーティング、フォーム処理、データベースの利用はPHPで実装したことがあります</p>"
                );
                break;

            case 7:
                $(".skill_description").html(
                    "<h1>MySQL</h1>"+
                    "<p>お絵描きチャットのアカウント管理や、ルーム管理、ユーザーごとのスタンプの保存などに使用しました。"+
                    "基本情報技術者試験の出題範囲程度の操作はできます。</p>"
                );
                break;

            case 8:
                $(".skill_description").html(
                    "<h1>PostgreSQL</h1>"+
                    "<p>T-conのシステム内で少しだけ使用しました。データの保存、条件付き検索はできます。</p>"
                );
                break;

            case 9:
                $(".skill_description").html(
                    "<h1>GitHub</h1>"+
                    "<p>基本的なgitの使い方は習得しています。また複数人での開発、バージョン管理を行った経験もあります。</p>"
                );
                break;

            case 10:
                $(".skill_description").html(
                    "<h1>C/C++/Java</h1>"+
                    "<p>授業で習った言語です。Javaに関してはインターンシップでwebアプリ開発に使用しました。他は基本的な構文を理解しています。</p>"
                );
                break;
        }
    })
}

