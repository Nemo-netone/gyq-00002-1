# 前端设计文档

## 1. 页面整体布局结构图

### 1.1 整体布局

```
┌─────────────────────────────────────────┐
│           顶部标题区域                   │
│  🍳 做饭记录                             │
│  2024年01月15日 星期一 14:30            │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐  ┌─────────────┐      │
│  │ 今日做饭     │  │ 继续保持    │      │
│  │    2        │  │    💪       │      │
│  │    顿       │  │   加油！    │      │
│  └─────────────┘  └─────────────┘      │
│                                         │
│  统计卡片区域 (StatsCard)               │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  👨‍🍳 记录今天的美食               │   │
│  │  记下你做的每一道菜              │   │
│  │                                 │   │
│  │  菜名                           │   │
│  │  ┌─────────────────────────┐    │   │
│  │  │ 今天做了什么菜？        │    │   │
│  │  └─────────────────────────┘    │   │
│  │                                 │   │
│  │  菜系                           │   │
│  │  ┌─────────────────────────┐    │   │
│  │  │ 中餐 ▾                  │    │   │
│  │  └─────────────────────────┘    │   │
│  │                                 │   │
│  │  ┌─────────────────────────┐    │   │
│  │  │      保存记录           │    │   │
│  │  └─────────────────────────┘    │   │
│  └─────────────────────────────────┘   │
│                                         │
│  表单区域 (CookingForm)                 │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  ⏰ 最近记录                     │   │
│  │                                 │   │
│  │  [1] 红烧肉    [中餐]  12:30    │   │
│  │  [2] 意大利面  [西餐]  昨天     │   │
│  │  ...                             │   │
│  └─────────────────────────────────┘   │
│                                         │
│  最近记录区域 (RecentRecords)           │
├─────────────────────────────────────────┤
│                                         │
│  [🏠 主页]  [📋 历史]  [👤 我的]      │
│                                         │
│  底部导航栏 (BottomNav)                 │
└─────────────────────────────────────────┘
```

### 1.2 页面层级结构

```
App (根组件)
├── Routes (路由配置)
│   ├── /home → HomePage (主页)
│   ├── /history → HistoryPage (历史记录页)
│   └── /profile → ProfilePage (个人中心页)
└── BottomNav (底部导航栏，固定在底部)
```

---

## 2. 组件拆分及职责

### 2.1 页面组件 (Pages)

| 组件名 | 路径 | 职责 |
|--------|------|------|
| `Home` | `src/pages/Home.tsx` | 主页，整合所有子组件，管理数据状态，提供刷新机制 |
| `History` | `src/pages/History.tsx` | 历史记录页，占位页面，显示"功能开发中" |
| `Profile` | `src/pages/Profile.tsx` | 个人中心页，占位页面，显示"功能开发中" |

### 2.2 业务组件 (Components)

| 组件名 | 路径 | 职责 |
|--------|------|------|
| `BottomNav` | `src/components/BottomNav.tsx` | 底部导航栏，使用React Router的NavLink实现页面切换，显示激活状态 |
| `CookingForm` | `src/components/CookingForm.tsx` | 做饭记录表单，包含菜名输入框、菜系下拉选择、保存按钮，负责表单验证和提交 |
| `StatsCard` | `src/components/StatsCard.tsx` | 统计卡片，展示今日做饭次数和激励信息 |
| `RecentRecords` | `src/components/RecentRecords.tsx` | 最近记录列表，展示最近5条做饭记录，包含菜名、菜系、时间 |

### 2.3 UI组件 (shadcn/ui)

| 组件名 | 路径 | 职责 |
|--------|------|------|
| `Button` | `src/components/ui/button.tsx` | 按钮组件，支持多种变体和尺寸 |
| `Input` | `src/components/ui/input.tsx` | 输入框组件，用于菜名输入 |
| `Select` | `src/components/ui/select.tsx` | 下拉选择组件，用于菜系选择 |
| `Label` | `src/components/ui/label.tsx` | 标签组件，用于表单标签 |
| `Card` | `src/components/ui/card.tsx` | 卡片组件，包含CardHeader、CardContent、CardFooter等子组件 |
| `Badge` | `src/components/ui/badge.tsx` | 徽章组件，用于显示菜系标签 |

