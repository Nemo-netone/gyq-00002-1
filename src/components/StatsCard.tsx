import { Card, CardContent } from '@/components/ui/card'
import { Utensils, Flame } from 'lucide-react'

interface StatsCardProps {
  todayCount: number
}

export function StatsCard({ todayCount }: StatsCardProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="bg-gradient-to-br from-orange-500 to-amber-500 text-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">今日做饭</p>
              <p className="text-3xl font-bold">{todayCount}</p>
            </div>
          </div>
          <p className="text-xs mt-2 opacity-80">顿</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-red-500 to-pink-500 text-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm opacity-90">继续保持</p>
              <p className="text-3xl font-bold">💪</p>
            </div>
          </div>
          <p className="text-xs mt-2 opacity-80">加油！</p>
        </CardContent>
      </Card>
    </div>
  )
}
