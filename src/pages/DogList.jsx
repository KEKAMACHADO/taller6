import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../redux/slice/dogSlice';
import '../styles/CartsList.css'
import Modal from '../components/Modal';

const DogList = () => {
  const dispatch = useDispatch()
  const { dogs, loading, error } = useSelector((state) => state.dogs)

   //Se declaran las variables de estado
    //Estado para saber si el modal esta abierto o cerrado
    const[getModalOpen, setModalOpen] = useState(false)

    //Estado para almacenar el id del gato al que se le dio click en More Info
    const[getDogSelected, setDogSelected] = useState([])


  console.log(dogs)
  useEffect(() => {
    dispatch(fetchDogs())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  const handleModal = (dogInformation) => {

    //Se setea la información del gato seleccionado
    setDogSelected(dogInformation)

    //Se cambia a true el valor de setModalOpen para abrir el modal
    setModalOpen(true);
  }

  //Función para cerrar el modal
  const handleCloseModal = () => {
    //Se setea falso el valor de setModalOpen para cerrar el modal
    setModalOpen(false);

    //Se limpia la información del gato seleccionado
    setDogSelected([])
  }

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
                <button
                  onClick= {() => handleModal(dog)}
                  className='more-info-button'
                > More Info
                 
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {getModalOpen ?
        <Modal
          getCatSelected={getDogSelected}
          show={getModalOpen}
          closeModal={handleCloseModal}
        />
      : null}
    </>
  )
}

export default DogList