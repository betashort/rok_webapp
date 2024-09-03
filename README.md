# rok_webapp

## 環境構築

[参考](https://qiita.com/PRONakahira/items/f507d0f912974d1b8c58)

```bash
docker-compose up -d
```

```bash
docker-compose exec node bash
```

```bash
ng new rok-app
cd rok-app
ng serve --host 0.0.0.0
```

## CLIコマンド一覧

### プロジェクトを作成する
```bash
ng new プロジェクト名
```
### moduleを作成する
```bash 
ng g module app.module

ng g module pages/pages
```

### componentを作成する
```bash
ng g component コンポーネント名
```

ng g component shared/component/profile-form
ng g component shared/component/result-form
ng g component shared/component/status-form
ng g component shared/component/aoo-register-form


ng g component shared/component/header
ng g component shared/component/footer


ng g component pages/component/aoo-register-page
ng g component pages/component/aoo-teamboard-page

### serviceを作成する
```bash
ng g service サービス名
```

### 
```bash
ng serve --host 0.0.0.0
```
## ファオルダ構造
.app
  |-core #別プロジェクトでも使える共通部品
    |-components
    |-service
    |-models
    |-utils
    |-pipes
  |-share #プロジェクト固有の部品
    |-components
        |-result-register-form
    |-service
  |-pages #ページを記述する
    |-components
    |-service
    |-models
    |-constants
    |
  |-
  |-app.module


CREATE TABLE USER(
  UserID INT NOT NULL PRIMARY KEY,
  UserName VARCHAR(100)
);

INSERT INTO USER (UserID, UserName)
VALUES (65885910, 'betashort');

CREATE TABLE KVK_202407_before(
  UserID INT,
  UserName VARCHAR(100),
  UserPower INT,
  UserKillPoint INT,
  RegisterData VARCHAR(100)
);

INSERT INTO KVK_202407 (UserID, UserName, UserPower, UserKillPoint, RegisterData)
VALUES(1, 'betashort', 86396053, 3165314782, '2024-07-01')


  @HostListener("window:unload", ["$event"])
  unloadHandler(event: any) {
    let a: string = "ハンドラーunloadHandler";
    console.log(a);
  }

  @HostListener("window:load", ["$event"])
  loadHandler(event: any) {
    let a: string = "ハンドラーloadHandler";
    console.log(a);
  }

  @HostListener("window:beforeunload", ["$event"])
  beforeUnloadHandler(event: any) {
    let a: string = "ハンドラーbeforeUnloadHandler";
    console.log(a);
  }

  @HostListener("document:visibilitychange", ["$event"])
  visibilityChange(event: any) {
    let a: string = "ハンドラーbeforeUnloadHandler";
    console.log(a);
  }