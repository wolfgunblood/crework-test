export function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    const lastPart = parts.pop()
    if (lastPart) {
      const cookieValue = lastPart.split(';')[0]
      return cookieValue
    }
  }
  console.error(`Cookie named ${name} is not found or the cookie format is incorrect.`)
  return undefined
}
