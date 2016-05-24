
function Song(Artist, SongTitle, AlbumArtURL, SongURL) {
	this.Artist = Artist;
	this.SongTitle = SongTitle;
	this.AlbumArtURL = AlbumArtURL;
	this.URL = SongURL;
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
			document.getElementById("AlbumArt").setAttribute("src", this.songs[i].AlbumArtURL);
			x.play()
		};


		// this.shuffle = function() {
		// 	x.setAttribute("src", this.songs[[Math.floor(Math.random() * this.songs.length)]].URL);
		// 	document.getElementById("SongTitle").innerHTML = this.songs[i].SongTitle;
		// 	document.getElementById("ArtistName").innerHTML = this.songs[i].Artist;
		// 	document.getElementById("AlbumArt").setAttribute("src", this.songs[i].AlbumArtURL);
		// 	x.play();
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
			c = document.getElementById("newAlbumArt").value
			d = document.getElementById("newURL").value
				if (c == "") {
					var covers = ["./Images/ken.jpg", "./Images/dead.jpeg", "./Images/seagal.jpg", "./Images/dummy.jpg", "./Images/massage.jpg"]
					c = covers[Math.floor(Math.random() * covers.length)]
				}

				if (d == "") {
					d = "./Music/1.mp3"
				}

			var x = new Song(a, b , c, d)
			this.songs.push(x)
			document.getElementById("NewSongForm").reset()
		}


		this.playlist = function() {
				for (z=0; z<this.songs.length; z++) {
					var node = document.createElement("li")
					var node2 = document.createElement("li")
					var songnode = document.createTextNode(this.songs[z].SongTitle);
					// songnode.addClass('')
					var artistnode = document.createTextNode(this.songs[z].Artist);
					node.appendChild(songnode);
					node2.appendChild(artistnode);
					document.getElementById("playlist").appendChild(node);
					document.getElementById("playlist").appendChild(node2);
				}
		}


}


var jukebox = new Jukebox();



// ----- My Songs ----- \\


var PoolsRemix = new Song("Glass Animals", "Pools (Roosevelt Remix)", "http://img.boredbee.net/imager/w_500/h_/ba8ff50efaccae1bae3df469132d9539.jpg", "./Music/Pools_Roosevelt_Remix.mp3")
var Suckers = new Song("Ra Ra Riot", "Suckers", "http://cdn4.pitchfork.com/albums/22832/d4e43172.jpg", "./Music/Suckers.mp3")
var GuiltTrip = new Song("Kanye West", "Guilt Trip", "http://i.imgur.com/hAV93sy.jpg", "./Music/Guilt_Trip.mp3")
var Controlla = new Song("Drake", "Controlla", "http://static.highsnobiety.com/wp-content/uploads/2016/04/25114655/drake-views-album-art-01.jpg", "./Music/Controlla.mp3")
var GenghisKhan = new Song("Miike Snow", "Genghis Khan", "https://consequenceofsound.files.wordpress.com/2016/01/miike-snow-iii-new-album-2016.png", "./Music/Genghis_Khan.mp3")
var TenLovers = new Song("The Black Keys", "10 Lovers", "http://www.hearingdouble.net/wp-content/uploads/2014/05/turn-blue-53339cdab2d39.jpg", "./Music/10_Lovers.mp3")
var MiracleAligner = new Song("The Last Shadow Puppets", "Miracle Aligner", "http://nme.assets.ipccdn.co.uk/images/0.jpg", "./Music/Miracle_Aligner.mp3")



jukebox.preload(GenghisKhan);
jukebox.preload(GuiltTrip);
jukebox.preload(MiracleAligner);
jukebox.preload(Suckers);
jukebox.preload(Controlla);
jukebox.preload(PoolsRemix);
jukebox.preload(TenLovers);

jukebox.load();

// jukebox.playlist();



