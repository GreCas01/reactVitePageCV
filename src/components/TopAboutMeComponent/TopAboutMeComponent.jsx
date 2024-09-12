import './TopAboutMeComponent.css'
import ImagenCara from '../../assets/imagenPersonal.png';
import { useTranslation } from 'react-i18next';




function TopAboutMeComponent() {
    const { t } = useTranslation();

    return (

        <section id="section2">
            <div className="mainSobreMi">
                <div className="imgContainer">
                    <img
                        alt="Gregorio Castillo Vega"
                        src={ImagenCara}
                        width={768}
                        height={432}
                        loading="lazy"
                    />
                </div>
                <div className="descripcion">
                    <p className="sobreMi">
                        {t("text_about_me_top1")}
                        <br />
                        <br />
                        {t("text_about_me_top2")}
                        <br />
                        {t("text_about_me_top3")}
                        <br />
                        <br />
                        {t("text_about_me_top4")}
                        <br />
                        <br />
                        {t("text_about_me_top5")}
                    </p>
                </div>
            </div>
        </section>




    )
}

export default TopAboutMeComponent

