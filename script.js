const body = document.querySelector('body');
const tittle = document.createElement('h1')
const input = document.createElement('input');
const button = document.createElement('button');
const section = document.createElement('div')

input.placeholder = 'Enter Username'
tittle.textContent = "Search Github Profile"
button.textContent = "Search"
input.style.marginBottom = '10px'

body.appendChild(tittle)
body.appendChild(input)
body.appendChild(button)

button.addEventListener('click', (e) => {
    e.preventDefault();

    while (section.firstChild) {
        section.firstChild.remove()
    }
    
    const requestURL = `https://api.github.com/users/${input.value}`;

    const name = document.createElement('h3')
    const location = document.createElement('h3')
    const website = document.createElement('a')
    const twitter_username = document.createElement('h3')
    const followers = document.createElement('h3')   

 
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL)
    xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if (this.readyState === 4) {
        const data = JSON.parse(this.responseText);
        const img = document.createElement('img');   

        img.style.display = 'block'
        img.style.height = '300px'
        img.style.aspectRatio = 1
        img.src = data.avatar_url;

        name.textContent = `Name - ${data.name}`;
        location.textContent = `located in - ${data.location}`;
        website.textContent = `website - ${data.blog}`;
        twitter_username.textContent = `twitter_username - ${data.twitter_username}`;
        followers.textContent = `followers - ${data.followers}`;

        section.appendChild(img)
        section.appendChild(name)
        section.appendChild(location)
        section.appendChild(twitter_username)
        section.appendChild(website)
        section.appendChild(followers)
        body.appendChild(section)
        input.value = ''
    }
}
xhr.send()
})
