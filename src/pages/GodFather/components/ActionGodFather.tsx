import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { formatCNPJ } from "src/constants/functions";
import { NotificationContext } from "src/contexts/NotificationContext";
import { IGodFather } from "src/types/GodFather";
import { useContext } from "react";

interface Props {
  data?: IGodFather;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddGodFather: (godFather: IGodFather) => void;
}

export function ActionGodFather({
  data,
  open,
  setOpen,
  handleAddGodFather,
}: Props) {
  const { showNotification } = useContext(NotificationContext);

  const [godFather, setGodFather] = useState<IGodFather>({
    id: null,
    name: "",
    cnpj: "",
    contribution: 0,
  });

  useLayoutEffect(() => {
    if (data) {
      setGodFather(data);
    } else {
      setGodFather({
        id: null,
        name: "",
        cnpj: "",
        contribution: 0,
      });
    }
  }, [open, data]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleAddGodFather(godFather);
    showNotification({
      type: "success",
      title: "Sucesso",
      message: data
        ? "Padrinho atualizado com sucesso"
        : "Padrinho adicionado com sucesso",
    });
    setOpen(false);
  }

  return (
    <Dialog open={open} maxWidth="xs">
      <DialogTitle>{data ? "Editar" : "Novo"} padrinhos</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <TextField
            placeholder="Nome"
            label="Nome"
            fullWidth
            required
            value={godFather.name}
            onChange={(e) => {
              setGodFather((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <TextField
            placeholder="CNPJ"
            label="CNPJ"
            fullWidth
            required
            value={godFather.cnpj}
            onChange={(e) => {
              setGodFather((prev) => ({
                ...prev,
                cnpj: formatCNPJ(e.target.value),
              }));
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="success" type="submit">
            Salvar
          </Button>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Cancelar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
