import { useState, useEffect } from "react";
import './Services.css'
import {Card} from '../Card/Card.jsx'
import {IMAGES, SERVICE_IMAGES, LINKS} from '../../../Utils/Constants.js'
import { useLanguage } from '../../Contexts/LanguageContext.jsx';


export function Services() {
    const { t } = useLanguage();
    const [cards, setCards]=useState([]);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const loadAllImages = async () => {
            const electricArray = Object.values(SERVICE_IMAGES.electric || {});
            const electricModules = await Promise.all(electricArray.map(fn => fn()));
            const electricImagesArray=electricModules.map(m => m.default);
            const itsupportArray = Object.values(SERVICE_IMAGES.itsupport || {});
            const itsupportModules = await Promise.all(itsupportArray.map(fn => fn()));
            const itsupportImagesArray=itsupportModules.map(m => m.default);
            const webDeveloperArray = Object.values(SERVICE_IMAGES.webdeveloper || {});
            const webDeveloperModules = await Promise.all(webDeveloperArray.map(fn => fn()));
            const webDeveloperImagesArray=webDeveloperModules.map(m => m.default);
            const mockData = [
                { id: 1, imageModules: electricImagesArray, title: t('services.electric'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 2, imageModules: itsupportImagesArray, title: t('services.it'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news },
                { id: 3, imageModules: webDeveloperImagesArray, title: t('services.web'), description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget ultricies nisl nunc eget nisl.`, link:LINKS.news }
                
            ];
            setCards(mockData);
        };
        
        loadAllImages();
    }, []);

    return (
        <section className='services' id='services'>
            <h2 className='services__title'>
                        {t('services.title')}
            </h2>
            <div className='services__container'>
                {cards.slice(0, visibleCards).map(card => (
                    <Card key={card.id} data={card} />
                    )
                )}
            </div>
        </section>
    )
}