import { ReactNode } from "react";
import styles from "../styles/Card.module.css";

type CardProps = {
    children: ReactNode;
};

export default function Card({ children }: CardProps) {
    return <main className={styles.card}>{children}</main>;
}
