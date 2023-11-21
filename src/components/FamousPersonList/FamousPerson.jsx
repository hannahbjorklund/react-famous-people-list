function FamousPerson({x}){
    return <li key={x.id}>{x.name} is famous for "{x.role}"</li>
}

export default FamousPerson;