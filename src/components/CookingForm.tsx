import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { CuisineType } from '@/types'
import { saveRecord } from '@/utils/storage'
import { ChefHat } from 'lucide-react'

interface CookingFormProps {
  onRecordAdded: () => void
}

const cuisineOptions: { value: CuisineType; label: string }[] = [
  { value: '中餐', label: '中餐' },
  { value: '西餐', label: '西餐' },
  { value: '日料', label: '日料' },
  { value: '其他', label: '其他' },
]

export function CookingForm({ onRecordAdded }: CookingFormProps) {
  const [dishName, setDishName] = useState('')
  const [cuisine, setCuisine] = useState<CuisineType>('中餐')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!dishName.trim() || isSubmitting) return

    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300))
      saveRecord(dishName, cuisine)
      setDishName('')
      setCuisine('中餐')
      onRecordAdded()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
          <ChefHat className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">记录今天的美食</h2>
        <p className="text-sm text-gray-500 mt-1">记下你做的每一道菜</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="dishName" className="text-sm font-medium text-gray-700">
          菜名
        </Label>
        <Input
          id="dishName"
          placeholder="今天做了什么菜？"
          value={dishName}
          onChange={(e) => setDishName(e.target.value)}
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cuisine" className="text-sm font-medium text-gray-700">
          菜系
        </Label>
        <Select
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value as CuisineType)}
          className="h-12"
        >
          {cuisineOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-medium"
        disabled={!dishName.trim() || isSubmitting}
      >
        {isSubmitting ? '保存中...' : '保存记录'}
      </Button>
    </form>
  )
}
