import React from 'react';

// scss
import styles from './styles/TextFreeBox.module.scss';

// props
export type TextFreeBoxProps = {
    id: string;
    children: React.ReactNode;
}


const TextFreeBox = ({
    id,
    children
}: TextFreeBoxProps) => {
    return (
        <div className={styles.box} key={id}>
            {children}
        </div>
    )
}

export default TextFreeBox;