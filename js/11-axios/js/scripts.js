console.log(axios);

const getData = async() => {

    try {
        
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/users', 
            // Definindo Headers
            {
                headers:{
                    "Content-Type": "application/json",
                    custom: 'header',
                }
            }
        );

        return response.data;

    } catch (error) {

        console.log(error);

    }

}

const container = document.querySelector('#users-container');

const showData = async() => {

    const data = await getData();

    data.forEach(user => {
        
        const div = document.createElement('div');

        const name = document.createElement('h2');

        const email = document.createElement('p');

        name.textContent = user.name;

        email.textContent = user.email;

        div.appendChild(name);

        div.appendChild(email);

        container.appendChild(div);

    });
}

showData();

const form = document.querySelector('#post-form');
const title = document.querySelector('#title');
const textarea = document.querySelector('#body');

form.addEventListener('submit', (e) =>{

    e.preventDefault();

    axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            title: title.value, body: textarea.value, userId: 1
        }
    );

})