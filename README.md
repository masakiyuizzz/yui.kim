# `yui.kim` 导航主页
> 真咲唯的资源导航主页，连接个人作品集和部分网页
> 
> 版本：`0.0.3` 最后修改时间：`2026-05-16` 审核人：`MasakiYui`
## 项目结构
```bash
yui.kim/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── config.js       # 配置文件（搜索引擎、打字速度、卡片数据）
│   ├── search.js       # 搜索模块
│   ├── typing.js       # 打字效果模块
│   ├── cards.js        # 卡片渲染模块
│   └── main.js         # 入口文件
├── assets/             # 资源文件
├── my-favicon/         # 自定义图标文件
├── LICENSE             # 许可证文件
└── README.md           # 项目说明
```
## 自定义配置
### 修改卡片内容
在 `js/config.js` 中修改 `CARDS_DATA` 对象：
```javascript
const CARDS_DATA = {
    navigation: {
        title: '快速导航',
        cards: [
            {
                url: 'https://example.com',
                icon: 'assets/icon.svg',
                iconAlt: '图标描述',
                title: '网站名称',
                description: '网站描述'
            }
        ]
    }
};
```
### 添加新分类
```javascript
const CARDS_DATA = {
    newSection: {
        title: '新分类',
        cards: [
            // 卡片数据
        ]
    }
};
```
### 修改搜索引擎
在 `js/config.js` 中修改 `CONFIG.search`：
```javascript
const CONFIG = {
    search: {
        engine: 'bing',
        engines: {
            bing: {
                name: 'Bing',
                url: 'https://www.bing.com/search?q='
            },
            google: {
                name: 'Google',
                url: 'https://www.google.com/search?q='
            }
        }
    }
};
```
### 修改打字效果
```javascript
const CONFIG = {
    typing: {
        text: 'yui.kim',      // 打字内容
        speed: 150,           // 每个字符间隔（毫秒）
        pauseDuration: 3000,  // 打完后停留时间（毫秒）
        startDelay: 500       // 开始延迟（毫秒）
    }
};
```
## 部署说明
1. **本地部署**：下载压缩包直接打开 `index.html` 即可使用
2. **服务器部署**：上传到 Web 服务器即可
3. **浏览器主页**：可设置为浏览器默认主页
## 相关项目
- [docs.yui.kim](https://docs.yui.kim) - 文档笔记中心
## 许可证
本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。
## 致谢
- 设计灵感来自终端命令行界面
- 图标来源：[Remix Icon](https://remixicon.com/)、[svgl](https://svgl.app/)
- 感谢所有贡献者和用户反馈
---
**Made with by Masakiyui | [yui.kim](https://yui.kim)**
