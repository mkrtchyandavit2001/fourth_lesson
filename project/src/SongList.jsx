import { Song } from "./Song"
export const SongList = ({items, onDelete, addSong}) =>{
    return <div>
        <h1>Song List</h1>
        {
            items.map(elm => <Song key={elm.id} {...elm} onDelete = {onDelete} addSong = {addSong}/>)
        }
    </div>
}