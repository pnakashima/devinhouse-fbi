import { useEffect, useState } from "react";
import Suspect from "../../components/Menu/Suspect";
import api from '../../services/axios';

interface ISuspect {
    id: string,
    name: string,
    picture: string,
    age: string,
    balance: string,
    company: string,
    email: string,
}

const Home = () => {

    const [suspects, setSuspects] = useState<Array<ISuspect>>([])

    useEffect(() => {
        api.get('data?_limit=30')
            .then((response) => {
                setSuspects(response.data)
            })
            .catch((error) => console.log(error))
            .finally(() => console.log('A chamada terminou'))
    }, []);


    return (
        <div className='container'>
            {
                suspects.map((suspect, index) =>
                    <Suspect
                        key={index}
                        id={suspect.id}
                        name={suspect.name}
                        picture={suspect.picture}
                        age={suspect.age}
                        balance={suspect.balance}
                        company={suspect.company}
                        email={suspect.email}
                    />)
            }
        </div>
    )
}

export default Home;
