import { Routes, Route, Navigate } from 'react-router-dom'
import { BottomNav } from '@/components/BottomNav'
import Home from '@/pages/Home'
import History from '@/pages/History'
import Profile from '@/pages/Profile'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 pb-20">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

export default App
