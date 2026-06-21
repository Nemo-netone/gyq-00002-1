export type CuisineType = '中餐' | '西餐' | '日料' | '其他'

export interface CookingRecord {
  id: string
  dishName: string
  cuisine: CuisineType
  timestamp: number
  date: string
}

export interface CookingStats {
  todayCount: number
  totalCount: number
}

export interface User {
  username: string
  avatar?: string
}

export interface TestAccount {
  username: string
  password: string
}
