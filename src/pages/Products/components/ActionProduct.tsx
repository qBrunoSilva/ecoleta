import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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
    peso: 1,
    valor: 1,
    valorTotal: 1,
  });

  useLayoutEffect(() => {
    if (data) {
      setProduct(data);
    } else {
      setProduct({
        id: null,
        name: "",
        peso: 1,
        valor: 1,
        valorTotal: 1,
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
      <DialogTitle>{data ? "Editar" : "Novo"} anúncio</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          <FormControl  >
      <FormLabel id="demo-radio-buttons-group-label">Tipo de anúncio</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Resíduo" />
        <FormControlLabel value="male" control={<Radio />} label="Evento" /> 
      </RadioGroup>
    </FormControl>

          <TextField
            placeholder="Tipo de resíduo"
            label="Tipo de resíduo"
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
              placeholder="Peso"
              label="Peso (Kg)"
              fullWidth
              required
              type="number"
              inputProps={{
                min: 0,
              }}
              value={product.peso}
              onChange={(e) => {
                setProduct((prev) => ({
                  ...prev,
                  quantity: Number(e.target.value),
                }));
              }}
            />
            <TextField
              placeholder="Valor"
              label="Valor"
              fullWidth
              required
              type="number"
              inputProps={{
                min: 0,
              }}
              value={product.valor}
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
            Anunciar
          </Button>
          <Button onClick={() => setOpen(false)} variant="outlined">
            Cancelar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
