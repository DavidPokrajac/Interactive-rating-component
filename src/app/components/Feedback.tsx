type FeedbackProps = {
    rating: string;
};

export default function Feedback({ rating }: FeedbackProps) {
    return (
        <section className="thank-you">
            <span>You selected {rating} out of 5</span>
            <h1>Thank you!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
            </p>
        </section>
    );
}
