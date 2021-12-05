export default function Textarea({ forLabel, className, name, ...props }) {

    return (
        
        <>
            {
                
                forLabel 
                    ? <label for="name" className={ [ "capitalize font-bold text-lg", className ].join(' ') }>{ forLabel }</label>
                    : <></>
                
            }

            <textarea className="border px-4 py-2 mt-2 rounded-md resize-y h-52 outline-none" name={ name } { ...props }></textarea>
        </>
    
    )

}