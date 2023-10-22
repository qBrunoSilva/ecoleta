import { Box, Button, Container, TextField, Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import { NotificationContext } from "src/contexts/NotificationContext";

export default function CadastroPage() {
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
      <h1>Cadastro</h1>

      <Box display="flex" flexDirection="column" gap={1}>
        <TextField label="Nome" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Senha" type="password" variant="outlined" />
        <TextField label="Confirmação de Senha" type="password" variant="outlined" />
        <Select
          defaultValue=""
          variant="outlined"
          label="Tipo de Pessoa"
        >
          <MenuItem value="">Selecione o tipo de pessoa</MenuItem>
          <MenuItem value={"Física"}>Pessoa Física</MenuItem>
          <MenuItem value={"Jurídica"}>Pessoa Jurídica</MenuItem>
        </Select>
        <Button
          variant="contained"
          onClick={() => {
            showNotification({
              type: "success",
              message: "Cadastro realizado com sucesso",
            });
          }}
          fullWidth
        >
          Cadastrar
        </Button>
      </Box>
    </Container>
  );
}
