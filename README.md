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
ng g モジュール名 --module app.module
```

### componentを作成する
```bash
ng g component コンポーネント名
```

ng g component shared/component/profile-form

ng g component shared/component/result-form
ng g component shared/component/status-form
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
