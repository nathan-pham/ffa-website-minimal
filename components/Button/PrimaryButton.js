export default function PrimaryButton({ children }) {

    return (

        <button className="bg-black text-white rounded-md px-6 py-3 w-44 font-semibold border transition-colors border-black hover:bg-white hover:text-black">{ children }</button>

    )

}