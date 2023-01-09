import styled from 'styled-components';
export const ListContacts = styled.ul`
  margin: 0;
  margin-left: 10px;
  padding: 0;
`;
export const ItemContact = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
export const NameUser = styled.p`
  margin: 0;
`;
export const ButtonDel = styled.button`
  margin-right: 20px;
  width: 80px;
  padding: 3px;
  background-color: #e0ffff;
  border: solid 1px;
  border-radius: 2px;
  cursor: pointer;

  :hover,
  focus {
    transform: scale(1.05);
    background-color: rgb(135, 206, 250);
  }
`;
