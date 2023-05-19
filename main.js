console.log('OK')

const endpoint = 'https://reqres.in/api/users'

fetch(endpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'genta2021@gmail.com',
        first_name: 'Genta',
    })
})
    .then((result) => result.json()) //olah API
    .then((data) => console.log(data))

