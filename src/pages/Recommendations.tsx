import React from 'react';
import { useTranslation } from 'react-i18next';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="recommendations-wrapper">
      <article className="recommendation-card">
        <header className="recommendation-header">
          <h3>{t('recommendations.title')}</h3>
          <p className="subtitle">{t('recommendations.subtitle')}</p>
          <time className="date">{t('recommendations.date')}</time>
        </header>

        <section className="recommendation-body">
          <p>{t('recommendations.contactMessage')}</p>
        </section>
      </article>
    </div>
  );
};

export default Recommendations;
