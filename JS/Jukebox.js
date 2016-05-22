
function Song(Artist, SongTitle, AlbumTitle, URL) {
	this.Artist = Artist;
	this.SongTitle = SongTitle;
	this.AlbumTitle = AlbumTitle;
	this.URL = URL;
}




var Jukebox = function(){


		var x = document.getElementById("MyMusic"); 
		var i = 0


		this.songs = [];


		this.preload = function(y) {
			this.songs.push(y)
			x.setAttribute("src", this.songs[i].URL)
		};


		this.play = function(){
			document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
			document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
			document.getElementById("AlbumTitle").innerHTML = this.songs[i].AlbumTitle;
			x.currentTime = 0
			x.play()
		};


		// this.shuffle = function() {
		// 	x.setAttribute("src", [Math.floor(Math.random() * this.songs.length.URL)])
		// 	x.play();
		// }


		this.next = function() {
		//Instinct made me want to use a loop for this, but that wasn't correct. 
			if (i == this.songs.length - 1) {
				i = 0
				x.setAttribute("src", this.songs[i].URL)
				x.currentTime = 0;
				this.play()
			}
			else if(i < this.songs.length) {
				i++ //This means i + 1. Var i will hold the value it's given here
				x.setAttribute("src", this.songs[i].URL)
				x.currentTime = 0;
				this.play()
			}
		}


		this.back = function() {
			if(i > 0) {
				i-- //This means i - 1. Var i will hold the value it's given here
				x.setAttribute("src", this.songs[i].URL)
				x.currentTime = 0;
				this.play()
			}
			else if (i == 0) {
				i = this.songs.length - 1
				x.setAttribute("src", this.songs[i].URL)
				x.currentTime = 0;
				this.play()
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
			var d
			a = document.getElementById("artistName").value
			b = document.getElementById("songName").value
			c = document.getElementById("albumName").value
			d = document.getElementById("newURL").value
			var x = new Song(a, b , c, d)
			this.songs.push(x)
		}


}


var jukebox = new Jukebox();



// ----- My Songs ----- \\


var PoolsRemix = new Song("Glass Animals", "Pools (Roosevelt Remix)", "Glass Animals - Remixes", "./Music/Pools_Roosevelt_Remix.mp3")
var Suckers = new Song("Ra Ra Riot", "Suckers", "Need Your Light", "./Music/Suckers.mp3")
var GuiltTrip = new Song("Kanye West", "Guilt Trip", "Yeezus", "./Music/Guilt_Trip.mp3")
var Controlla = new Song("Drake", "Controlla", "Views", "./Music/Controlla.mp3")
var GenghisKhan = new Song("Miike Snow", "Genghis Khan", "iii", "./Music/Genghis_Khan.mp3")
var TenLovers = new Song("The Black Keys", "10 Lovers", "Turn Blue", "./Music/10_Lovers.mp3")
var MiracleAligner = new Song("The Last Shadow Puppets", "Miracle Aligner", "Everything You've Come To Expect", "./Music/Miracle_Aligner.mp3")



jukebox.preload(GenghisKhan);
jukebox.preload(GuiltTrip);
jukebox.preload(MiracleAligner);
jukebox.preload(Suckers);
jukebox.preload(Controlla);
jukebox.preload(PoolsRemix);
jukebox.preload(TenLovers);



