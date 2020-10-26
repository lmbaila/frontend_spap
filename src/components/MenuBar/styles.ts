import styled, {css} from 'styled-components';
import { FaHome, FaCalendar, FaIdCard, FaCog, FaUserFriends, FaUser, FaChartPie }  from 'react-icons/fa';

export const Container = styled.div`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;  

  }
`;


export const  MenuButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
  flex-shrink: 0;
  > span {
    display: none;
  }
  &:hover{
    > span {
      color: #292961;
    }
  }
  @media(min-width: 1280px) {
    >span {
      display: inline;
      margin-left: 10px;
      font-weight: 600;
      font-size: 14px;
      color: #808388;
    }
  }
  padding: 8.25px 0;
  outline: 0;
`;

const iconCss = css`
  flex-shrink: 0;
  width: 15px;
  height: 15px;
  color: #ff9;
`;
export const  HomeIcon = styled(FaHome)`
  ${iconCss}

`;

export const Employer =  styled(FaUserFriends)`
${iconCss}
`;
export const Calendar =  styled(FaCalendar)`
${iconCss}
`;
export const Contract =  styled(FaIdCard)`
${iconCss}
`;

export const Profile =  styled(FaUser)`
${iconCss}
`;
export const  Seeting =  styled(FaCog)`
${iconCss}
`;

export const AnaliticIcon =  styled(FaChartPie)`
${iconCss}
`;
