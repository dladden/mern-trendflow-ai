import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  grid-template-columns: 1fr; // default to 1 column

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); // 2 columns for medium screens
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr); // 3 columns for large screens
  }

  .feature-card {
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .icon {
      /* Style for your icons */
      margin-bottom: 1rem;
      font-size: 3rem; // Example size, adjust as needed
    }

    .title {
      margin: 0.5rem 0;
    }

    .text {
      font-size: 0.9rem;
    }
  }
`;

export default Container;
