import React from 'react';

// next
import Link from 'next/link';

// scss
import styles from './styles/MainButton.module.scss';

// props
export type MainButtonProps = {
    id: string;
    link: string;
    text: string;
    size?: 'small' | 'medium' | 'large';
}


const MainButton = ({
    id,
    link,
    text,
    size = "medium"
}: MainButtonProps) => {
    return (
        <Link
            key={id}
            className={`${styles.button} ${styles[size]}`}
            href={link}
        >
            <p className={styles.text}>{text}</p>
        </Link>
    )
}

export default MainButton;