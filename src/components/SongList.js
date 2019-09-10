import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'

import AddSong from './AddSong'


const Songlist = () => {
  const [songs, setSongs] = useState([
    {title: "Dad's Gonna Kill Me", id: uuid()},
    {title: "Thunder Rolls", id: uuid()},
    {title: "Roll The Woodpile Down", id: uuid()},
  ])
  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid()}])
  }
  // triggers on any changes in props or state
  useEffect(() => {
    console.log('UseEffect for songs data triggered', songs);
    },
    [songs] // Defines on which data change to trigger
  )

  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log('UseEffect for age data triggered', age);
    },
    [age] // Defines on which data change to trigger
  )
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> )
        })}
      </ul>
      <AddSong addSong={addSong}/>
      <button onClick={() => setAge(age +1)}>Add 1 to age: {age}</button>
    </div>
  )
}

export default Songlist
