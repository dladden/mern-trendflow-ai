import styled from 'styled-components';

const Container = styled.button`
 width: 60px;
  height: 25px;
  background: var(--clr-grey-5);
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .icon {
    position: absolute;
    transition: opacity 0.3s;
  }

  .sun-icon {
    opacity: 1;
  }

  .moon-icon {
    opacity: 0;
  }

  &.dark .moon-icon {
    opacity: 1;
  }

  &.dark .sun-icon {
    opacity: 0;
  }

  .circle {
    width: 25px;
    height: 25px;
    background: var(--clr-white);
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s;
  }

  &.dark .circle {
    transform: translateX(35px);
  }
`;
export default Container;
