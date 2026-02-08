import { useState } from "react";
import styled from 'styled-components';

// import imgDiscord from "../assets/images/Discord.png";
import imgMentoria from "../assets/images/Mentoria.png";
import imgRepo from "../assets/images/Repo.png";
import imgPR from "../assets/images/PR.png";


export const Container = styled.div`
  width: 95%;
  max-width: 800px;
  margin: 0 auto;
  background: #222;
  border-radius: 15px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  overflow: hidden;
  color: #fff;
  transition: all 0.3s ease;

  @media (min-width: 1024px) {
    max-width: 900px;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 50vh;
  min-height: 300px;
  object-fit: contain;
  background: #000;
`;

export const Content = styled.div`
  padding: 1.5rem;        
  text-align: center;

  h3 {
    color: #0077b5;
    margin-bottom: 0.8rem;
    font-size: clamp(1.1rem, 4vw, 1.6rem);
  }

  p {
    color: #666;
    line-height: 1.5;
    font-size: clamp(0.85rem, 2.5vw, 1rem);
    max-width: 600px;
    margin: 0 auto;
    min-height: 3rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #f9f9f9;
  border-top: 1px solid #eee;

  span {
    font-weight: bold;
    color: #333;
    font-size: 0.85rem;
  }

  button {
    background: #0077b5;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #005582;
      transform: translateY(-2px);
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
      transform: none;
      opacity: 0.7;
    }

    @media (min-width: 768px) {
      padding: 0.7rem 1.5rem;
    }
  }
`;

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
//     {
//       title: "Alinhamento Estratégico",
//       description: "Chamada do PO Victor de Souza para definição do workflow Gitflow, para a reunião de alinhamento no Discord.",
//       img: imgDiscord,
//     },
    {
      title: "Sandbox de Treinamento",
      description: "Exploração do repositório TestFlow criado pelo PO para simulação real de processos.",
      img: imgRepo,
    },
    {
      title: "Mentoria Tech Lead",
      description: "Treinamento prático 'hands-on' com o desenvolvedor Israel sobre criação de branches e commits.",
      img: imgMentoria,
    },
    {
      title: "Entrega e Double-Check",
      description: "Pull Request aprovado e mergeado após validação técnica, concluindo o ciclo de treinamento.",
      img: imgPR,
    },
  ];

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    }
  };
  
  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <Container>
      <SlideImage src={slides[current].img} alt={slides[current].title} />
      
      <Content>
        <h3>{slides[current].title}</h3>
        <p>{slides[current].description}</p>
      </Content>

      <Controls>
        <button onClick={prev} disabled={current === 0}>Anterior</button>
        <span>
          {current + 1} / {slides.length}
        </span>
        <button onClick={next} disabled={current === slides.length - 1}>Próximo</button>
      </Controls>
    </Container>
  );
};

export default Carousel;