export const Albom = ({name, year,children}) =>{
    return <div>
        <h3>{name}</h3>
        <p>Relesed in {year}</p>
        {children}
    </div>
}