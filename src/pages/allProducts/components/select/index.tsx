import { SelectProps } from './interface';
import * as S from './style';

export default function Select({
    onSortChange,
    sortBy,
    sortOrder,
}: SelectProps) {
    function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const [sort, order] = e.target.value.split('-');
        onSortChange(sort, order);
    }

    return (
        <S.SelectBox>
            <S.Select
                defaultValue={'default'}
                onChange={handleSortChange}
                value={`${sortBy}-${sortOrder}`}
            >
                <S.Option value="default">Filtrar por:</S.Option>
                <S.Option value="date-desc">Mais recentes</S.Option>
                <S.Option value="date-asc">Mais antigos</S.Option>
                <S.Option value="name-asc">Ordem alfabética: A-Z</S.Option>
                <S.Option value="name-desc">Ordem alfabética: Z-A</S.Option>
            </S.Select>
        </S.SelectBox>
    );
}
