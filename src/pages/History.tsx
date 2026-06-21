import { Clock, Wrench } from 'lucide-react'

export default function History() {
  return (
    <div className="max-w-md mx-auto px-4 py-6 min-h-screen flex flex-col">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">📋 历史记录</h1>
        <p className="text-sm text-gray-500">查看你所有的做饭记录</p>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-4">
            <Wrench className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">功能开发中...</h2>
          <p className="text-gray-500 text-sm">
            该功能正在开发中，敬请期待！
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
            <Clock className="w-4 h-4" />
            <span>即将上线</span>
          </div>
        </div>
      </div>
    </div>
  )
}
