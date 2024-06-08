import { ButtonProps } from './interface';
import * as S from './style';

export default function Button(props: ButtonProps) {
    return <S.Button {...props}>{props.children}</S.Button>;
}
