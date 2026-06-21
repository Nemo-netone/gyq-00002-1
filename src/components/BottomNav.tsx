import { NavLink } from 'react-router-dom'
import { Home, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { path: '/home', label: '主页', icon: Home },
  { path: '/history', label: '历史记录', icon: Clock },
  { path: '/profile', label: '个人中心', icon: User },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center w-full h-full transition-colors duration-200',
                isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
              )
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={cn(
                    'w-6 h-6 mb-1',
                    isActive && 'text-primary'
                  )}
                />
                <span className="text-xs font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
