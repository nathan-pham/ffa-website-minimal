export default function Input({ forLabel, className, name, ...props }) {

    return (

        <>
            {

                forLabel 
                    ? <label htmlFor="name" className="capitalize font-bold text-lg">{ forLabel }</label>
                    : <></>

            }

            <input className={["border px-4 py-2 rounded-md outline-none focus:border-black", className].join(' ')} name={ name } id={ name } {...props} />
        </>
    )

}