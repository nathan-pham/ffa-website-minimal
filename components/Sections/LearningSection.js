import css from "utils/css";

import H2 from "components/Atoms/H2";
import P from "components/Atoms/P";

// prettier-ignore
const threeRingModel = [
    { 
        title: "Classroom", 
        description: "Question-based instruction and learning with amazing classes and labs that you can earn college credit for. Check the Del Oro course catalog." 
    },
    { 
        title: "Projects", 
        description: "Experiential, service, and work-based learning with a Superviced Agricultural Experience program. Earn money by working with animal or plant systems." 
    },
    {
        title: "Organization",
        description: "Gain leadership, personal, and career skills through engagement in a national organization, FFA. Participate in competitions, join leadership conferences, and have fun!",
    },
];

export default function LearningSection() {
    return (
        <div className="mx-auto max-w-3xl">
            {threeRingModel.map(({ title, description }, i) => (
                <div key={`model-${i}`}>
                    <div className={css("flex items-center", i ? "mt-10" : "")}>
                        <div className="text-white bg-blue-500 rounded-lg h-10 w-10 grid place-items-center mr-4 text-lg select-none">
                            {i + 1}
                        </div>
                        <H2 className="text-3xl">{title}</H2>
                    </div>

                    <P className="mt-2">{description}</P>
                </div>
            ))}
        </div>
    );
}
