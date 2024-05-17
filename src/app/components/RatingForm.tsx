"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RatingForm() {
    const [numberClicked, setNumberClicked] = useState(0);
    const router = useRouter();

    function onSubmitHandler() {
        router.push("/thank-you?rating=" + numberClicked);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input
                    type="number"
                    value={1}
                    readOnly
                    onClick={() => setNumberClicked(1)}
                    style={
                        numberClicked === 1
                            ? {
                                  backgroundColor: "hsl(216, 12%, 54%)",
                                  color: "white",
                              }
                            : {}
                    }
                />
                <input
                    type="number"
                    value={2}
                    readOnly
                    onClick={() => setNumberClicked(2)}
                    style={
                        numberClicked === 2
                            ? {
                                  backgroundColor: "hsl(216, 12%, 54%)",
                                  color: "white",
                              }
                            : {}
                    }
                />
                <input
                    type="number"
                    value={3}
                    readOnly
                    onClick={() => setNumberClicked(3)}
                    style={
                        numberClicked === 3
                            ? {
                                  backgroundColor: "hsl(216, 12%, 54%)",
                                  color: "white",
                              }
                            : {}
                    }
                />
                <input
                    type="number"
                    value={4}
                    readOnly
                    onClick={() => setNumberClicked(4)}
                    style={
                        numberClicked === 4
                            ? {
                                  backgroundColor: "hsl(216, 12%, 54%)",
                                  color: "white",
                              }
                            : {}
                    }
                />
                <input
                    type="number"
                    value={5}
                    readOnly
                    onClick={() => setNumberClicked(5)}
                    style={
                        numberClicked === 5
                            ? {
                                  backgroundColor: "hsl(216, 12%, 54%)",
                                  color: "white",
                              }
                            : {}
                    }
                />
            </div>
            <button type="submit" disabled={numberClicked === 0}>
                Submit
            </button>
        </form>
    );
}
