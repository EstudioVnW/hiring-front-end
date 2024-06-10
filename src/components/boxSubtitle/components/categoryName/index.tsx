import * as S from './style';

export default function CategoryName({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <S.ContainerCategoryName>
            <S.BorderBox />
            <S.ContainerCategoryName>{children}</S.ContainerCategoryName>
        </S.ContainerCategoryName>
    );
}
