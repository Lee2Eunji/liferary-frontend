import styled from "styled-components";
import Post from "../../types/postType";
import { useRouter } from "next/router";
import ListItem from "../Commons/ListItem";

export default function ListTable2({
  list,
  page,
}: {
  list: Post[];
  page: number;
}) {
  const router = useRouter();
  const handleClickListItem = (id: string) => {
    router.push(`http://localhost:3000/community?id=${id}`);
  };

  return (
    <ListContainer>
      <TitleWrapper>
        <span>Index</span>
        <span>Title</span>
        <span>Name</span>
        <span>Date</span>
      </TitleWrapper>
      {list.map((el: Post, idx) => (
        <ListWrapper key={el.id} onClick={() => handleClickListItem(el.id)}>
          <ListItem
            idx={(page - 1) * 9 + idx + 1}
            title={el.title}
            nickname={el.nickname}
            modifiedDate={el.modifiedDate}
          />
        </ListWrapper>
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 70vw;
  height: 5vh;
  margin-top: 3vh;
  padding: 0 20px;

  align-content: center;
  transition: all 0.5s ease-in-out;

  :hover {
    transform: translateY(3px);
    color: var(--color-light);
  }
`;

const TitleWrapper = styled(ListWrapper)`
  height: 6vh;

  background-color: var(--color-normal);
  color: white;
  border-radius: 10px;

  font-size: 20px;
  opacity: 0.5;
`;
