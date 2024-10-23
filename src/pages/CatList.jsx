import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCats } from '../redux/slice/catSlice';
import '../styles/CartsList.css'

const CatList = () => {
  const dispatch = useDispatch();
  const { cats, loading, error } = useSelector((state) => state.cats);
  console.log(cats)
  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
                <a href={cat.breeds[0].wikipedia_url} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CatList;