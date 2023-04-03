import { useState } from "react";
import Link from "next/link";
import Router from "next/router";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                Router.push("/");
            } else {
                throw new Error(await response.text());
            }
        } catch (error) {
            console.error("An unexpected error occurred:", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
            </div>
            <button type="submit">Log in</button>
            <div>
                <Link href="/forgot-password">
                    Forgot password?
                </Link>
                <span> | </span>
                <Link href="/signup">
                    Sign up
                </Link>
            </div>
        </form>
    );
};

export default LoginForm;
