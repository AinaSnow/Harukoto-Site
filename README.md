# 晴词 · Harukoto 介绍网站

纯静态单页：`index.html` ＋ `assets/`（`style.css`、`site.js`、`favicon.svg`）。无构建步骤、无外部依赖（系统字体，不加载任何 CDN）。

内容事实取自 Meowpuut 仓库的 README、docs/USER_GUIDE.md、TRIAL.md、RELEASE_NOTES.md、ENGINE_CN02.md、FF14_FULL_DICTIONARY.md（以 0.4.4-alpha.37 为准）。新版本发布时需同步：首屏版本号、性能数据、FF14 词条数、已知限制。

## 本地预览

直接双击 `index.html` 即可。或起一个本地服务器：

```powershell
python -m http.server 8080 --directory E:\SapphireServer\HarukotoSite
```

然后打开 http://localhost:8080 。

## 部署

所有链接都是相对路径，可放在任意子路径下。

- **GitHub Pages**（计划用独立仓库）：本目录内容放在仓库根目录（含 `.nojekyll`），Settings → Pages → Deploy from a branch，选 `main` 与 `/ (root)`。线上地址：https://ainasnow.github.io/Harukoto-Site/ （仓库 AinaSnow/Harukoto-Site；`index.html` 的 `canonical` 与 `og:url` 指向此地址，换域名时一起改）。
- **其他静态托管**（Cloudflare Pages、Netlify、Gitea Pages 等）：发布目录设为本目录，无构建命令。

## 说明

- 深浅色：默认跟随系统，右上角按钮可手动切换（记在浏览器本地）。
- 视觉跟随 UI-04 候选窗风格：晴空蓝 `#2A78D0`、Fluent 面板与胶囊形状；候选窗示意的配色取自 `Windows/CandidateTheme.cs`，改了那边的配色要同步 `style.css` 里的 `.cw` 一段。
- 候选窗、SmartScreen、独立引擎图均为 CSS／SVG 示意，不是真实截图。
- 已按 alpha.37 公开发布更新（新候选窗风格、词库管理器去 Python、界面热换代、检查更新均为已发布、待实机）。
- 未实机验证的内容（游戏内输入、真实应用体感等）在页面上标为“测试中”。
