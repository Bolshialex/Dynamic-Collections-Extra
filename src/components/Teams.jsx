export default function Teams({ teams }) {
    
    const teamsListItems = teams.map(team => (<li>{team}</li>));
    
    return (
        <div className="teams">
            <ul>
                {teamsListItems}
            </ul>
        </div>
    )
}
