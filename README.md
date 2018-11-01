# 確認手順

```sh
docker-compose run app /bin/bash

# appディレクトリ内で
yarn install
yarn start


# 終了時 and reset
docker-compose down -v
```

上記コマンドを実行することでDBにデータが挿入される

DBにアクセスしたい場合は `3306` ポートを開けているのでGUIツールを使用する方法や
docker-composeを動かしている状態で別のコンソールを開き、以下のコマンドを使用することでデータを確認できる

```sh
docker-compose exec db mysql -u root -p
```

# Databaseのユーザー設定

user: root
password: test
database: test
