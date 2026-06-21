# 技术框架文档

## 1. 技术栈

### 1.1 核心框架与库

| 技术 | 版本 | 用途 |
|------|------|------|
| **React** | ^18.2.0 | 前端UI框架，用于构建用户界面 |
| **TypeScript** | ^5.3.3 | 为JavaScript提供类型系统，增强代码可维护性 |
| **Vite** | ^5.1.0 | 下一代前端构建工具，提供极速的开发体验 |
| **React Router DOM** | ^6.22.0 | React路由库，用于单页应用的页面导航 |
| **Tailwind CSS** | ^3.4.1 | 实用优先的CSS框架，用于快速构建UI |

### 1.2 UI组件库

| 技术 | 版本 | 用途 |
|------|------|------|
| **shadcn/ui** | - | 高质量的可定制UI组件库，基于Radix UI和Tailwind CSS |
| **Radix UI React Slot** | ^1.0.2 | Radix UI的基础组件，用于shadcn/ui的Button组件 |
| **Lucide React** | ^0.344.0 | 精美的图标库，提供一致风格的图标 |

### 1.3 工具库

| 技术 | 版本 | 用途 |
|------|------|------|
| **date-fns** | ^3.3.1 | 现代化的JavaScript日期工具库，用于日期格式化和处理 |
| **clsx** | ^2.1.0 | 用于条件性地组合className |
| **tailwind-merge** | ^2.2.0 | 用于智能合并Tailwind CSS类名，避免冲突 |
| **class-variance-authority** | ^0.7.0 | 用于创建带有变体的组件样式 |

### 1.4 开发工具

| 技术 | 版本 | 用途 |
|------|------|------|
| **@types/react** | ^18.2.55 | React的TypeScript类型定义 |
| **@types/react-dom** | ^18.2.19 | React DOM的TypeScript类型定义 |
| **@types/node** | ^20.11.0 | Node.js的TypeScript类型定义 |
| **@vitejs/plugin-react** | ^4.2.1 | Vite的React插件，支持Fast Refresh |
| **autoprefixer** | ^10.4.17 | PostCSS插件，自动添加CSS浏览器前缀 |
| **postcss** | ^8.4.35 | CSS转换工具 |

---

## 2. 所有安装的npm依赖包

### 2.1 生产依赖 (dependencies)

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.22.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.2.0",
  "class-variance-authority": "^0.7.0",
  "lucide-react": "^0.344.0",
  "date-fns": "^3.3.1",
  "@radix-ui/react-slot": "^1.0.2"
}
```

### 2.2 开发依赖 (devDependencies)

```json
{
  "@types/react": "^18.2.55",
  "@types/react-dom": "^18.2.19",
  "@types/node": "^20.11.0",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.17",
  "postcss": "^8.4.35",
  "tailwindcss": "^3.4.1",
  "typescript": "^5.3.3",
  "vite": "^5.1.0"
}
```

---

## 3. 项目目录结构

```
gyq-00002-1/
├── public/                      # 静态资源目录
│   └── vite.svg                # Vite默认图标
├── src/                         # 源代码目录
│   ├── components/              # 组件目录
│   │   ├── ui/                 # shadcn/ui基础组件
│   │   │   ├── badge.tsx       # 徽章组件
│   │   │   ├── button.tsx      # 按钮组件
│   │   │   ├── card.tsx        # 卡片组件
│   │   │   ├── input.tsx       # 输入框组件
│   │   │   ├── label.tsx       # 标签组件
│   │   │   └── select.tsx      # 下拉选择组件
│   │   ├── BottomNav.tsx       # 底部导航栏组件
│   │   ├── CookingForm.tsx     # 做饭记录表单组件
│   │   ├── RecentRecords.tsx   # 最近记录列表组件
│   │   └── StatsCard.tsx       # 统计卡片组件
│   ├── lib/                    # 工具库目录
│   │   └── utils.ts            # 通用工具函数（cn等）
│   ├── pages/                  # 页面组件目录
│   │   ├── Home.tsx            # 主页
│   │   ├── History.tsx         # 历史记录页
│   │   └── Profile.tsx         # 个人中心页
│   ├── types/                  # TypeScript类型定义目录
│   │   └── index.ts            # 全局类型定义
│   ├── utils/                  # 业务工具目录
│   │   └── storage.ts          # localStorage存储工具
│   ├── App.tsx                 # 应用根组件
│   ├── index.css               # 全局样式（含Tailwind指令）
│   └── main.tsx                # 应用入口文件
├── frontdesign.md              # 前端设计文档
├── framework.md                # 技术框架文档（本文件）
├── index.html                  # HTML入口文件
├── package.json                # 项目依赖配置
├── postcss.config.js           # PostCSS配置
├── README.md                   # 项目说明文档
├── tailwind.config.js          # Tailwind CSS配置
├── tsconfig.json               # TypeScript配置
├── tsconfig.node.json          # TypeScript Node配置
└── vite.config.ts              # Vite配置
```

### 3.1 目录说明

| 目录/文件 | 说明 |
|----------|------|
| `src/components/ui/` | 存放shadcn/ui的基础UI组件，这些是可复用的原子组件 |
| `src/components/` | 存放业务组件，是组合了UI组件的功能组件 |
| `src/pages/` | 存放页面级组件，每个页面对应一个路由 |
| `src/types/` | 存放TypeScript类型定义，使项目类型安全 |
| `src/utils/` | 存放业务相关的工具函数 |
| `src/lib/` | 存放通用的工具函数，与业务无关 |
| `*.config.*` | 各类配置文件，用于配置构建工具、代码规范等 |

---

## 4. localStorage数据格式

### 4.1 存储键名

```javascript
const STORAGE_KEY = 'cooking_records'
```

### 4.2 数据结构

存储在localStorage中的是一个JSON字符串，表示一个`CookingRecord`对象数组。

#### 4.2.1 TypeScript类型定义

```typescript
type CuisineType = '中餐' | '西餐' | '日料' | '其他'

