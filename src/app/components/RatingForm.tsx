"use client";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../styles/RatingForm.module.css";

export default function RatingForm() {
    const [numberClicked, setNumberClicked] = useState(0);
    const router = useRouter();

    function onSubmitHandler() {
        router.push("/thank-you?rating=" + numberClicked);
    }

    const selectedInputStyles = useCallback(
        (rate: number) => {
            if (numberClicked === rate) {
                return {
                    backgroundColor: "hsl(216, 12%, 54%)",
                    color: "white",
                };
            }
            return {};
        },
        [numberClicked]
    );

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
                    className={styles.input}
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
                    className={styles.input}
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
                    className={styles.input}
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
                    className={styles.input}
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
                    className={styles.input}
                />
            </div>
            <button type="submit" disabled={numberClicked === 0}>
                Submit
            </button>
        </form>
    );
}
