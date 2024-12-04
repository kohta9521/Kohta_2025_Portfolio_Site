import React from 'react';

// next
import Image from 'next/image';

// hooks
import useAOS from '@/hooks/useAOS';

// scss
import styles from './styles/SubPageTemp.module.scss';

// components

// props
export type SubPageTempProps = {
    id: string;
    enTitle: string;
    jaTitle: string;
    desc: string;
    children: React.ReactNode;
}