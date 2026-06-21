import { User, TestAccount } from '@/types'

const USER_STORAGE_KEY = 'current_user'

const TEST_ACCOUNTS: TestAccount[] = [
  { username: 'admin', password: '123456' },
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
]

export function login(username: string, password: string): User | null {
  const account = TEST_ACCOUNTS.find(
    (acc) => acc.username === username && acc.password === password
  )
  if (!account) return null

  const user: User = { username: account.username }
  const savedAvatar = localStorage.getItem(`avatar_${username}`)
  if (savedAvatar) {
    user.avatar = savedAvatar
  }
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
  return user
}

export function logout(): void {
  localStorage.removeItem(USER_STORAGE_KEY)
}

export function getCurrentUser(): User | null {
  const data = localStorage.getItem(USER_STORAGE_KEY)
  if (!data) return null
  try {
    return JSON.parse(data)
  } catch {
    return null
  }
}

export function saveAvatar(username: string, avatarDataUrl: string): void {
  localStorage.setItem(`avatar_${username}`, avatarDataUrl)
  const user = getCurrentUser()
  if (user && user.username === username) {
    user.avatar = avatarDataUrl
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
  }
}
