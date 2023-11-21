import FamousPerson from './FamousPerson';

function FamousPersonList({famousPeopleArray}){
    return (
        <>
            <ul>
                {
                    famousPeopleArray.map((x) => {
                        return <li key={x.id}>{x.name} is famous for "{x.role}"</li>
                    })
                }
            </ul>
        </>
    );
}

export default FamousPersonList;