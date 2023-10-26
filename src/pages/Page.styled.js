import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  padding: 20px;
  display: flex;

  .title {
    text-align: center;
    margin-bottom: 40px;
  }
  .postList {
    padding: 0;
    list-style-type: none;
    display: flex;
  }
  .description {
    padding: 40px;
    display: grid;
  }
  .goBackLink {
    
    padding: 20px;
    display: grid;
    gap: 15px;
    text-decoration: none;
  }
`;

export const MoviesPagrWrapper = styled.div`
  padding: 20px;
  display: flex;

  .labelSearch {
    margin-right: 8px;
  }

`;
