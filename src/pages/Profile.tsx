import { useState, useEffect, useRef } from 'react'
import { User } from '@/types'
import { getCurrentUser, login, logout, saveAvatar } from '@/utils/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { UserCircle, Camera, LogOut } from 'lucide-react'

export default function Profile() {
  const [user, setUser] = useState<User | null>(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
  }, [])

  const isLoginDisabled = !username.trim() || !password.trim()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const result = login(username.trim(), password)
    if (result) {
      setUser(result)
      setUsername('')
      setPassword('')
    } else {
      setError('用户名或密码错误')
    }
  }

  const handleLogout = () => {
    logout()
    setUser(null)
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !user) return

    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
    if (!validTypes.includes(file.type)) {
      setError('请选择 jpg/png/gif/webp 格式的图片')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string
      saveAvatar(user.username, dataUrl)
      setUser({ ...user, avatar: dataUrl })
      setError('')
    }
    reader.readAsDataURL(file)

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6 min-h-screen flex flex-col">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">👤 个人中心</h1>
        <p className="text-sm text-gray-500">管理你的个人设置</p>
      </header>

      <div className="flex-1 flex items-center justify-center">
        {user ? (
          <Card className="w-full">
            <CardHeader className="text-center pb-4">
              <div
                className="relative w-24 h-24 mx-auto mb-4 cursor-pointer group"
                onClick={handleAvatarClick}
              >
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt="头像"
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary/20">
                    <UserCircle className="w-16 h-16 text-primary/60" />
                  </div>
                )}
                <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                  <Camera className="w-6 h-6 text-white mb-1" />
                  <span className="text-xs text-white font-medium">点击上传</span>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <CardTitle className="text-xl">{user.username}</CardTitle>
              <CardDescription>已登录</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center pt-2">
              <Button
                variant="outline"
                onClick={handleLogout}
                className="w-full"
              >
                <LogOut className="w-4 h-4 mr-2" />
                退出登录
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-xl">登录</CardTitle>
              <CardDescription>请输入你的账号信息</CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">用户名</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="请输入用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">密码</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="请输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoginDisabled}
                >
                  登录
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}
      </div>
    </div>
  )
}
