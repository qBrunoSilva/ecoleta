import { Accordion, AccordionSummary, Typography, AccordionDetails, Container } from "@mui/material"
import { CaretDown } from "@phosphor-icons/react"

const QUESTIONS = [
  {
    question: 'Que serviços eco oferecemos?',
    answer: 'Facilitamos a conexão entre o comprador e o vendedor de resíduos, para que os resíduos possam ser reutilizados e reciclados.',
  }, 
  {
    question: 'Nossos serviços são sustentáveis?',
    answer: 'Sim, os nossos serviços ecológicos são sustentáveis. Priorizamos práticas ecológicas para reduzir nosso impacto ecológico.',
  },
  {
    question: 'Como posso me beneficiar de seus serviços ecológicos?',
    answer: 'Ao utilizar os nossos serviços ecológicos, contribuindo para uma economia circular e melhorar as credenciais de sustentabilidade da sua marca.',
  }
]

export function Faq(){
  return(
    <Container>
      <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          alignSelf="center"
          mt={10}
          mb={3}
        >
          Perguntas frequentes
        </Typography>
      {
        QUESTIONS.map((q) => (
          <Accordion elevation={3}>
          <AccordionSummary
            expandIcon={<CaretDown  />} 
          >
            <Typography>{q.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
             {q.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>))
      }
    </Container>
  )
}