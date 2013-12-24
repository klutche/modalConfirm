# モーダルウィンドウによる年齢認証の作り方

## まずはデモ

<a href="http://klutche.github.io/modalConfirm/" target="_blank">デモページ</a>

五木川ダムの渋い魅力はアダルトな感じがするので、年齢認証を設置してみました。
モーダルウインドウは、シックに単色背景透明で作ってみましたが、見た目はCSSで自由に変更できます。

## 必要なもの

Javascript を3つ使います。

<a href="http://jquery.com/" target="_blank">jQuery</a>

<a href="https://github.com/carhartl/jquery-cookie" target="_blank">jquery.cookie.js</a>

<a href="http://klutche.github.io/modalConfirm/js/modalConfirm.js" target="_blank">modalConfirm.js</a>

jQueryはGoogleライブラリから直接読み込みましょう。
のこり2つのファイルはアップロードしてヘッダ内で読み込みます。

    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.cookie.js"></script>
    <script type="text/javascript" src="js/modalConfirm.js"></script>

## HTML

クラス名が "modal" の要素をモーダルウインドウとして表示します。
HTMLの最後にモーダルとして表示させる部分を書き込みます。

    <div class="modal">
    <p>このサイトは成人向けの情報を含みますので、<br>
    18歳未満の方の閲覧を固くお断りいたします。</p>
    <a class="close_modal">ENTER</a>
    <a href="http://www.google.co.jp/">LEAVE</a><br>
    </div><!-- /modal -->

モーダルを解除するボタンには、クラス名 "close_modal" をつけます。

テストとしてモーダルを再表示させるボタンを設置する場合は、

    <a class="remove_cookie">クッキー削除</a>

"remove_cookie" というクラス名の要素を設置します。
クリックするとモーダルウインドウが復活します。

## CSS

このへんはお好みで。
"modal" に display:none; を設定しておくのが気をつける点です。

    .modal { position:fixed; display:none; z-index:9999; top:40%; left:50%; width:400px; height:200px; margin:-120px 0 0 -220px; padding:20px; text-align:center; }
    .modal p { margin-bottom:10px; }
    .modal a { cursor:pointer; }

## 設定

一度認証を通過した後は、Cookie 制御で一定時間はモーダルを再表示しないようになっています。
再表示までの時間や、モーダル化するクラス名は、modalConfirm.js 内で設定可能です。

    var modal = $(".modal");//モーダルウインドウのクラス
    var opacity = 0.9;//モーダル背景の透明度
    var button = $(".close_modal");//モーダル解除ボタンのクラス
    var limit = 120;//Cookieの有効期限(分)

## 最後にもう一度アダルトなダムを

<a href="http://klutche.github.io/modalConfirm/" target="_blank">デモページ</a>

先程年齢認証を通過した状態であればモーダルウインドウは表示されないはずです。

