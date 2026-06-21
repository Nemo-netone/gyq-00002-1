import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CookingRecord } from '@/types'
import { Clock, ListOrdered } from 'lucide-react'

interface RecentRecordsProps {
  records: CookingRecord[]
}

const cuisineColors: Record<string, string> = {
  '中餐': 'bg-red-100 text-red-700 border-red-200',
  '西餐': 'bg-amber-100 text-amber-700 border-amber-200',
  '日料': 'bg-pink-100 text-pink-700 border-pink-200',
  '其他': 'bg-blue-100 text-blue-700 border-blue-200',
}

export function RecentRecords({ records }: RecentRecordsProps) {
  if (records.length === 0) {
    return (
      <Card className="border-dashed border-2 bg-gray-50">
        <CardContent className="p-8 text-center">
          <ListOrdered className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">还没有做饭记录</p>
          <p className="text-sm text-gray-400 mt-1">开始记录你的第一顿饭吧！</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          最近记录
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {records.map((record, index) => (
          <div
            key={record.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800">{record.dishName}</p>
                <p className="text-xs text-gray-500">{record.date}</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className={cuisineColors[record.cuisine] || 'bg-gray-100 text-gray-700'}
            >
              {record.cuisine}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
