"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Card from "../components/Card";
import Feedback from "../components/Feedback";

export default function ThankYou() {
    const searchParams = useSearchParams();
    const rating = searchParams.get("rating") as string;
    console.log(rating);
    return (
        <Card>
            <Image
                src="/illustration-thank-you.svg"
                alt="A cellphone"
                width={162}
                height={108}
                className="thank-you-img"
            />
            <Feedback rating={rating} />
        </Card>
    );
}
