export function formatDate(isoString: string) {
  const date = new Date(isoString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function timeDifferenceFromNow(isoString: string) {
  const now = new Date()
  const past = new Date(isoString)
  const diffInMilliseconds = now.getTime() - past.getTime()

  const msInMinute = 60 * 1000
  const msInHour = 60 * msInMinute
  const msInDay = 24 * msInHour

  if (diffInMilliseconds < msInHour) {
    return 'less than 1 hr'
  } else if (diffInMilliseconds < msInDay) {
    const hours = Math.floor(diffInMilliseconds / msInHour)
    return `${hours} hr${hours !== 1 ? 's' : ''}`
  } else {
    const days = Math.floor(diffInMilliseconds / msInDay)
    return `${days} day${days !== 1 ? 's' : ''}`
  }
}
