import './SkillsAboutMeComponent.css'

import React from 'react';
import HtmlIcon from './../../assets/skills/html.png';
import CssIcon from './../../assets/skills/css.png';
import JavascriptIcon from './../../assets/skills/javascript.png';
import AngularIcon from './../../assets/skills/angular.png';
import BootstrapIcon from './../../assets/skills/bootstrap.png';
import ReactNativeIcon from './../../assets/skills/react.svg';
import NodeJsIcon from './../../assets/skills/nodejs.png';
import JavaIcon from './../../assets/skills/java.png';
import LaravelIcon from './../../assets/skills/laravel.png';
import SpringIcon from './../../assets/skills/spring.png';
import MysqlIcon from './../../assets/skills/mysql.png';
import MongoDbIcon from './../../assets/skills/mongodb.png';
import fireBaseIcon from  './../../assets/skills/firebase.png';
import { useTranslation } from 'react-i18next';

function SkillsAboutMeComponent() {
    const { t } = useTranslation();

    return (
        
            <div className="section-content">
                <div className="about-section">
                    <div className="about-column">
                        <h3 className="title-skills">Frontend Skills</h3>
                        <div className="frontend">
                            <div className="skill-item">
                                <img src={HtmlIcon} className="skill" alt="HTML" />
                                <h7 className="skill-text">HTML</h7>
                            </div>
                            <div className="skill-item">
                                <img src={CssIcon} className="skill" alt="CSS" />
                                <h7 className="skill-text">CSS</h7>
                            </div>
                            <div className="skill-item">
                                <img src={JavascriptIcon} className="skill" alt="JavaScript" />
                                <h7 className="skill-text">JavaScript</h7>
                            </div>
                            <div className="skill-item">
                                <img src={AngularIcon} className="skill" alt="Angular" />
                                <h7 className="skill-text">Angular</h7>
                            </div>
                            <div className="skill-item">
                                <img src={BootstrapIcon} className="skill" alt="Bootstrap" />
                                <h7 className="skill-text">Bootstrap</h7>
                            </div>
                            <div className="skill-item">
                                <img src={ReactNativeIcon} className="skill" alt="React Native" />
                                <h7 className="skill-text">React.JS</h7>
                            </div>
                        </div>
                    </div>
                    <div className="skills-column">
                        <h3 className="title-skills">Backend Skills</h3>
                        <div className="backend">
                            <div className="skill-item">
                                <img src={NodeJsIcon} className="skill" alt="NodeJs" />
                                <h7 className="skill-text">NodeJs</h7>
                            </div>
                            <div className="skill-item">
                                <img src={JavaIcon} className="skill" alt="Java" />
                                <h7 className="skill-text">Java</h7>
                            </div>
                            <div className="skill-item">
                                <img src={LaravelIcon} className="skill" alt="Laravel" />
                                <h7 className="skill-text">Laravel</h7>
                            </div>
                            <div className="skill-item">
                                <img src={SpringIcon} className="skill" alt="Spring" />
                                <h7 className="skill-text">Spring</h7>
                            </div>
                        </div>
                        <h3 className="title-skills">Database</h3>
                        <div className="database">
                            <div className="skill-item">
                                <img src={MysqlIcon} className="skill" alt="MySQL" />
                                <h7 className="skill-text">MySQL</h7>
                            </div>
                            <div className="skill-item">
                                <img src={MongoDbIcon} className="skill" alt="MongoDB" />
                                <h7 className="skill-text">MongoDB</h7>
                            </div>
                            <div className="skill-item">
                                <img src={fireBaseIcon} className="skill" alt="FireBase" />
                                <h7 className="skill-text">FireBase</h7>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};




export default SkillsAboutMeComponent

