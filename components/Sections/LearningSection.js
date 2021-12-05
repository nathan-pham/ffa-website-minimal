export default function LearningSection() {

    const threeRingModel = [
        { title: "Classroom", description: "Question-based instruction and learning with amazing classes and labs that you can earn college credit for. Check the Del Oro course catalog." },
        { title: "Projects", description: "Experiential, service, and work-based learning with a Superviced Agricultural Experience program. Earn money by working with animal or plant systems." },
        { title: "Organization", description: "Gain leadership, personal, and career skills through engagement in a national organization, FFA. Participate in competitions, join leadership conferences, and have fun!" }
    ]

    return (

        <div className="flex">
            <img src="illustrations/learning.svg" className="w-5/12" />

            <div>

                {

                    threeRingModel.map(({ title, description }, i) => (
                        
                        <>
                            <h2 className={ [ "text-3xl font-bold", i ? "mt-10" : "" ].join(' ') }>{ title }</h2>
                            <p className="text-gray-500 text-xl mt-2">{ description }</p>
                        </>
               
                    ))
                
                }

            </div>
        </div>    

    )

}