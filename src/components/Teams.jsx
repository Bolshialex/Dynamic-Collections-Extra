export default function Teams({ teams }) {
    
    const teamsListItems = teams.map(team => (<li>{team}</li>));
    
    return (
        <div className="teams">
            <ol>
                {teamsListItems}
            </ol>
        </div>
    )
}
