let xhr = new XMLHttpRequest();
let statusDiv = document.getElementById('status-txt');
let animalDisplay = document.getElementById('animal-display');

document.getElementById('dog-load').addEventListener('click', getDog);
document.getElementById('cat-load').addEventListener('click', getCat);


function getDog() {
    xhr.open('GET', 'https://random.dog/woof.json');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onloadend = () => {
        if (xhr.status !== 200) {
            statusDiv.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`;
        } else {
            statusDiv.innerHTML = 'Loading dog...';
            let resURL = xhr.response.url;
            let extension = resURL.substring(resURL.length - 3, resURL.length).toLowerCase();
            if (extension === 'mp4' ||
                extension === 'gif') {
                animalDisplay.innerHTML = `<video controls id="animal">
                            <source src="${resURL}" type="video/mp4"
                            </video>`;
                let animal = document.getElementById('animal');
                animal.oncanplaythrough = () => {
                    statusDiv.innerHTML = '&nbsp;';
                };
            } else if (extension === 'jpg') {
                animalDisplay.innerHTML = `<img id="animal" src="${resURL}" />`;
                let animal = document.getElementById('animal');
                animal.onload = () => {
                    statusDiv.innerHTML = '&nbsp;';
                };
            }
        }
    };
}

function getCat() {
    xhr.open('GET', 'https://aws.random.cat/meow');
    xhr.responseType = 'json';
    xhr.send();
    xhr.onloadend = () => {
        if (xhr.status !== 200) {
            statusDiv.innerHTML = `Error ${xhr.status}: ${xhr.statusText}`;
        } else {
            statusDiv.innerHTML = 'Loading cat...';
            let resFile = xhr.response.file;
            let extension = resFile.substring(resFile.length - 3, resFile.length).toLowerCase();
            if (extension === 'gif') {
                animalDisplay.innerHTML = `<video controls id="animal">
                            <source src="${resFile}" type="video/mp4"
                            </video>`;
                let dog = document.getElementById('animal');
                dog.oncanplaythrough = () => {
                    statusDiv.innerHTML = '&nbsp;';
                };
            } else if (extension === 'jpg' ||
                        extension === 'png') {
                animalDisplay.innerHTML = `<img id="animal" src="${resFile}" />`;
                let animal = document.getElementById('animal');
                animal.onload = () => {
                    statusDiv.innerHTML = '&nbsp;';
                };
            }
        }
    };
}