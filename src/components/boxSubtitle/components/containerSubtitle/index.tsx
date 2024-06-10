import * as S from './style';

export default function ContainerSubtitle({
    children,
}: {
    children: React.ReactNode;
}) {
    return <S.BoxSubtitle>{children}</S.BoxSubtitle>;
}
