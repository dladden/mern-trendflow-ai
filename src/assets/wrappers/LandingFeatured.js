import styled from 'styled-components';

const Container = styled.div`
 display: grid;
  gap: 1rem;
  grid-template-areas:
    'special special special'
    'platinum platinum platinum'
    'gold gold gold gold gold';
  
  @media (max-width: 1024px) {
    grid-template-areas:
      'special special'
      'platinum platinum'
      'gold gold gold';
  }

  @media (max-width: 768px) {
    grid-template-areas:
      'special'
      'platinum'
      'gold gold';
  }

  .title-box {
    background-color: #666867;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
  }

  .special-sponsors { grid-area: special; }
  .platinum-sponsors { grid-area: platinum; }
  .gold-sponsors { grid-area: gold; }

  .project-box {
    background-color: #666867;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: green;
    }
  }

  a {
    text-decoration: none;
    color: black;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default Container;
