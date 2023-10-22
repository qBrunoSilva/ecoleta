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
      <Select
          defaultValue="fisica"
          variant="outlined"
          label="Tipo de Pessoa"
        >
          <MenuItem value="">Selecione o tipo de pessoa</MenuItem>
          <MenuItem value={"fisica"}>Pessoa Física</MenuItem>
          <MenuItem value={"juridica"}>Pessoa Jurídica</MenuItem>
        </Select>
        <TextField label="CPF" variant="outlined" />
        <TextField label="Nome" variant="outlined" />
        <TextField label="CEP" variant="outlined" />
        <TextField label="Cidade" variant="outlined" />
        <TextField label="Estado" variant="outlined" /> 
        
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
