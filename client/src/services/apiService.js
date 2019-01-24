export async function getItems() {
  const response =  await fetch('/products');
  const data = await response.json();
  return data;
}

export function saveSelected(item) {
  fetch('/products', {
    method: 'PUT',
    body: JSON.stringify(item),
    headers:{
      'Content-Type': 'application/json'
    }
  })
}