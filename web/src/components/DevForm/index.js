import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {

  const [github_username, setGitHub_username] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')


  useEffect(() => {
    navigator.geolocation.getCurrentPosition
      ((position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
        (err) => {
          console.log(err)
        },
        {
          timeout: 30000,
        }
      )
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    })

    setGitHub_username('')
    setTechs('')

  }



  return (
    <form>
      <div className='input-block'>
        <label htmlFor='github_username'>Usuário do GitHub</label>
        <input
          name="github_username"
          id='username_github'
          required
          value={github_username}
          onChange={e => setGitHub_username(e.target.value)}
        />
      </div>

      <div className='input-block'>
        <label htmlFor='techs'>Tecnologia</label>
        <input
          name="techs"
          id='techs'
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor='latitude'>Latitude</label>
          <input
            type='number'
            name="latitude"
            id='latitude'
            required
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
          />
        </div>

        <div className="input-block">
          <label htmlFor='longitude'>Longitude</label>
          <input
            type='number'
            name="longitude"
            id='longitude'
            required
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
          />
        </div>
      </div>
      <button type='submit'>Salvar</button>
    </form>

  )
}

export default DevForm