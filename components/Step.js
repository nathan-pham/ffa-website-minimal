export default function Step({ number, circleGradient="from-blue-500 to-green-300", lineGradient="from-blue-500" }) {

    return (

        <div className="flex flex-col items-center">
            <div className={ [ "h-24 w-px bg-gradient-to-t", lineGradient ].join(' ') }></div>
            <div className={ [ "rounded-full w-10 h-10 flex items-center justify-center font-semibold text-white bg-gradient-to-r", circleGradient ].join(' ') }>
                { number }
            </div>
        </div>
        

    )

}