# 🍳 做饭记录工具

一个可以记录做饭次数以及做了什么菜的网页工具。

## 1. 实现了哪些功能

### 1.1 页面导航

- **底部导航栏**：三个页面快速切换，激活状态高亮显示
  - 🏠 主页 - 新增做饭记录
  - 📋 历史记录 - 功能开发中...
  - 👤 个人中心 - 功能开发中...

### 1.2 主页功能

#### 1.2.1 记录表单

- **菜名输入框**：输入今天做的菜名，支持非空校验
- **菜系下拉选择**：中餐、西餐、日料、其他 四个选项
- **日期时间显示**：页面顶部实时显示当前日期和时间
- **保存按钮**：点击后将记录保存到浏览器本地存储

#### 1.2.2 数据统计

- **今日做饭次数**：统计今天一共做了几顿饭，实时更新
- **激励卡片**：鼓励用户继续保持

#### 1.2.3 最近记录展示

- 展示最近5条做饭记录
- 每条记录显示：序号、菜名、菜系标签、记录时间
- 不同菜系使用不同颜色的标签区分：
  - 中餐 - 红色
  - 西餐 - 橙色
  - 日料 - 粉色
  - 其他 - 蓝色

#### 1.2.4 数据存储

- 所有记录保存在浏览器 `localStorage` 中
- 刷新页面数据不会丢失
- 数据格式：JSON 数组，按时间倒序排列

### 1.3 界面设计

- 温暖的橙黄色主题，符合美食氛围
- 响应式设计，适配移动端和桌面端
- 使用 shadcn/ui 组件库，界面美观统一
- 卡片式布局，层次分明
- 平滑的过渡动画效果

---

## 2. 如何部署并启动项目

### 2.1 环境要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 或 **yarn** >= 1.22.0 或 **pnpm** >= 8.0.0

### 2.2 安装依赖

在项目根目录下执行：

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 2.3 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

启动成功后，终端会显示类似以下信息：

```
  VITE v5.1.0  ready in 200 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

在浏览器中打开 `http://localhost:5173/` 即可访问应用。

### 2.4 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build

# 或使用 pnpm
pnpm build
```

构建完成后，所有文件会生成在 `dist` 目录中。

### 2.5 预览生产构建

```bash
# 使用 npm
npm run preview

# 或使用 yarn
yarn preview

# 或使用 pnpm
pnpm preview
```

### 2.6 部署到服务器

将 `dist` 目录下的所有文件部署到任何静态文件服务器即可，例如：

- **Nginx**
- **Apache**
- **Vercel**
- **Netlify**
- **GitHub Pages**

#### 2.6.1 使用 Vercel 部署（推荐）

1. 安装 Vercel CLI：
```bash
npm i -g vercel
```

2. 在项目根目录执行：
```bash
vercel
```

3. 按照提示完成部署配置

#### 2.6.2 使用 GitHub Pages 部署

1. 安装 `gh-pages`：
```bash
npm install --save-dev gh-pages
```

2. 在 `package.json` 中添加：
```json
{
  "homepage": "https://<your-username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. 执行部署：
```bash
npm run deploy
```

### 2.7 常见问题

**Q: 启动时提示端口被占用怎么办？**

A: 修改 `vite.config.ts`，添加端口配置：

```typescript
export default defineConfig({
  server: {
    port: 3000, // 修改为其他端口
  },
  // ... 其他配置
})
```

**Q: 数据保存在哪里？清除浏览器缓存会丢失吗？**

A: 数据保存在浏览器的 `localStorage` 中，清除浏览器缓存或更换浏览器会导致数据丢失。

**Q: 可以在多个设备间同步数据吗？**

A: 当前版本仅支持本地存储，不支持多设备同步。后续版本可能会添加云同步功能。

**Q: 如何清除所有记录？**

A: 在浏览器开发者工具（F12）的 Application → Local Storage 中，删除 `cooking_records` 键即可。

---

## 3. 项目文档

- [前端设计文档](./frontdesign.md) - 页面布局、组件拆分、数据流转
- [技术框架文档](./framework.md) - 技术栈、依赖、目录结构、数据格式
