# 文化回响（Cultural Echoes）

**文化回响**是一个响应式活动网站，由 Tiger Brokers（老虎证券）与 The Cloud Chamber Singers 联合呈现。网站用于展示音乐会信息、合唱团介绍、购票渠道、精彩曲目及合作伙伴信息，并提供中英双语内容体验。

## 项目功能

- 支持桌面端、平板和移动端的响应式布局
- 使用 React Router 实现前端页面路由
- 展示音乐会介绍、演出信息和曲目亮点
- 提供合唱团介绍、演出相册及视频区域
- 展示购票渠道、活动福利和参与步骤
- 提供 Tiger Fintech 合作伙伴信息
- 使用可复用的页眉、页脚和页面布局组件
- 通过 Vite 管理和加载静态图片资源

## 技术栈

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- CSS

## 项目结构

```text
webpage1/
├── cultural_echoes_react/
│   ├── public/
│   │   └── assets/              # 图片及其他静态资源
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/          # 公共页眉、页脚和页面布局
│   │   ├── pages/
│   │   │   ├── Choir/           # 合唱团页面
│   │   │   ├── Home/            # 首页
│   │   │   ├── Ticket/          # 购票信息页面
│   │   │   └── TigerFintech/    # Tiger Fintech 页面
│   │   ├── styles/              # 全局样式
│   │   ├── types/               # 公共 TypeScript 类型
│   │   ├── App.tsx              # 应用路由与主结构
│   │   └── main.tsx             # 应用入口
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## 快速开始

### 环境要求

请先安装以下开发环境：

- [Node.js](https://nodejs.org/) 18 或更高版本
- npm

### 安装项目

```bash
git clone <仓库地址>
cd webpage1/cultural_echoes_react
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动成功后，Vite 会在终端中显示本地访问地址，通常为：

```text
http://localhost:5173
```

## 可用命令

请在 `cultural_echoes_react` 目录中运行以下命令：

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动 Vite 开发服务器 |
| `npm run build` | 执行 TypeScript 检查并生成生产版本 |
| `npm run preview` | 在本地预览生产版本 |
| `npm run typecheck` | 执行 TypeScript 类型检查，不生成构建文件 |

## 页面路由

| 路由 | 页面说明 |
| --- | --- |
| `/` | “文化回响”活动首页 |
| `/choir` | The Cloud Chamber Singers 合唱团介绍 |
| `/ticket` | 购票渠道及活动福利 |
| `/tiger-fintech` | Tiger Fintech 合作伙伴信息 |

## 修改页面内容

各页面的主要内容位于：

```text
cultural_echoes_react/src/pages/
```

公共导航栏、页脚和页面布局位于：

```text
cultural_echoes_react/src/components/layout/
```

修改对应的 `.tsx` 文件即可更新文字、链接和页面结构。

## 管理图片资源

请将图片存放在：

```text
cultural_echoes_react/public/assets/
```

在 React 组件中使用以 `/assets/` 开头的绝对路径引用图片：

```tsx
<img src="/assets/example.jpg" alt="图片内容说明" />
```

替换图片时，建议保持文件路径不变；如果更改了文件名，请同步更新组件中的引用路径。

## 修改样式

网站的全局颜色、字体、间距、组件样式和响应式规则主要定义在：

```text
cultural_echoes_react/src/styles/global.css
```

修改样式后，可通过开发服务器实时查看效果。

## 生产环境构建

执行以下命令生成优化后的生产版本：

```bash
npm run build
```

构建文件将输出到：

```text
cultural_echoes_react/dist/
```

可以在本地预览生产版本：

```bash
npm run preview
```

本项目使用浏览器端路由。部署到生产环境时，需要将服务器配置为：当请求的路径不存在时，统一返回 `index.html`，以确保直接访问 `/choir`、`/ticket` 等页面时能够正常加载。

## 版权说明

本项目为私有项目。网站中的活动内容、品牌标识、文字及媒体资源，其版权归各自权利人所有。
