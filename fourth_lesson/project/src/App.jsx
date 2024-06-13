import { Song } from './Song'
import { PlayList } from './PlayList'
import { Albom } from './Albom'
import { SongList } from './SongList'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [songs, setSongs] = useState([
    {id: 101, title:"Syphoni N.40", artist:"Mozart", duration: 20},
    {id: 102, title:"Syphoni N.45", artist:"Mozart", duration: 22},
    {id: 103, title:"Syphoni N.23", artist:"Mozart", duration: 28},
    {id: 104, title:"Syphoni N.36", artist:"Mozart", duration: 32},
  ])

  const [playlist, getSongs] = useState([])

  const removeSongs = id =>{
    setSongs(songs.filter(x => x.id != id))
  }

  const addSongs = id =>{
    setSongs(songs.filter(x => x.id == id))
    // getSongs(playlist.push(setSongs(songs.filter(x => x.id == id))))
    console.log(songs.filter(x => x.id == id));
  }

  const toSwap = id =>{
    alert(456)
  }

  return (
    <>
      <h1>Hello Props</h1>
      <SongList
        items = {songs}
        onDelete = {removeSongs}
        addSong = {addSongs}
      />
      <PlayList
        items = {songs}
        onDelete = {removeSongs}  
        swap = {toSwap}
      
      />
    </>
  )
}

export default App
