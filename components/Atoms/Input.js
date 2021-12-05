export default function Input({ forLabel, className, name, ...props }) {

    return (

        <>
            {

                forLabel 
                    ? <label for="name" className={ [ "capitalize font-bold text-lg", className ].join(' ') }>{ forLabel }</label>
                    : <></>

            }

            <input className="border px-4 py-2 mt-2 rounded-md outline-none" name={ name } id={ name } {...props} />
        </>
    )

}