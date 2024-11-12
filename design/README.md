# 設計書
1. [システム設計 - ソフトウェア構成 -](#システム設計---ソフトウェア構成--)
2. [ソフトウェア設計 - 機能 -](#ソフトウェア設計---機能--)
   1. [ログインページ](#ログインページ)
      1. [機能一覧](#機能一覧)
      2. [ユーザ登録](#ユーザ登録)
      3. [ログイン](#ログイン)
      4. [ログアウト](#ログアウト)
      5. [ユーザ情報の更新](#ユーザ情報の更新)
   2. [KVK戦績登録ページ](#kvk戦績登録ページ)
   3. [AOO参加登録ページ](#aoo参加登録ページ)
      1. [機能一覧](#機能一覧-1)
         1. [シーケンス図](#シーケンス図)
      2. [入力フォーム](#入力フォーム)
      3. [シーケンス図](#シーケンス図-1)
   4. [AOO参加登録画面](#aoo参加登録画面)
      1. [AOOチームボードページ](#aooチームボードページ)
         1. [管理者が参加登録メンバーのチーム編成を作る](#管理者が参加登録メンバーのチーム編成を作る)
   5. [管理者ページ](#管理者ページ)
      1. [機能一覧](#機能一覧-2)
3. [API定義書](#api定義書)
4. [データベース設計書](#データベース設計書)
   1. [ER図](#er図)

## システム設計 - ソフトウェア構成 -
![システム](./img/ROKアプリケーション.jpg)
## ソフトウェア設計 - 機能 -

### ログインページ

#### 機能一覧
<table>
<tr>
<th></th>
<th></th>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</table>

#### ユーザ登録

```mermaid

sequenceDiagram
    actor user
    participant front as フロントエンド
    participant server as APIサーバ
    
    user ->> front: ユーザ登録する 
    front ->> server: [POST] api/auth/signup <br> {"userId": , "userName": "", "password": "", "confirmPassword": ""}
    server ->> front: {"status": ""}
    front ->> user: ユーザ登録成功/失敗
    
```

#### ログイン

```mermaid
sequenceDiagram
    actor user
    participant front as フロントエンド
    participant server as APIサーバ

    user ->> front: ログインする
    front ->> server: [POST] api/auth/login <br> {"userId": "", "password": ""}
    server ->> front: {"userId": "", "userName": "", "role":""}
    front ->> front: sessionStrage <br>{"userId": "", "userName": "", "role":""}
    front ->> user: ダッシュボードページを表示する
```

#### ログアウト

```mermaid
sequenceDiagram
    actor user
    participant front as フロントエンド
    participant server as APIサーバ

    user ->> front: ログアウトする
    front ->> front: Clear SessionStrage <br> {"userId": "", "userName": "", "role":""}
    front ->> user: ダッシュボードページを表示する
```

#### ユーザ情報の更新

```mermaid

sequenceDiagram
    actor user
    participant front as フロントエンド
    participant server as APIサーバ
    
    user ->> front: ユーザ情報を更新する 
    front ->> server: [POST] api/auth/update/ <br> {"userId": , "userName": "", "password": "", "confirmPassword": ""}
    server ->> front: {"status": ""}
    front ->> user: ユーザ情報の更新成功/失敗
    
```

### KVK戦績登録ページ

### AOO参加登録ページ
#### 機能一覧
<table>
  <tr>
    <th>機能</th>
    <th>実装</th>
  </tr>
  <tr>
    <td>画面表示時にAOO開催タイトル一覧を表示する。</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>AOO開催タイトルを編集・更新し、データベースを更新する。</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>AOO開催タイトルを削除し、データベースを削除する。</td>
    <td>✅</td>
  </tr>
</table>

##### シーケンス図
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
#### 入力フォーム

#### シーケンス図


---
### AOO参加登録画面

<table>
  <tr>
    <th>機能</th>
    <th>実装</th>
  </tr>
  <tr>
    <td>画面表示時にAOO開催タイトル一覧を表示する。</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>参加・不参加をデータベースに登録し、ステータスを表示する。</td>
    <td>✅</td>
  </tr>
</table>

#### AOOチームボードページ

<table>
  <tr>
    <th>機能</th>
    <th>実装</th>
  </tr>
  <tr>
    <td>画面表示時にAOO開催タイトル一覧を表示する。</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>参加するメンバーの一覧を取得し、メンバーリストを表示する。</td>
    <td>✅</td>
  </tr>
  <tr>
    <td>更新ボタンでメンバーリストをデータベースに保存・更新する。</td>
    <td>✅</td>
  </tr>
</table>

##### 管理者が参加登録メンバーのチーム編成を作る
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

### 管理者ページ

#### 機能一覧

<table>
  <tr>
    <th>機能</th>
    <th></th>
  </tr>
  <tr>
    <td>ユーザ情報を管理する</td>
    <td></td>
  </tr>
    <tr>
    <td>AOO開催日を登録し、登録ページを公開する</td>
    <td></td>
  </tr>
  </tr>
    <tr>
    <td>KVKの登録ページを公開する</td>
    <td></td>
  </tr>
</table>


## API定義書

<table>
  <tr>
    <th>目的</th>
    <th>エンドポイント</th>
    <th>メソッド</th>
    <th>パラメータ</th>
    <th>response</th>
  </tr>
  <tr>
    <td>ユーザ登録する</td>
    <td>https://rok-api.betashort.com/api/auth/signup</td>
    <td>POST</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role", "password":"password"}</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role"}</td>
  </tr>
  <tr>
    <td>ユーザ更新する</td>
    <td>https://rok-api.betashort.com/api/auth/signup:id</td>
    <td>PUT</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role", "password":"password"}</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role"}</td>
  </tr>
  <tr>
    <td>ユーザ一覧を取得する</td>
    <td>https://rok-api.betashort.com/api/auth/users</td>
    <td>GET</td>
    <td></td>
    <td>{"userId":"userId", "userName":"userName", "role":"role"}</td>
  </tr>
  <tr>
    <td>ログインする</td>
    <td>https://rok-api.betashort.com/api/auth/signin</td>
    <td>POST</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role", "password":"password"}</td>
    <td>{"userId":"userId", "userName":"userName", "role":"role"}</td>
  </tr>
  <tr>
    <td>KVKの戦績を登録する</td>
    <td>https://rok-api.betashort.com/api/kvk/user-result-register</td>
    <td>POST</td>
    <td>{}</td>
    <td>{"status":}</td>
  </tr>
  <tr>
    <td>KVKの戦績を更新する</td>
    <td>https://rok-api.betashort.com/kvk/user-result-update</td>
    <td>PATCH</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>ユーザのKVKの戦績を取得する</td>
    <td>https://rok-api.betashort.com/api/kvk/user-result:id</td>
    <td>GET</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>全ユーザのKVKの戦績を取得する</td>
    <td>https://rok-api.betashort.com/api/kvk/users-result</td>
    <td>GET</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>全ユーザのKVKの戦績を更新する</td>
    <td>https://rok-api.betashort.com/api/kvk/users-result</td>
    <td>PATCH</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>AOOの参加登録をする</td>
    <td>https://rok-api.betashort.com/api/aoo/user-participant</td>
    <td>PUT</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>AOOの開催日指定で参加メンバーを取得する</td>
    <td>https://rok-api.betashort.com/api/aoo/users-participant:holdId</td>
    <td>GET</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
  <tr>
    <td>AOOの開催日指定で参加メンバー情報を更新する</td>
    <td>https://rok-api.betashort.com/api/aoo/users-participant:holdId</td>
    <td>PATCH</td>
    <td>{}</td>
    <td>{}</td>
  </tr>
</table>

## データベース設計書


### ER図

