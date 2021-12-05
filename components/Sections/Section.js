export default function Section({ className, children }) {
    
    return (

        <div className="px-16 w-full">
            <div className={ className }>{ children }</div>
        </div>

    )

}