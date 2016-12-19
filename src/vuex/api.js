function fetch (child) {
  	console.log(child)
    return new Promise((resolve, reject) => {
      
    })
}

export function fetchItem (id) {
  return fetch(`item/${id}`)
}