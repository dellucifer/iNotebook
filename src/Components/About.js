import React, {useContext, useEffect} from 'react'
import noteContext from '../Context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)

  useEffect(()=>{
    a.update()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      This is About Page of {a.state.name} from {a.state.class}
    </div>
  )
}

export default About