### 2.4 工具与类型

| 模块 | 路径 | 职责 |
|------|------|------|
| 类型定义 | `src/types/index.ts` | 定义CookingRecord、CuisineType等TypeScript类型 |
| 存储工具 | `src/utils/storage.ts` | localStorage的CRUD操作，包括获取记录、保存记录、统计今日数量、获取最近记录 |
| 样式工具 | `src/lib/utils.ts` | cn工具函数，用于合并className |

---

## 3. 数据流转逻辑

### 3.1 数据流图

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   用户操作   │────▶│  表单验证   │────▶│  保存到     │
│ (输入菜名)   │     │ (非空校验)  │     │ localStorage│
└─────────────┘     └─────────────┘     └─────────────┘
                                                         │
                                                         ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   页面刷新   │◀────│  重新读取   │◀────│  触发回调   │
│ (更新UI)    │     │  本地存储   │     │ onRecordAdded│
└─────────────┘     └─────────────┘     └─────────────┘
```

### 3.2 详细数据流转

#### 3.2.1 初始化流程

1. **页面加载** → `Home`组件挂载
2. **`useEffect`触发** → 调用`refreshData()`函数
3. **读取本地存储** → 调用`getTodayCount()`和`getRecentRecords()`
4. **更新状态** → `setTodayCount()`和`setRecentRecords()`
5. **UI渲染** → `StatsCard`和`RecentRecords`组件根据新状态渲染

#### 3.2.2 新增记录流程

1. **用户输入** → 在`CookingForm`中输入菜名，选择菜系
2. **点击保存** → 触发表单`onSubmit`事件
3. **表单验证** → 检查菜名是否为空，设置`isSubmitting`防止重复提交
4. **保存到localStorage** → 调用`saveRecord(dishName, cuisine)`
   - 生成唯一ID（时间戳+随机字符串）
   - 创建`CookingRecord`对象
   - 将新记录添加到数组开头
   - 序列化后存入localStorage
5. **触发回调** → 调用父组件传入的`onRecordAdded()`
6. **刷新数据** → `Home`组件重新调用`refreshData()`
7. **清空表单** → 重置输入框和下拉选择
8. **UI更新** → 统计卡片数字+1，最近记录列表显示新记录

#### 3.2.3 时间自动更新

- `Home`组件中设置定时器，每分钟更新一次当前时间显示
- 定时器在组件卸载时清除，防止内存泄漏

### 3.3 状态管理

| 状态 | 位置 | 类型 | 说明 |
|------|------|------|------|
| `dishName` | `CookingForm` | `string` | 表单中菜名输入框的值 |
| `cuisine` | `CookingForm` | `CuisineType` | 表单中菜系选择的值 |
| `isSubmitting` | `CookingForm` | `boolean` | 表单提交状态，防止重复提交 |
| `todayCount` | `Home` | `number` | 今日做饭次数 |
| `recentRecords` | `Home` | `CookingRecord[]` | 最近5条记录 |
| `currentDateTime` | `Home` | `string` | 当前显示的日期时间 |

### 3.4 组件通信

- **父传子**：通过props传递数据和回调函数
  - `Home` → `CookingForm`: `onRecordAdded`回调
  - `Home` → `StatsCard`: `todayCount`数据
  - `Home` → `RecentRecords`: `records`数据
- **子传父**：通过回调函数
  - `CookingForm` → `Home`: 调用`onRecordAdded()`通知数据已更新
- **兄弟组件**：通过父组件状态管理
  - `CookingForm`更新数据后，`Home`刷新状态，`StatsCard`和`RecentRecords`自动更新

### 3.5 本地存储操作

| 操作 | 函数 | 说明 |
|------|------|------|
| 读取所有记录 | `getRecords()` | 从localStorage读取并解析JSON |
| 保存记录 | `saveRecord()` | 新增记录到数组开头并持久化 |
| 统计今日 | `getTodayCount()` | 过滤今日日期的记录并计数 |
| 最近记录 | `getRecentRecords(n)` | 返回前n条记录 |
