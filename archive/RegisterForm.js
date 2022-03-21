import { useState } from "react";

import PrimaryButton from "@components/Atoms/Button/PrimaryButton";
import Input from "@components/Atoms/Form/Input";

export default function RegisterForm({ variant = "none" }) {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);

        const res = await fetch("/api/hello", {
            method: "POST",
            body: JSON.stringify({ email }),
        });

        console.log(await res.json());
    };

    const handleInput = (e) => {
        setEmail(e.target.value);
    };

    const form = (
        <form className="flex gap-4" onSubmit={handleSubmit}>
            <Input
                value={email}
                name="landing_email"
                placeholder="janedoe@puhsd.k12.ca.us"
                className="w-96  max-w-[60vw]"
                onChange={handleInput}
                type="email"
                required
            />
            <PrimaryButton>Start Learning</PrimaryButton>
        </form>
    );

    return variant == "none" ? (
        form
    ) : (
        <div className="grid place-items-center w-full">
            <div className="p-4 bg-gray-100 rounded-lg">{form}</div>
        </div>
    );
}
