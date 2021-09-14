import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.primary};
    width: 360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;
`;

export const Map = styled.div`
    background-color: red;
    width: 500px;
`;

export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 30px;
    }
`;

export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-wight: bold;
    line-height: 29px;
    margin-bottom: 10px;
`;

export const Card = styled.div`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;

export const CarouselTitle = styled.h1`
    font family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-width: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    line-height: 29px;
    font-size: 24px;
    font-wight: bold;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-wight: normal;
    line-height: 19px;
    font-size: 16px;
`;