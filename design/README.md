# 設計書

## 機能
<table>
 <tr>
 <th></th>
 <th></th>
 <th></th>
 <tr>
 <tr>
 <td></td>
 <td></td>
 <td></td>
 </tr>
</table>

* AOO管理画面
  * 画面表示時にAOO開催タイトル一覧を表示する。
  * AOO開催タイトルを入力・登録し、データベースに保存する。
  * AOO開催タイトルを編集・更新し、データベースを更新する。
  * AOO開催タイトルを削除し、データベースを削除する。
* AOO参加登録画面
  * 画面表示時にAOO開催タイトル一覧を表示する。
  * 参加・不参加をデータベースに登録し、ステータスを表示する。
* AOOチーム管理画面
  * 画面表示時にAOO開催タイトル一覧を表示する。
  * 参加するメンバーの一覧を取得し、メンバーリストを表示する。
  * 更新ボタンでメンバーリストをデータベースに保存・更新する。
  
### シーケンス図

#### AOO管理画面で登録する
```mermaid

sequenceDiagram
    actor user
    participant admin as 管理者画面
    participant server as APIサーバ
    
    user ->> admin: 画面を表示する 
    admin ->> server: [GET] api/aoo
    server ->> admin: {"id": , "title": ""}
    admin ->> user: AOOの開催タイトルの一覧を表示する
    
    user ->> admin: AOOの開催タイトルを入力し登録する
    admin ->> server: [POST] api/aoo <br> {"title": ""}
    server ->> admin: {"id": "", "title": ""}
    admin ->> user: 登録の完了を通知し、タイトル一覧を更新する

    user ->> admin: AOOの開催タイトルを削除する
    admin ->> server: [DELETE] api/aoo
    server ->> admin: {"id": "", "title": ""}
    admin ->> user: AOOタイトルの削除完了を通知し、タイトル一覧を更新する
    
```

#### ユーザがAOO登録画面で参加登録する
```mermaid

sequenceDiagram
    actor user
    participant aoo_register as AOO登録画面
    participant server as APIサーバ

    user ->> aoo_register: 表示する
    aoo_register ->> server: [GET] api/aoo
    server ->> aoo_register: {"id": "", "title": ""}
    aoo_register ->> user: AOOタイトルの一覧を表示する
    
    user ->> aoo_register: 参加登録する
    aoo_register ->> server: [POST] api/aoo/register
    server ->> aoo_register: {"id": "", "title": ""}
    aoo_register ->> user: 登録完了を通知する
```
#### 管理者が参加登録メンバーのチーム編成を作る
```mermaid

sequenceDiagram
    actor user
    participant aoo_teamboard as AOOチームボード
    participant server as APIサーバ

    user ->> aoo_teamboard: 表示する
    aoo_teamboard ->> server: [GET] api/aoo
    server ->> aoo_teamboard:{"id": "", "title": ""}
    aoo_teamboard ->> user: AOO開催タイトルの一覧を表示する

    user ->> aoo_teamboard: AOOタイトルを選択して反映ボタンを押す
    aoo_teamboard ->> server: [GET] api/aoo/member
    server ->> aoo_teamboard: [{"id": "", "member": ""},]
    aoo_teamboard ->> user: AOOの登録メンバーを表示する

    user ->> aoo_teamboard: AOOのチーム編成を保存する
    aoo_teamboard ->> server: [UPDATE] api/aoo/member
    server ->> aoo_teamboard : 
    aoo_teamboard ->> user: 保存完了を通知する 
    
```

## API

<table>
<tr>
<th>エンドポイント</th>
<th>メソッド</th>
<th>機能</th>
<th>input</th>
<th>response</th>
</tr>
</table>

## データベース設計書
### ER図