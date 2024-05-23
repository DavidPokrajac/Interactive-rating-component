"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RatingForm() {
    const [numberClicked, setNumberClicked] = useState(0);
    const router = useRouter();

    function onSubmitHandler() {
        router.push("/thank-you?rating=" + numberClicked);
    }

    function selectedInputStyles(rate: number) {
        if (numberClicked === rate) {
            return {
                backgroundColor: "hsl(216, 12%, 54%)",
                color: "white",
            };
        }
        return {};
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor="grade-one" className="visuallyhidden">
                    1
                </label>
                <input
                    type="number"
                    id="grade-one"
                    value={1}
                    readOnly
                    onClick={() => setNumberClicked(1)}
                    style={selectedInputStyles(1)}
                />
                <label htmlFor="grade-two" className="visuallyhidden">
                    2
                </label>
                <input
                    type="number"
                    id="grade-two"
                    value={2}
                    readOnly
                    onClick={() => setNumberClicked(2)}
                    style={selectedInputStyles(2)}
                />
                <label htmlFor="grade-three" className="visuallyhidden">
                    3
                </label>
                <input
                    type="number"
                    id="grade-three"
                    value={3}
                    readOnly
                    onClick={() => setNumberClicked(3)}
                    style={selectedInputStyles(3)}
                />
                <label htmlFor="grade-four" className="visuallyhidden">
                    4
                </label>
                <input
                    type="number"
                    id="grade-four"
                    value={4}
                    readOnly
                    onClick={() => setNumberClicked(4)}
                    style={selectedInputStyles(4)}
                />
                <label htmlFor="grade-five" className="visuallyhidden">
                    5
                </label>
                <input
                    type="number"
                    id="grade-five"
                    value={5}
                    readOnly
                    onClick={() => setNumberClicked(5)}
                    style={selectedInputStyles(5)}
                />
            </div>
            <button type="submit" disabled={numberClicked === 0}>
                Submit
            </button>
        </form>
    );
}
