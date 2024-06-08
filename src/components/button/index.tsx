import { ButtonProps } from './interface';

export default function Button(props: ButtonProps) {
    return <button {...props}>{props.children}</button>;
}
