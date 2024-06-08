const MOVIE_DATA = [
	{
		id: "m1",
		title: "Raiders of the Lost Ark",
		rating: "PG",
		duration: 115,
		releaseYear: 1981,
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Raiders_of_the_Lost_Ark_Theatrical_Poster.jpg/220px-Raiders_of_the_Lost_Ark_Theatrical_Poster.jpg"
	},
	{
		id: "m2",
		title: "Back to the Future",
		rating: "PG",
		duration: 116,
		releaseYear: 1985,
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg"
	},
	{
		id: "m3",
		title: "Ghostbusters",
		rating: "PG",
		duration: 105,
		releaseYear: 1984,
		image:
			"https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Ghostbusters_%281984%29_theatrical_poster.png/220px-Ghostbusters_%281984%29_theatrical_poster.png"
	}
];

class Movie {
	constructor(title, rating, duration, image) {
		this.movieTitle = title;
		this.movieRating = rating;
		this.movieDuration = duration;
		this.image = image;
	}
}

class Main {
	constructor() {
		this.movieTitle;
		this.movieRating;
		this.movieDuration;
		this.image = new Image();
		this.button;
		this.movieNumber = 0;
		this.moviesArray = [];
		this.createObjects();
		this.buildDom();
		this.showMovie();
	}

	createObjects() {
		MOVIE_DATA.forEach((movieObject) => {
			const movie = new Movie(
				movieObject.title,
				movieObject.rating,
				movieObject.duration,
				movieObject.image
			);
			this.moviesArray.push(movie);
		});
	}

	buildDom() {
		this.image = document.createElement("img");
		this.movieTitle = document.createElement("h3");
		this.movieRating = document.createElement("h4");
		this.movieDuration = document.createElement("h5");
		this.button = document.createElement("button");
		this.button.textContent = "Next";

		document.body.append(this.image);
		document.body.append(this.movieTitle);
		document.body.append(this.movieRating);
		document.body.append(this.movieDuration);
		document.body.append(this.button);

		this.button.addEventListener("click", () => this.showMovie());
	}

	showMovie() {
		this.movieTitle.textContent = `Title: ${
			this.moviesArray[this.movieNumber].movieTitle
		}`;
		this.movieRating.textContent = `Rated: ${
			this.moviesArray[this.movieNumber].movieRating
		}`;
		this.movieDuration.textContent = `Duration: ${Utils.convertTime(
			this.moviesArray[this.movieNumber].movieDuration
		)}`;
		this.image.src = this.moviesArray[this.movieNumber].image;
		if (this.movieNumber < this.moviesArray.length - 1) {
			this.movieNumber++;
		} else {
			this.movieNumber = 0;
		}
	}
}

(() => {
	const main = new Main();
})();
