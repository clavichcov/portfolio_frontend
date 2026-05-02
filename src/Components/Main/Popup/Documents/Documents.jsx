import './Documents.css'
import { Cv } from './CV/Cv.jsx'
import { Certificates } from './Certificates/Certificates.jsx';
import { Projects } from '../Projects/Projects.jsx';
import { useLanguage } from '../../../Contexts/LanguageContext.jsx'
import { useState } from 'react';
export function Documents() {
  const [openTabs , setOpenTabs] = useState(1);
  const { t } = useLanguage();
  
  function handleToggleTabs (type){
    if(openTabs==type){
      setOpenTabs(null);
    } else {
      setOpenTabs(type);
    }

  }
  return (
    <>
      <div className='documents'>
          <div className='document__tabs'>
            <div className='document__tabs_content'>
              <div 
                className={openTabs === 1 ? 'tabs__cv_active':'tabs__cv'}
                onClick={()=>handleToggleTabs(1)}
                >
                  {t('documents.cv')}
              </div>
              <div 
                className={openTabs === 2 ? 'tabs__certificates_active':'tabs__certificates'}
                onClick={()=>handleToggleTabs(2)}
              >
                {t('documents.certificates')}
              </div>
              <div 
                className={openTabs === 3 ? 'tabs__projects_active':'tabs__projects'}
                onClick={()=>handleToggleTabs(3)}
                >
                  {t('documents.projects')}
                </div>
            </div>
              
          </div>
          {openTabs === 1 && (
            <Cv />
          )}
          {openTabs === 2 && (
            <Certificates />
          )} 
          {openTabs === 3 && (
            <Projects />
          )} 
      </div>
    </>
  );
}