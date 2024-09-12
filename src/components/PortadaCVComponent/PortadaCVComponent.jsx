// src/components/PortadaCVComponent/PortadaCVComponent.jsx

import './PortadaCVComponent.css'
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CastilloVegaCV from "../../assets/CastilloVegaGregorioCV.pdf";
import { useTranslation } from 'react-i18next';




const PortadaCVComponent = () => {
    const { t, i18n } = useTranslation();

    return (
        <section id="index">
            <div className="section-content">
                <div className="index-content">
                    <div className="name-column">
                        <h2 className="name">{t('name_person')}</h2>
                    </div>
                    <div className="title-column">
                        <h3 className="title">FullStack Developer</h3>
                        <a href="https://drive.google.com/file/d/1-Sl74V3GqWJBCx0HHdJcMY6Zo-NAe0g1/view?usp=drive_link" target="_blank" className="cta-button">
                            <FileDownloadIcon style={{ fontSize: 30, color: '#fafafa' }} titleAccess="GitHub" />
                            {t("download_cv_Poratada")}

                        </a>
                        <div className="social-links">
                            <a href="mailto:polsanzbove@gmail.com" className="social">
                                <Email style={{ fontSize: 40, color: '#D14836' }} titleAccess="Gmail" />
                            </a>
                            <a href="https://www.linkedin.com/in/pol-sanz-bove/" target="_blank" className="social">
                                <LinkedIn style={{ fontSize: 40, color: '#0088ff' }} titleAccess="LinkedIn" />
                            </a>
                            <a href="https://github.com/P0lSanz" target="_blank" className="social">
                                <GitHub style={{ fontSize: 40, color: '#fafafa' }} titleAccess="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortadaCVComponent;
