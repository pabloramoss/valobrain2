import styled from "styled-components";

const SlideItemContainer = styled.div`
  box-shadow: 0 0 20px rgb(243 76 97 / 60%);
`;

export const SlideItem: React.FC = () => {
  return (
    <SlideItemContainer>
      <img src="https://via.placeholder.com/300" />
    </SlideItemContainer>
  );
};
