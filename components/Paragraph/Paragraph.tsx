import { ParagraphProps } from "./Paragraph.props";
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({ size = 's', children, className, ...props }: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(styles.p, className, {
                [styles.l]: size == 'l',
                [styles.m]: size == 'm',
                [styles.s]: size == 's'
            })}
            {...props}
        >
            {children}
        </p>
    );
};