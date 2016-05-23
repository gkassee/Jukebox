
function Song(Artist, SongTitle, URL) {
	this.Artist = Artist;
	this.SongTitle = SongTitle;
	this.URL = URL;
}




var Jukebox = function(){


		var x = document.getElementById("MyMusic"); 
		var i = 0


		this.songs = [];


		this.preload = function(y) {
			this.songs.push(y)
		};


		this.load = function() {
			x.setAttribute("src", this.songs[i].URL)
		}


		this.play = function(){
			document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
			document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
			x.play()
		};


		// this.shuffle = function() {
		// 	x.setAttribute("src", this.songs.random().URL)
		// 	this.play();
		// }


		this.next = function() {
		//Instinct made me want to use a loop for this, but that wasn't correct. 
			if (i == this.songs.length - 1) {
				i = 0
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
			else if(i < this.songs.length) {
				i++ //This means i + 1. Var i will hold the value it's given here
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
		}


		this.back = function() {
			if(i > 0) {
				i-- //This means i - 1. Var i will hold the value it's given here
				this.stop()
				x.setAttribute("src", this.songs[i].URL)
				this.play()
			}
			else if (i == 0) {
				this.stop()
				i = this.songs.length - 1
				x.setAttribute("src", this.songs[i].URL)
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
			a = document.getElementById("artistName").value
			b = document.getElementById("songName").value
			c = document.getElementById("newURL").value
			var x = new Song(a, b , c)
			this.songs.push(x)
			document.getElementById("NewSongForm").reset()
		}
		

		// this.playlist = function() {
		// 		for (z=0; z<this.songs.length; z++) {
		// 			var node = document.createElement("li")
		// 			var node2 = document.createElement("li")
		// 			var songnode = document.createTextNode(this.songs[z].SongTitle);
		// 			var artistnode = document.createTextNode(this.songs[z].Artist);
		// 			node.appendChild(songnode);
		// 			node2.appendChild(artistnode);
		// 			document.getElementById("playlist").appendChild(node);
		// 			document.getElementById("playlist").appendChild(node2);
		// 		}
		// }


}


var jukebox = new Jukebox();



// ----- My Songs ----- \\


var PoolsRemix = new Song("Glass Animals", "Pools (Roosevelt Remix)", "./Music/Pools_Roosevelt_Remix.mp3")
var Suckers = new Song("Ra Ra Riot", "Suckers", "./Music/Suckers.mp3")
var GuiltTrip = new Song("Kanye West", "Guilt Trip", "./Music/Guilt_Trip.mp3")
var Controlla = new Song("Drake", "Controlla", "./Music/Controlla.mp3")
var GenghisKhan = new Song("Miike Snow", "Genghis Khan", "./Music/Genghis_Khan.mp3")
var TenLovers = new Song("The Black Keys", "10 Lovers", "./Music/10_Lovers.mp3")
var MiracleAligner = new Song("The Last Shadow Puppets", "Miracle Aligner", "./Music/Miracle_Aligner.mp3")



jukebox.preload(GenghisKhan);
jukebox.preload(GuiltTrip);
jukebox.preload(MiracleAligner);
jukebox.preload(Suckers);
jukebox.preload(Controlla);
jukebox.preload(PoolsRemix);
jukebox.preload(TenLovers);

jukebox.load();

// jukebox.playlist();



