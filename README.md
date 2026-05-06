# `yui.kim` 导航主页
> 真咲唯的资源导航主页，连接个人作品集和部分网页
> 
> 版本：`0.0.1-init` 最后修改时间：`2026-05-06` 审核人：`MasakiYui`

## 项目结构

```
yui.kim/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件（统一变量管理）
├── js/
│   └── main.js         # 交互逻辑（搜索、打字效果）
├── assets/             # 资源文件
│   ├── bilibili-fill.svg
│   └── netease-cloud-music-line.svg
├── my-favicon/         # 自定义图标文件
├── LICENSE             # 许可证文件
└── README.md           # 项目说明
```

## 样式变量系统

所有样式通过 CSS 变量统一管理：

```css
:root {
    --color-bg: #fafafa;           /* 背景色 */
    --color-accent: #059669;       /* 强调色（终端绿） */
    --color-text-primary: #1e293b; /* 主文字色 */
    --radius-md: 10px;             /* 圆角 */
    --shadow-hover: ...;           /* 悬浮阴影 */
    --transition-normal: 0.25s ease; /* 过渡动画 */
}
```

## 自定义配置

### 添加新卡片

在 `index.html` 的对应分类中添加：

```html
<a href="https://example.com" class="card" target="_blank">
    <div class="card-header">
        <span class="card-icon">
            <img src="assets/icon.svg" alt="图标" width="20" height="20">
        </span>
        <h3 class="card-title">卡片标题</h3>
    </div>
    <p class="card-description">卡片描述</p>
    <div class="card-footer">
        <span class="card-link">访问 &rarr;</span>
    </div>
</a>
```

### 添加新分类

```html
<section class="cards-section">
    <h2 class="section-title">
        <span class="section-prefix"># </span>
        新分类名称
    </h2>
    <div class="cards-grid">
        <!-- 卡片内容 -->
    </div>
</section>
```

### 修改搜索引擎

在 `js/main.js` 中修改：

```javascript
window.open('https://www.bing.com/search?q=' + encodedQuery, '_blank');
```

## 部署说明

1. **本地部署**：直接打开 `index.html` 即可使用
2. **服务器部署**：上传到 Web 服务器即可
3. **浏览器主页**：设置为浏览器默认主页

## 相关项目

- [docs.yui.kim](https://docs.yui.kim) - 文档笔记中心
- [GitHub 仓库](https://github.com/masakiyuizzz/yui.kim) - 项目源代码

## 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

## 致谢

- 设计灵感来自终端命令行界面
- 图标来源：Remix Icon、SVG Repo
- 感谢所有贡献者和用户反馈

---

**Made with by Masakiyui | [yui.kim](https://yui.kim)**

[def]: #