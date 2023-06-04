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
import { IProduct } from "src/types/Products";
import { useContext } from "react";
import { NotificationContext } from "src/contexts/NotificationContext";

interface Props {
  data?: IProduct;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddProduct: (product: IProduct) => void;
}

export function ActionProduct({
  data,
  open,
  setOpen,
  handleAddProduct,
}: Props) {
  const { showNotification } = useContext(NotificationContext);

  const [product, setProduct] = useState<IProduct>({
    id: null,
    name: "",
    minQuantity: 1,
    quantity: 1,
  });

  useLayoutEffect(() => {
    if (data) {
      setProduct(data);
    } else {
      setProduct({
        id: null,
        name: "",
        minQuantity: 1,
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
            <TextField
              placeholder="Quantidade mínima"
              label="Quantidade mínima"
              fullWidth
              required
              type="number"
              inputProps={{
                min: 0,
              }}
              value={product.minQuantity}
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  minQuantity: Number(e.target.value),
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
