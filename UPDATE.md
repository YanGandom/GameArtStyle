# 累计修复：更新到 v1.1.2

适用：从 v1.0.0 升级，或漏过中间版本的安装。
已核对 YanGandom/GameArtStyle 的 main 分支：新版页面与旧版核心脚本、数据混用，且缺少103张新增图片。本包补齐从旧版至v1.1.2的所有变更，并补上仓库缺少的基础文件；不是重新交付全站。

## 使用方式

1. 解压本包，将内容合并到本地 Git 仓库根目录。index.html 应直接位于仓库根目录；assets 内的文件按同名路径覆盖，保留未包含在本包中的旧图片。
2. 提交并推送这些解压后的文件，不要上传ZIP本身，也不要只上传外层文件夹。建议用GitHub Desktop一次提交，避免网页批量上传遗漏文件。
3. 等待部署完成后刷新网站，检查休闲榜101款、数字编号、游戏标签配色与样本列表色块。

本包不自动提交、推送或部署。不要以release-manifest.json中的版本号代替实际文件核对。

以下为累计文件清单：

# 更新到 v1.1.2

适用基线：v1.0.0。

将包内文件按同名路径覆盖仓库；不要上传ZIP文件本身。修改摘要见 CHANGELOG.md。

## 新增／替换文件

- `.gitignore`
- `.nojekyll`
- `AGENTS.md`
- `assets/css/art-explorer.css`
- `assets/images/monopoly-go-1.webp`
- `assets/images/monopoly-go-2.webp`
- `assets/images/monopoly-go-3.webp`
- `assets/images/palette-g-1.webp`
- `assets/images/palette-g-10.webp`
- `assets/images/palette-g-100.webp`
- `assets/images/palette-g-11.webp`
- `assets/images/palette-g-12.webp`
- `assets/images/palette-g-13.webp`
- `assets/images/palette-g-14.webp`
- `assets/images/palette-g-15.webp`
- `assets/images/palette-g-16.webp`
- `assets/images/palette-g-17.webp`
- `assets/images/palette-g-18.webp`
- `assets/images/palette-g-19.webp`
- `assets/images/palette-g-2.webp`
- `assets/images/palette-g-20.webp`
- `assets/images/palette-g-21.webp`
- `assets/images/palette-g-22.webp`
- `assets/images/palette-g-23.webp`
- `assets/images/palette-g-24.webp`
- `assets/images/palette-g-25.webp`
- `assets/images/palette-g-26.webp`
- `assets/images/palette-g-27.webp`
- `assets/images/palette-g-28.webp`
- `assets/images/palette-g-29.webp`
- `assets/images/palette-g-3.webp`
- `assets/images/palette-g-30.webp`
- `assets/images/palette-g-31.webp`
- `assets/images/palette-g-32.webp`
- `assets/images/palette-g-33.webp`
- `assets/images/palette-g-34.webp`
- `assets/images/palette-g-35.webp`
- `assets/images/palette-g-36.webp`
- `assets/images/palette-g-37.webp`
- `assets/images/palette-g-38.webp`
- `assets/images/palette-g-39.webp`
- `assets/images/palette-g-4.webp`
- `assets/images/palette-g-40.webp`
- `assets/images/palette-g-41.webp`
- `assets/images/palette-g-42.webp`
- `assets/images/palette-g-43.webp`
- `assets/images/palette-g-44.webp`
- `assets/images/palette-g-45.webp`
- `assets/images/palette-g-46.webp`
- `assets/images/palette-g-47.webp`
- `assets/images/palette-g-48.webp`
- `assets/images/palette-g-49.webp`
- `assets/images/palette-g-5.webp`
- `assets/images/palette-g-50.webp`
- `assets/images/palette-g-51.webp`
- `assets/images/palette-g-52.webp`
- `assets/images/palette-g-53.webp`
- `assets/images/palette-g-54.webp`
- `assets/images/palette-g-55.webp`
- `assets/images/palette-g-56.webp`
- `assets/images/palette-g-57.webp`
- `assets/images/palette-g-58.webp`
- `assets/images/palette-g-59.webp`
- `assets/images/palette-g-6.webp`
- `assets/images/palette-g-60.webp`
- `assets/images/palette-g-61.webp`
- `assets/images/palette-g-62.webp`
- `assets/images/palette-g-63.webp`
- `assets/images/palette-g-64.webp`
- `assets/images/palette-g-65.webp`
- `assets/images/palette-g-66.webp`
- `assets/images/palette-g-67.webp`
- `assets/images/palette-g-68.webp`
- `assets/images/palette-g-69.webp`
- `assets/images/palette-g-7.webp`
- `assets/images/palette-g-70.webp`
- `assets/images/palette-g-71.webp`
- `assets/images/palette-g-72.webp`
- `assets/images/palette-g-73.webp`
- `assets/images/palette-g-74.webp`
- `assets/images/palette-g-75.webp`
- `assets/images/palette-g-76.webp`
- `assets/images/palette-g-77.webp`
- `assets/images/palette-g-78.webp`
- `assets/images/palette-g-79.webp`
- `assets/images/palette-g-8.webp`
- `assets/images/palette-g-80.webp`
- `assets/images/palette-g-81.webp`
- `assets/images/palette-g-82.webp`
- `assets/images/palette-g-83.webp`
- `assets/images/palette-g-84.webp`
- `assets/images/palette-g-85.webp`
- `assets/images/palette-g-86.webp`
- `assets/images/palette-g-87.webp`
- `assets/images/palette-g-88.webp`
- `assets/images/palette-g-89.webp`
- `assets/images/palette-g-9.webp`
- `assets/images/palette-g-90.webp`
- `assets/images/palette-g-91.webp`
- `assets/images/palette-g-92.webp`
- `assets/images/palette-g-93.webp`
- `assets/images/palette-g-94.webp`
- `assets/images/palette-g-95.webp`
- `assets/images/palette-g-96.webp`
- `assets/images/palette-g-97.webp`
- `assets/images/palette-g-98.webp`
- `assets/images/palette-g-99.webp`
- `assets/js/art-explorer-core.js`
- `assets/js/art-explorer-ui.js`
- `assets/js/data.js`
- `CHANGELOG.md`
- `index.html`
- `package.json`
- `palette-reference.html`
- `README.md`
- `tests/verify-interactions.cjs`
- `tests/verify-palettes.cjs`
- `tests/verify-site.cjs`

## 删除文件

无。

## 验证

运行 `npm test`；发布前在浏览器检查主页、数量滑杆、名称显隐、悬停简介与全屏。
自动检查不等同于真实浏览器或线上部署验证。
