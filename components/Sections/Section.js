export default function Section({ className, children }) {
    
    return (

        <section className="px-16 w-full">
            <div className={ className }>{ children }</div>
        </section>

    )

}