import { Song } from "./Song"

export const PlayList = ({items, swap, onDelete}) =>{
    
    return <div>
        <h1>Play List</h1>
        {
            items.map(elm => <Song key = {elm.id} {...elm} onDelete = {onDelete} swap = {swap} isPlaylist = {true}/>)
        }
    </div>
}