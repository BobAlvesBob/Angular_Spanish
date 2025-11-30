interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
 
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015,
        
    }
}

const { song } = audioPlayer;
//const song = 'New Song';

const { song: anotherSong, 
    songDuration:duration,
    details
 } = audioPlayer;

 const {author: newAuthor} = details


// console.log('Song: ', song);
// console.log('Author:', audioPlayer.details.author);
// console.log('Duration:', audioPlayer.songDuration);
// console.log(duration, anotherSong)
// console.log('Author:', newAuthor);

// const dbz: string[] = ['Goku', 'Trunks', 'Vegeta']

// const trunk = dbz[3] || 'No hay personaje'
// console.error('Personaje 3: ', dbz[3] || 'no hay personaje');
// console.log(dbz[3]);
const [, , trunks = 'Not Foundz']: string[] = ['Goku', 'Vegeta'];
 console.error('Personaje 3: ', trunks);




export{

}
