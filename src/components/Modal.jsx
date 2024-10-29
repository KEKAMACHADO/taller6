import "../styles/modal.css";

const Modal = ({ getCatSelected, show, closeModal }) => {
  if (!show) return null;

  const cat = getCatSelected.breeds[0];
  const { name, description, temperament, origin, life_span, wikipedia_url } = cat;
  const imageUrl = getCatSelected.url;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <img src={imageUrl} alt={`Foto de ${name}`} className="cat-image" />
        <h2>{name}</h2>
        <p>{description}</p>
        <p><strong>Temperamento:</strong> {temperament}</p>
        <p><strong>Origen:</strong> {origin}</p>
        <p><strong>Esperanza de vida:</strong> {life_span} años</p>
        {wikipedia_url ?
            <a href={wikipedia_url} target="_blank" rel="noopener noreferrer">
            Más información
            </a>
           : null} 
      </div>
    </div>
  );
};

export default Modal;
