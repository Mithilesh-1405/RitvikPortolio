"use client";
import contact from '../../images/pages/contact.png';
import { Tabs } from "../ui/Animated_tab";

export function Prototype() {
    const tabs = [
        {
            title: "Landing",
            value: "Landing",
            content: <TabContent title="Landing Page" image={contact} />,
        },
        {
            title: "Contact",
            value: "Contact",
            content: <TabContent title="Contact Page" image={contact} />,
        },
    ];

    return (
        <div className="flex justify-center items-center w-full my-40">
            <div className="w-full max-w-[1300px] h-[30rem] md:h-[45rem] [perspective:1000px] relative flex flex-col items-center justify-start">
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
}

const TabContent = ({ title, image }) => {
    return (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-sm md:text-3xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p className='text-center -mt-5 mb-3'>{title}</p>
            <DummyContent img={image} />
        </div>
    );
};

const DummyContent = ({ img }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-[85%] h-full relative flex items-center justify-center">
                <img
                    src={img}
                    alt="dummy image"
                    className="w-full h-auto max-h-full object-contain rounded-2xl"
                    loading='lazy'
                />
            </div>
        </div>
    );
};

export default Prototype;