import { useState, useCallback, useEffect } from 'react'
import { CookingForm } from '@/components/CookingForm'
import { StatsCard } from '@/components/StatsCard'
import { RecentRecords } from '@/components/RecentRecords'
import { getTodayCount, getRecentRecords } from '@/utils/storage'
import { CookingRecord } from '@/types'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'

export default function Home() {
  const [todayCount, setTodayCount] = useState(0)
  const [recentRecords, setRecentRecords] = useState<CookingRecord[]>([])
  const [currentDateTime, setCurrentDateTime] = useState('')

  const refreshData = useCallback(() => {
    setTodayCount(getTodayCount())
    setRecentRecords(getRecentRecords(5))
    setCurrentDateTime(format(Date.now(), 'yyyy年MM月dd日 EEEE HH:mm', { locale: zhCN }))
  }, [])

  useEffect(() => {
    refreshData()
    const timer = setInterval(() => {
      setCurrentDateTime(format(Date.now(), 'yyyy年MM月dd日 EEEE HH:mm', { locale: zhCN }))
    }, 60000)
    return () => clearInterval(timer)
  }, [refreshData])

  const handleRecordAdded = useCallback(() => {
    refreshData()
  }, [refreshData])

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">🍳 做饭记录</h1>
        <p className="text-sm text-gray-500">{currentDateTime}</p>
      </header>

      <div className="space-y-6">
        <StatsCard todayCount={todayCount} />
        <div className="bg-white rounded-2xl shadow-md p-5">
          <CookingForm onRecordAdded={handleRecordAdded} />
        </div>
        <RecentRecords records={recentRecords} />
      </div>
    </div>
  )
}
