import Image from "next/image";
import Card from "./components/Card";
import RatingForm from "./components/RatingForm";

export default function Home() {
    return (
        <Card>
            <Image src="/icon-star.svg" width={15} height={15} alt="Star" />
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>
            <RatingForm />
        </Card>
    );
}
