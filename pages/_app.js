import Analytics from "@components/Analytics"
import "tailwindcss/tailwind.css"

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            {
                process.env.NODE_ENV === "production" && <Analytics />
            }
        </>
    )
  return 
}