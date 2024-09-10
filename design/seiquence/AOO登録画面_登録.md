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