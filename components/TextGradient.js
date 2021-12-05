export default function TextGradient({ children }) {

    return (
        
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-blue-500">{ children }</span>

    )

}