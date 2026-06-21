import { CookingRecord, CuisineType } from '@/types'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

const STORAGE_KEY = 'cooking_records'

export function getRecords(): CookingRecord[] {
  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []
  try {
    return JSON.parse(data)
  } catch {
    return []
  }
}

export function saveRecord(dishName: string, cuisine: CuisineType): CookingRecord {
  const records = getRecords()
  const now = Date.now()
  const newRecord: CookingRecord = {
    id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
    dishName: dishName.trim(),
    cuisine,
    timestamp: now,
    date: format(now, 'yyyy-MM-dd HH:mm:ss', { locale: zhCN }),
  }
  records.unshift(newRecord)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
  return newRecord
}

export function getTodayCount(): number {
  const records = getRecords()
  const today = format(Date.now(), 'yyyy-MM-dd')
  return records.filter(r => r.date.startsWith(today)).length
}

export function getRecentRecords(limit: number = 5): CookingRecord[] {
  return getRecords().slice(0, limit)
}
