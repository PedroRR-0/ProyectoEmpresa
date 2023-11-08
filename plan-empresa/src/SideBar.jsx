import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-primary text-secondary shadow">
            <Icon icon={<FaFire size="28" />} text={"Idea de negocio"}/>
            <Icon icon={<BsPlus size="32" />} text={"DAFO"}/>
            <Icon icon={<BsFillLightningFill size="20" />} text={"PEST"}/>
            <Icon icon={<BsGearFill size="20" />} text={"Informe de viabilidad"}/>

        </div>
    )
};

const Icon = ({ icon, text }) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;