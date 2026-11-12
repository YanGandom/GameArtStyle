# 更新到 v1.2.0

适用基线：v1.1.2；已按 YanGandom/GameArtStyle 的 main 分支实际文件核对（2026-11-12）。

本包包含固定X轴、Y轴指标详情及说明更新，并补齐仓库缺少的基础文件；没有重新打包图片。

解压后将包内内容按同名路径合并覆盖仓库根目录，保留未包含的旧文件，再提交并推送；不要上传ZIP文件本身或多套一层文件夹。修改摘要见 CHANGELOG.md。

## 新增／替换文件

- `.gitignore`
- `.nojekyll`
- `AGENTS.md`
- `assets/css/art-explorer.css`
- `assets/js/art-explorer-ui.js`
- `CHANGELOG.md`
- `index.html`
- `package.json`
- `README.md`
- `tests/verify-interactions.cjs`

## 删除文件

无。

## 验证

运行 `npm test`；发布前在浏览器检查主页、数量滑杆、名称显隐、悬停简介与全屏。
自动检查不等同于真实浏览器或线上部署验证。