interface CookingRecord {
  id: string           // 唯一标识符，格式：时间戳-随机字符串
  dishName: string     // 菜名
  cuisine: CuisineType // 菜系
  timestamp: number    // Unix时间戳（毫秒）
  date: string         // 格式化的日期时间字符串
}
```

#### 4.2.2 JSON示例

```json
[
  {
    "id": "1705312800000-abc123def45",
    "dishName": "红烧肉",
    "cuisine": "中餐",
    "timestamp": 1705312800000,
    "date": "2024-01-15 12:00:00"
  },
  {
    "id": "1705284000000-xyz789uvw01",
    "dishName": "意大利面",
    "cuisine": "西餐",
    "timestamp": 1705284000000,
    "date": "2024-01-15 08:00:00"
  },
  {
    "id": "1705226400000-mno456pqr78",
    "dishName": "三文鱼刺身",
    "cuisine": "日料",
    "timestamp": 1705226400000,
    "date": "2024-01-14 16:00:00"
  }
]
```

### 4.3 数据说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | `string` | 唯一标识符，由当前时间戳（毫秒）和随机字符串组成，确保全局唯一 |
| `dishName` | `string` | 用户输入的菜名，保存时会去除首尾空格 |
| `cuisine` | `string` | 菜系，只能是预定义的四个值之一：中餐、西餐、日料、其他 |
| `timestamp` | `number` | 记录创建时的Unix时间戳（毫秒），用于排序和精确计算 |
| `date` | `string` | 格式化的日期时间字符串，格式为`yyyy-MM-dd HH:mm:ss`，用于显示 |

### 4.4 存储操作

#### 4.4.1 写入操作

```javascript
// 1. 获取现有记录
const records = JSON.parse(localStorage.getItem('cooking_records') || '[]')

// 2. 创建新记录（添加到数组开头）
records.unshift(newRecord)

// 3. 保存回localStorage
localStorage.setItem('cooking_records', JSON.stringify(records))
```

#### 4.4.2 读取操作

```javascript
const records = JSON.parse(localStorage.getItem('cooking_records') || '[]')
```

### 4.5 数据约束

1. **数组顺序**：新记录始终添加到数组开头，因此数组按时间倒序排列（最新的在前）
2. **唯一性**：通过`id`字段保证每条记录的唯一性
3. **数据类型**：所有字段类型必须与定义一致，`cuisine`字段必须是预定义的枚举值
4. **存储容量**：受浏览器localStorage容量限制（通常为5-10MB），建议记录数不超过10000条
