# 橘浦漁業協同組合 公式サイト 運用メモ
- 入口ファイル: index.html（編集 → Commit で公開反映）
- 画像: /img 配下。差し替え時はファイル名の大文字小文字に注意。
- お知らせ: #news セクション内の <li> を複製。新しいものを上に。
- 連絡先/住所: #contact / #access を書き換え。
- 反映手順: 変更 → Pull Request（レビュー1名以上）→ main へマージで本番公開。
- 独自ドメイン: CNAME を www.tachibanaura-gyokyo.jp。DNS で www の CNAME を <orgまたはユーザー名>.github.io に設定。MX には触れない。
