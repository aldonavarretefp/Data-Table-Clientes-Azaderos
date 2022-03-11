import React from 'react'

import './Ubicacion.scss'

export const Ubicacion = () => {
    return (
        <div className="como-llegar-container">
            
                <div className="map-text-container">

                    <div className="left iframe-rwd">
                        <iframe
                            title="mapa"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3759.4467369128497!2d-99.14116444896051!3d19.56535258674436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f705c9598c4d%3A0x1aaa42a4af5c0a8!2zQ2FybmljZXLDrWEg4oCcQXphZGVyb3PigJ0!5e0!3m2!1ses-419!2smx!4v1639094206454!5m2!1ses-419!2smx"
                            
                            className='map-text-map'
                            frameBorder=""
                            allowfullscreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    <div className="right">
                            <h2>
                                ¡Te estamos esperando!
                            </h2>
                        <p>
                            Nos encontramos en la Calle Tata Nacho, esquina con Raul Helmer, estamos
                            a un lado de la primaria "Margarita" en la Colonia El tepetatal
                            ubicada en la delegación Gustavo A. Madero, en la ciudad de México.
                    
                        </p>
                        <p>
                            Dale click a <b><i>cómo llegar</i></b> para ver nuestra ubicación en el mapa.
                    
                        </p>
                    </div>
                </div>
                
        </div>
    )
}
