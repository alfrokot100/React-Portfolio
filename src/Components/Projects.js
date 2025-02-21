import React, {useState, useEffect} from 'react'
import "./Projects.css"
        
export default function Projects(){
    const [repos, setRepos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://api.github.com/users/alfrokot100/repos'
    useEffect(() =>{
        fetch(url)
        .then((response) => response.json())
        .then((data) =>{
            const filterdRepos = data.filter(repo =>{
                return repo.language === "C#"
            })

            setTimeout(()=>{
                setRepos(filterdRepos)
                setIsLoading(false)
            }, 3000)
        })
    },[])

    if(isLoading)
        {
           
           return(<h2 className='loading'>Sidan laddar...</h2>)
        }
        return(
            <div className='pro-container'>
            {
                repos.map(repo =>{
                    return(
                       <div className='project-Card'>
                        <h3 className='h3-title'>Projektets namn:</h3>
                        <p className='p-text'>{repo.name}</p>

                        <h3 className='h3-title'>Programmeringsspråk:</h3>
                        <p className='p-text'>{repo.language}</p>
                        </div>
                    )
                })}
            </div>
        )
}