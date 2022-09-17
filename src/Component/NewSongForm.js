import React, { useState } from 'react'

const NewSongForm = ({addSong}) => {
  const [title, SetTitle] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault()
   addSong(title)
   SetTitle("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>song name</label>
            <input  type="text" value={title} required onChange={(e) => SetTitle(e.target.value)}/>
            <input  type="submit" value="add song"/>
        </form>
    </div>
  );
}

export default NewSongForm