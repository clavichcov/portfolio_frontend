import './Card.css'
import { useState, useEffect } from "react";
import {IMAGES, PROJECTS_IMAGES, LINKS} from '../../../Utils/Constants.js';

export function Card({ data }) {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = data.imageModules;
        
    useEffect(() => {
        if (!images || images.length === 0) return;
        
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 5000);
        
        return () => clearInterval(interval);
    }, [images])

    return (
        <div 
            className='card'
            onClick={() => window.location.href = data.link}
        >
            {images && images.length > 0 && (
                <img 
                    className='card__image' 
                    src={images[currentIndex]} 
                    alt={data.title}
                />
            )}
            <p className='card__title'>
                {data.title}
            </p>
        </div>
    );
}