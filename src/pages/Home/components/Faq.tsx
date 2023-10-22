import { Accordion, AccordionSummary, Typography, AccordionDetails, Container } from "@mui/material"
import { CaretDown } from "@phosphor-icons/react"

const QUESTIONS = [
  {
    question: 'Que serviços eco oferecemos?',
    answer: 'Oferecemos uma gama de serviços ecológicos, incluindo reciclagem, gestão de resíduos e soluções de eficiência energética.',
  }, {
    question: 'Nossos serviços são sustentáveis?',
    answer: 'Sim, os nossos serviços ecológicos são sustentáveis. Priorizamos práticas ecológicas para reduzir nosso impacto ecológico.',
    
  },{
    question: 'Como posso me beneficiar de seus serviços ecológicos?',
    answer: 'Ao utilizar os nossos serviços ecológicos, pode reduzir a sua pegada de carbono, contribuir para uma economia circular e melhorar as credenciais de sustentabilidade da sua marca.',
  }, 
  
  {
    question: 'Como posso saber se os seus serviços ecológicos são adequados para mim?',
    answer: 'Se você estiver interessado em reduzir sua pegada de carbono, melhorar suas credenciais de sustentabilidade e contribuir para uma economia circular, nossos serviços ecológicos são adequados para você.',
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
          FAQ
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