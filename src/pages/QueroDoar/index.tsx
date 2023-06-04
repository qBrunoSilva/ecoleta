import { Box, Button, Container, Divider, TextField } from "@mui/material";
import { useContext } from "react";
import { NotificationContext } from "src/contexts/NotificationContext";

export default function QueroDoarPage() {
  const { showNotification } = useContext(NotificationContext);
  return (
    <Container
      sx={{
        bgcolor: "background.paper",
        p: 3,
        borderRadius: 1,
      }}
      maxWidth="xs"
    >
      <h1>Quero Doar</h1>

      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          label="Produtos"
          placeholder="Ex: 10kg de arroz, 5L de leite, 2kg de feijão, etc."
          multiline
          rows={4}
          variant="outlined"
        />
        <Divider
          sx={{
            my: 1,
          }}
        />
        {/* <TextField label="Quantidade" defaultValue={1} variant="outlined" /> */}
        <TextField
          label="Local de retirada"
          multiline
          rows={4}
          variant="outlined"
        />
        <TextField label="Contato" variant="outlined" />
        <Button
          variant="contained"
          onClick={() => {
            showNotification({
              type: "success",
              message: "Enviado com sucesso",
            });
          }}
          fullWidth
        >
          Enviar
        </Button>
      </Box>
    </Container>
  );
}
