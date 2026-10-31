# LexSophia（レクソフィア）

上智発の TOEIC® L&R 学習・スコア診断ツール。ブラウザだけで使える無料の Web アプリです。

🌐 **https://mylexsophia.com**

![LexSophia](ogp.png)

## できること

- **TOEIC スコア診断・予測** — 解答結果から予測スコアを算出します（※予測スコアは非公式の目安です）
- **Part 別リスニングドリル**（全問に日本語訳と解説つき、音声は繰り返し再生可能）
  - Part 1 写真描写：12問
  - Part 2 応答：25問
  - Part 3 会話：7セット・21問
  - Part 4 トーク：8セット・24問
- **Part 5 文法・語彙ドリル**（専用ページ）
- **無料ミニテスト**

## サイト構成

| パス | 内容 |
|---|---|
| `index.html` | メインアプリ（診断・ドリル本体） |
| `toeic-score-predictor/` | スコア予測の解説ページ |
| `toeic-free-test/` | 無料テストのページ |
| `toeic-part5/` | Part 5 ドリルのページ |
| `audio/` | リスニング音声（MP3） |
| `img/` | Part 1 の写真などの画像 |

## 技術メモ

- GitHub Pages でホスティング（カスタムドメイン: mylexsophia.com）
- 静的サイト。アプリ本体は単一の HTML ファイルに CSS / JavaScript / 問題データを内包しています

## クレジット

- Part 1 の写真の一部に Pexels のフリー写真を使用しています
- リスニング音声は TTS（音声合成）で生成しています

## 免責

- 本ツールの予測スコアは独自の換算による目安であり、公式スコアを保証するものではありません
- TOEIC is a registered trademark of ETS. This product is not endorsed or approved by ETS.
