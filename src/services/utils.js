export const formattedDate = (d = Date.now()) => {
  const date = new Date(d)
  const month = (date.getMonth() + 1) > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
  const formattedDate = `${date.getFullYear()}-${month}-${day}`
  return formattedDate
}
