import React, { useState} from 'react'

const Item = ({name,age}) => {
    return (
        <li>
            name : {(name)} / age : {(age)};
        </li>
    )
}

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react"

export default function TestMoking() {
    const [data, setDate] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = () => {
        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            if(json.errorMessage){
               throw new Error(json.errorMessage);
            }
            setDate(json.data);
        })
        .then((json) => {
            setDate(json.data);
        })
        .catch((error)=> {
            setError(`Something wrong : ${error}`)
        })
    }
    const handleClick2 = () => {
        fetch('/login')
        .then((response) => {
            return (response.json())
        })
        .then((json) => {
            console.log(JSON.stringify(json))
        })
    }

    if(error) {
        return <p>{error}</p>
    }
  return (
    <div>
        <button onClick={handleClick}>data uplode</button>
        <button onClick={handleClick2}>data uplode2</button>
        {data && 
            <ul>
                {data.people.map((person) => (
                    <Item key={`${person.name}-${person.age}`} name={person.name} age={person.age} />
                ))}
            </ul>
        }
    </div>
  )
}
