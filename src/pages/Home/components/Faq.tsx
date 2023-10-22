import { Accordion, AccordionSummary, Typography, AccordionDetails, Container } from "@mui/material"

const QUESTIONS = [
  {
    question: 'What is Netflix?',
    answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
  }
]

export function Faq(){
  return(
    <Container>
      {/* teste */}
      {
        QUESTIONS.map((q) => (
          <Accordion elevation={3}>
          <AccordionSummary
            // expandIcon={< />} 
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