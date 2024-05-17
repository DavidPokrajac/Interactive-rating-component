import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return <main className="card">{children}</main>;
}
