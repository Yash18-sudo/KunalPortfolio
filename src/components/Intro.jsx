import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, HighlightedLink } from '../styles/globalStyles';
import resume from '../assets/KunalPandey_Resume.pdf';
import { FiDownload } from 'react-icons/fi';
import { BsGithub, BsLinkedin} from 'react-icons/bs';
import {MdEmail, MdCall} from 'react-icons/md';

const Intro = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Wrapper>
          <MyImg src="./imgs/profile.png" alt="Kunal Pandey" loading="lazy" />
          {/* <Image src='./imgs/contact.svg' alt='' /> */}
          <Description>
            <Heading>Kunal Pandey</Heading>
            <Title>2D & 3D Motion Graphic Designer</Title>
            <Bio>Passionate about Designing | Life long learner</Bio>
            <HighlightedLink href={resume} target="_blank">
              Download Resume <FiDownload />
            </HighlightedLink>
            <IconsWrapper>
              <Icon href="mailto:kunalpandeykp18@gmail.com" target="_blank">
                <MdEmail />
              </Icon>
              <Icon href="tel:9720353248">
                <MdCall />
              </Icon>
            </IconsWrapper>
          </Description>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Intro;

const Wrapper = styled.div`
  padding: 2em 0;
  margin: 2em 0;
  min-height: 50vh;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 12em;
  }
`;

const Description = styled.div`
  flex-grow: 1;
`;

const Heading = styled.h1`
  font-size: 3em;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const Title = styled.p`
  font-size: 1.2em;
  font-weight: 400;
`;

const Bio = styled.p`
  color: var(--other-para-color);
  font-size: 0.9em;
  margin-bottom: 1em;
`;

const MyImg = styled.img`
  display: block;
  width: 50%;
  max-width: 160px;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-bottom: 1.5em;
    max-width: 80px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1em;
`;

const Icon = styled.a`
  color: var(--para-color);
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em;

  :hover {
    color: var(--accent-blue);
  }
`;
