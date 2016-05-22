
function Song(Artist, SongTitle, URL) {
	this.Artist = Artist;
	this.SongTitle = SongTitle;
	this.URL = URL;
}




var Jukebox = function(){


		var x = document.getElementById("MyMusic"); 
		var i = 0


		this.songs = [];


		this.preload = function(x) {
			this.songs.push(x)
		};


		this.load = function() {
			x.setAttribute("src", this.songs[i].URL)
		}


		this.play = function(){
			document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
			document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
			x.play();
		};


		// this.shuffle = function() {
		// 	x.setAttribute("src", [Math.floor(Math.random() * this.songs.length.URL)])
		// 	x.play();
		// }


		this.next = function() {
		//Instinct made me want to use a loop for this, but that wasn't correct. 
			if(i < this.songs.length) {
				i++ //This means i + 1. Var i will hold the value it's given here
				x.setAttribute("src", this.songs[i].URL)
				document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
				document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
				x.play();
			}
		}


		this.back = function() {
			if(i > 0) {
				i-- //This means i - 1. Var i will hold the value it's given here
				x.setAttribute("src", this.songs[i].URL)
				x.currentTime = 0;
				document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
				document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
				x.play();
			// if (i = 0) {
			// 	x.play(-1)
			// }
			}
		}


		this.pause = function(){
			 x.pause();
		};


		this.stop = function(){
			x.pause();
			x.currentTime = 0;
		}


		this.addSong = function(){
			var a
			var b
			var c
			a = document.getElementById("artistName").value
			b = document.getElementById("songName").value
			c = document.getElementById("newURL").value
			var x = new Song(a, b , c)
			this.songs.push(x)
		}


}


var jukebox = new Jukebox();



// ----- My Songs ----- \\


var PoolsRemix = new Song("Glass Animals", "Pools (Roosevelt Remix)", "./Music/Pools_Roosevelt_Remix.mp3")
var Suckers = new Song("Ra Ra Riot", "Suckers", "./Music/Suckers.mp3")
var GuiltTrip = new Song("Kanye West", "Guilt Trip", "./Music/Guilt_Trip.mp3")
var Controlla = new Song("Drake", "Controlla (feat. Popcaan)", "./Music/Controlla.mp3")
var GenghisKhan = new Song("Miike Snow", "Genghis Khan", "./Music/Genghis_Khan.mp3")
var TenLovers = new Song("The Black Keys", "10 Lovers", "./Music/10_Lovers.mp3")
var MiracleAligner = new Song("The Last Shadow Puppets", "Miracle Aligner", "./Music/Miracle_Aligner.mp3")



jukebox.preload(GenghisKhan);
jukebox.preload(GuiltTrip);
jukebox.preload(Suckers);
jukebox.preload(PoolsRemix);
jukebox.preload(Controlla);
jukebox.preload(TenLovers);
jukebox.preload(MiracleAligner);

jukebox.load()



