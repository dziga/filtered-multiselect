export function filter(items, search) {
  return items.filter(item => {
    return !search || item.label.toUpperCase().includes(search.toUpperCase()) || item.checked
  })
}

export function sort(items) {
  return [...items].sort((a, b) => {return Number(b.checked) - Number(a.checked)})
}