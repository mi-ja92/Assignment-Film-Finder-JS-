const containterUl= document.querySelector("#allfilms");
const radiobtn= document.getElementsByName("btn");

const addMoviesToDom = (movies) => {
    movies.map(movies => {
    let addLi= document.createElement("li");
    let addLink = document.createElement("a");
    let addImg = document.createElement("img");
    containterUl.appendChild(addLi);
    addLi.appendChild(addLink);
    addLink.appendChild(addImg);
    addLink.href = "https://www.imdb.com/title/" + movies.imdbID ;
    addImg.src= movies.poster;
})}

console.log(addMoviesToDom(movies));


const handleOnChangeEvent = function (event) { 
	console.log(event.target.value);
	switch (event.target.value) {
		case "latest":
			latestFilms = movies.filter((movies) => movies.year > 2014).map((movies) => movies);
			resetAll();
			addMoviesToDom(latestFilms);
			console.log(latestFilms);
			break;
		case "avenger":
			withAvenger = movies.filter((movies) => movies.title.includes("Avenger")).map((movies) => movies);
			resetAll();
			addMoviesToDom(withAvenger);
			console.log(withAvenger);
			break;
		case "xmen":
			withXman = movies.filter((movies) => movies.title.includes("X-Men")).map((movies => movies));
			resetAll();
			addMoviesToDom(withXman);
			console.log(withXman);
			break;
		case "princess":
			withPrincess=movies.filter((movies) => movies.title.includes("Princess")).map((movies) => movies);
			resetAll();
			addMoviesToDom(withPrincess);
			console.log(withPrincess);
			break;
		case "batman":
			withBatman=movies.filter((movies) => movies.title.includes("Batman")).map((movies) => movies);
			resetAll();
			addMoviesToDom(withBatman);
			console.log(withBatman);
			break;
		default:
			console.log(addMoviesToDom(movies));
	}}

	const btns=document.querySelectorAll('[name = "btn"]');
	btns.forEach((radiobtn) => { 
	radiobtn.addEventListener("change", handleOnChangeEvent)})


const resetAll = function () {
    const li = document.querySelectorAll('#allfilms > li');
    const length = li.length;
    for (var i = length-1; i >=0 ; i--) {
      li[i].parentNode.removeChild(li[i])}}
  

