import { PlayList } from "./PlayList"

export const Song = ({title,duration,artist, id, onDelete, addSong})  =>{
    return <div className="song">
        <p>{title}</p>
        <strong>By {artist} </strong>
        <small>{duration} mins</small>
        <button onClick={() => onDelete(id)}>Delete</button>
        {
            !PlayList.isPlaylist && <button onClick={() => addSong(id)}>Move</button>
        }
    </div>
}
