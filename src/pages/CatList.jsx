import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../redux/slice/catSlice';
import '../styles/CartsList.css'
import Modal from '../components/Modal';

const CatList = () => {
  const dispatch = useDispatch();
  const { cats, loading, error } = useSelector((state) => state.cats);

  //Se declaran las variables de estado
  //Estado para saber si el modal esta abierto o cerrado
  const[getModalOpen, setModalOpen] = useState(false)

  //Estado para almacenar el id del gato al que se le dio click en More Info
  const[getCatSelected, setCatSelected] = useState([])




  console.log(cats)
  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleModal = (catInformation) => {

    //Se setea la información del gato seleccionado
    setCatSelected(catInformation)

    //Se cambia a true el valor de setModalOpen para abrir el modal
    setModalOpen(true);
  }

  //Función para cerrar el modal
  const handleCloseModal = () => {
    //Se setea falso el valor de setModalOpen para cerrar el modal
    setModalOpen(false);

    //Se limpia la información del gato seleccionado
    setCatSelected([])
  }

  return (
    <>
      { /* aqui va el nav */}
      <div className="cat-list">
        {cats.map((cat, index) => (
          <div key={index} className="cat-card">
            <img src={cat.url} alt="Cat" />
            {cat.breeds && cat.breeds[0] && (
              <div className="cat-card-content">
                <h3>{cat.breeds[0].name}</h3>
                <p>Edad: {cat.breeds[0].life_span}</p>
                <p>Tamaño: {cat.breeds[0].weight.imperial}</p>
                <button
                  onClick= {() => handleModal(cat)}
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
          getCatSelected={getCatSelected}
          show={getModalOpen}
          closeModal={handleCloseModal}
        />
      : null}

    </>
  );
};

export default CatList;