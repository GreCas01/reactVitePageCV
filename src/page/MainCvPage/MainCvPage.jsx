import HeaderMainComponent from "./../../components/common/HeaderMainComponent/HeaderMainComponent.jsx";
import PortadaCVComponent from "../../components/PortadaCVComponent/PortadaCVComponent.jsx";
import TopAboutMeComponent from "../../components/TopAboutMeComponent/TopAboutMeComponent.jsx";
import SkillsAboutMeComponent from "../../components/SkillsAboutMeComponent/SkillsAboutMeComponent.jsx";
import TrajectoryTimeComponent from "../../components/TrajectoryTimeComponent/TrajectoryTimeComponent.jsx";

function MainCvPage() {
    return (
        <>
            <HeaderMainComponent />
            <PortadaCVComponent />
            <TopAboutMeComponent />
            <SkillsAboutMeComponent />
           
        </>
    );
}

export default MainCvPage;