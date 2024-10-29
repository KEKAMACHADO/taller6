import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="container">
 
                <section className="hero">
                    <div className="hero-content">
                        <img src="src/assets/Images/image-2.png" alt="Mascota" className="hero-image" />
                        <div className="text-content">
                            <h2>¡Adopta un amigo peludo!</h2>
                            <p>Cada perro y gato que encuentras está esperando una segunda oportunidad. Tu decisión de adoptar no solo cambia su vida, sino que también enriquecerá la tuya con amor y compañía incondicional.</p>
                        </div>
                    </div>
                </section>

                <section className="hero reverse">
                    <div className="hero-content">
                        <div className="text-content">
                            <h2>Atención amorosa para cada mascota adoptada</h2>
                            <p>Creemos que cada mascota merece no solo un hogar, sino una familia que la ame y valore. Adoptar es más que darle un espacio en tu hogar; es abrir tu corazón a una vida llena de lealtad y cariño incondicional.</p>
                        </div>
                        <img src="src/assets/Images/image1.png" alt="Mascota" className="hero-image" />
                    </div>
                </section>

                <section className="final-section">
                    <div className="phrase">Cada mascota adoptada es una historia de amor que comienza. ¡Haz parte de esta maravillosa experiencia!</div>
                    <div className="phrase">La adopción responsable transforma vidas. Te acompañamos en cada paso para que encuentres a tu compañero ideal.</div>
                    <div className="phrase">No compres, ¡adopta! Ofrece a un animal necesitado la oportunidad de tener un hogar y un futuro lleno de amor.</div>
                </section>
            </div>

            <footer>
                <p>© 2024 Veterinaria Huellas de amor. Todos los derechos reservados.</p>
            </footer>
        </>
    );
};

export default Home;
