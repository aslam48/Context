import React, {useState} from 'react'
import uuid from "react-uuid"
import NewSongForm from './NewSongForm';

 const SongList = () => {
   const [songs, setSongs] = useState([
        {title: "almost done", id:1},
        {title: "memory gospel", id:2},
        {title: "this wild darkness", id:3}
    ]);

    const addSong = (title) => {
        setSongs([
          ...songs, { title, id:uuid()}
        ])
    }
  return (
    <div className='song-list'>
      {songs.map(song =>{
        return (
            <li key={song.id}>{song.title}</li>
        )
      })}
      <NewSongForm addSong={addSong}/>
    </div>
  )
}
export default SongList