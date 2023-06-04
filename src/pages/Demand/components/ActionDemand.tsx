import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { IDemanda } from "src/types/Demanda";
import { useContext } from "react";
import { NotificationContext } from "src/contexts/NotificationContext";

interface Props {
  data?: IDemanda;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddProduct: (product: IDemanda) => void;
}

export function ActionProduct({
  data,
  open,
  setOpen,
  handleAddProduct,
}: Props) {
  const { showNotification } = useContext(NotificationContext);

  const [product, setProduct] = useState<IDemanda>({
    id: null,
    name: "",
    arrecadado: 0,
    quantity: 1,
  });

  useLayoutEffect(() => {
    if (data) {
      setProduct(data);
    } else {
      setProduct({
        id: null,
        name: "",
        arrecadado: 0,
        quantity: 1,
      });
    }
  }, [open, data]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleAddProduct(product);
    setOpen(false);
    showNotification({
      message: data
        ? "Sucesso ao editar produto"
        : "Sucesso ao adicionar produto",
      type: "success",
    });
  }

  return (
    <Dialog open={open} maxWidth="xs">
      <DialogTitle>{data ? "Editar" : "Novo"} produto</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <TextField
            placeholder="Nome do produto"
            label="Nome do produto"
            fullWidth
            required
            value={product.name}
            onChange={(e) => {
              setProduct((prev) => ({
                ...prev,
                name: e.target.value,
              }));
            }}
          />
          <Stack direction="row">
            <TextField
              placeholder="Quantidade"
              label="Quantidade"
              fullWidth
              required
              type="number"
              inputProps={{
                min: 0,
              }}
              value={product.quantity}
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }));
              }}
            />
          </Stack>
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
