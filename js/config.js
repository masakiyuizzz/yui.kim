const CONFIG = {
    search: {
        engine: 'bing',
        engines: {
            bing: {
                name: 'Bing',
                url: 'https://www.bing.com/search?q='
            }
        }
    },
    
    typing: {
        text: 'yui.kim',
        speed: 150,
        pauseDuration: 3000,
        startDelay: 500
    },
    
    focus: {
        delay: 100
    }
};

const CARDS_DATA = {
    navigation: {
        title: '快速导航',
        cards: [
            {
                url: 'https://docs.yui.kim',
                icon: 'assets/markdown-line.svg',
                iconAlt: '文档笔记中心',
                title: 'docs.yui.kim',
                description: '文档笔记中心，存放技术文档、学习笔记和个人知识库'
            },
            {
                url: 'https://mutsumi.online',
                icon: 'assets/delete-bin-line.svg',
                iconAlt: '废弃原始网站',
                title: 'mutsumi.online',
                description: '原始项目，已清空仓库并存档到`/文物/mutsumi.online/`'
            }
        ]
    },
    
    friends: {
        title: '友情链接',
        cards: [
            {
                url: 'https://www.bilibili.com',
                icon: 'assets/bilibili-fill.svg',
                iconAlt: 'Bilibili',
                title: 'www.bilibili.com',
                description: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili'
            },
            {
                url: 'https://music.163.com',
                icon: 'assets/netease-cloud-music-line.svg',
                iconAlt: '网易云音乐',
                title: 'music.163.com',
                description: '网易云音乐'
            },
            {
                url: 'https://github.com',
                icon: 'assets/github-fill.svg',
                iconAlt: 'Github',
                title: 'github.com',
                description: 'Github代码托管平台'
            },
            {
                url: 'https://dash.cloudflare.com',
                icon: 'assets/cloudflare.svg',
                iconAlt: 'Cloudflare',
                title: 'dash.cloudflare.com',
                description: 'Cloudflare云服务'
            },
            {
                url: 'https://aistudio.xiaomimimo.com',
                icon: 'assets/ai.svg',
                iconAlt: 'mimo',
                title: 'aistudio.xiaomimimo.com',
                description: '小米mimo大模型'
            },
            {
                url: 'https://chat.deepseek.com',
                icon: 'assets/deepseek.svg',
                iconAlt: 'deepseek',
                title: 'chat.deepseek.com',
                description: 'DeepSeek大模型'
            },
            {
                url: 'https://platform.xiaomimimo.com',
                icon: 'assets/ai.svg',
                iconAlt: 'mimo-api',
                title: 'platform.xiaomimimo.com',
                description: '小米mimo-api'
            },
            {
                url: 'https://platform.deepseek.com',
                icon: 'assets/deepseek.svg',
                iconAlt: 'deepseek-api',
                title: 'platform.deepseek.com',
                description: 'DeepSeek-api'
            }
        ]
    },
    
    tools: {
        title: '小工具',
        cards: [
            {
                url: 'https://metronome-online.com',
                icon: 'assets/Metronome.png',
                iconAlt: 'metronome-online',
                title: 'metronome-online.com',
                description: '在线节拍器'
            },
            {
                url: 'https://lkssite.vip',
                icon: 'assets/user-star-line.svg',
                iconAlt: 'LKs',
                title: 'lkssite.vip',
                description: '-LKs-《良心到难以置信的网站推荐》'
            }
        ]
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, CARDS_DATA };
}
