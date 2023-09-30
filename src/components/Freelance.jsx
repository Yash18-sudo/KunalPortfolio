import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:yashbahuguna043@gmail.com',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/yash-bahuguna-5373b4185/',
    altText: 'linkedin',
  },
];

const Freelance = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>Looking for a Full-Stack/Front-End Developer?</Heading>
          <Text>
            I'm a Developer eager to tackle challenging projects. Let's
            collaborate on something awesome! 🚀
          </Text>

          <IconsWrapper>
            {contactIcons.map((icon, i) => (
              <IconLink href={icon.linkTo} key={i}>
                <img src={icon.url} alt={icon.altText} />
              </IconLink>
            ))}
          </IconsWrapper>
        </TextWrapper>
        <Image src='./imgs/freelance.svg' alt='' />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  padding: 2em 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

const IconLink = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
`;

export default Freelance;
