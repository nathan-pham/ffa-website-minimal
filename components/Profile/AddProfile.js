import { Add } from "react-ionicons";

export default function AddProfile() {
    return (
        <a href="https://docs.google.com/document/d/1ZsDzzRJYmbAlRdW3CRQocIrlTQejT502d3ov7RJ24Jc/edit">
            <div className="border rounded-lg h-full flex flex-col items-center justify-center cursor-pointer text-center transition-all hover:shadow-lg hover:-translate-y-1">
                <Add className="scale-150" />
                <p className="max-w-[80%] text-gray-500 mt-6 leading-snug">This could be you! Apply to our officer team.</p>
            </div>
        </a>
    );
}
