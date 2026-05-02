import './Projects.css'
import { useState, useEffect } from "react";
import { useLanguage } from '../../../Contexts/LanguageContext';
import {IMAGES, PROJECTS_IMAGES, LINKS} from '../../../../Utils/Constants.js'
import {Card} from '../../Card/Card.jsx'


export function Projects() {
    const { t } = useLanguage();
    const [cards, setCards]=useState([]);
    const [visibleCards, setVisibleCards] = useState(3);
    
    useEffect(() => {
        const loadAllImages = async () => {
            const newsArray = Object.values(PROJECTS_IMAGES.news || {});
            const newsModules = await Promise.all(newsArray.map(fn => fn()));
            const newsImagesArray = newsModules.map(m => m.default);
            const aroundArray = Object.values(PROJECTS_IMAGES.around || {});
            const aroundModules = await Promise.all(aroundArray.map(fn => fn()));
            const aroundImagesArray = aroundModules.map(m => m.default);
            const coffeeshopArray = Object.values(PROJECTS_IMAGES.coffeeshop || {});
            const coffeeshopModules = await Promise.all(coffeeshopArray.map(fn => fn()));
            const coffeeshopImagesArray = coffeeshopModules.map(m => m.default);
            const mockData = [
                { id: 1, imageModules: newsImagesArray, title: t('projects.news'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 2, imageModules: aroundImagesArray, title: t('projects.around'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 3, imageModules: coffeeshopImagesArray, title: t('projects.coffeeshop'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 4, imageModules: IMAGES.cardimg, title: 'Artículo 4', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 5, imageModules: IMAGES.cardimg, title: 'Artículo 5', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 6, imageModules: IMAGES.cardimg, title: 'Artículo 6', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 7, imageModules: IMAGES.cardimg, title: 'Artículo 7', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 8, imageModules: IMAGES.cardimg, title: 'Artículo 8', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 9, imageModules: IMAGES.cardimg, title: 'Artículo 9', description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultriciesnuls nunc eget nisl.`, link:LINKS.news }
                ];
                setCards(mockData);
        };
        
        loadAllImages();
        
    }, []);
    function handleMore () {
        setVisibleCards(prev => prev + 3);
    }
    return (
            <section className='projects'>
                <h2 className='projects__title'>
                            {t('projects.title')}
                </h2>
                <div className='projects__container'>
                    {
                        cards.slice(0, visibleCards).map(card => (
                            <Card key={card.id} data={card} />
                        )
                    )} 
                </div>
                <button 
                    className='projects__button'
                    onClick={handleMore}
                >
                    {t('projects.button')}
                </button>
            </section>
        )
}
