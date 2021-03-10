import './App.css';

const SongComponent = x => {
    console.log(x);
    return <div className="App-header">
        <a className="reset-text" href={x.favSong.youTubeLink} target="_blank">
            <h2>Title: {x.favSong.title}</h2>
        </a>
        <h3>Artist: {x.favSong.artist}</h3>
        <h3>Genre: {x.favSong.genre}</h3>
        <h3>Year: {x.favSong.year}</h3>
    </div>;
}

export default SongComponent

// let song = {
//     title: 'Nexus<MODv> (feat. Laco)',
//     artist: ['Hiroyuki Sawano, ', 'Laco, ', 'mpi, ', 'Benjamin Anderson'],
//     genre:'Pop',
//     year: 2019,
//     youTubeLink: 'https://www.youtube.com/watch?v=e9tNQmSqubw'
// }
