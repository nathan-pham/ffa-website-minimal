export default function Textarea({ forLabel, className, name, ...props }) {

    return (
        
        <>
            {
                
                forLabel 
                    ? <label htmlFor="name" className="capitalize font-bold text-lg">{ forLabel }</label>
                    : <></>
                
            }

            <textarea className={["border px-4 py-2 rounded-md resize-y h-52 outline-none focus:border-black", className].join(' ')} name={ name } { ...props }></textarea>
        </>
    
    )

}