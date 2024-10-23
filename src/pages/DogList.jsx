import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../redux/slice/dogSlice';
import '../styles/CartsList.css'

const DogList = () => {
  const dispatch = useDispatch()
  const { dogs, loading, error } = useSelector((state) => state.dogs)
  console.log(dogs)
  useEffect(() => {
    dispatch(fetchDogs())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      { /* aqui va el nav */}
      <div className="cat-list">
        {dogs.map((dog, index) => (
          <div key={index} className="cat-card">
            <img src={dog.url} alt="Cat" />
            {dog.breeds && dog.breeds[0] && (
              <div className="cat-card-content">
                <h3>{dog.breeds[0].name}</h3>
                <p>Edad: {dog.breeds[0].life_span}</p>
                <p>Tamaño: {dog.breeds[0].weight.imperial}</p>
                <a href={dog.breeds[0].wikipedia_url} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default DogList