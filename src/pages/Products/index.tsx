import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { DefaultIcons } from "src/constants/Icons";
import { IProduct } from "src/types/Products";
import { ActionProduct } from "./components/ActionProduct";
import { NotificationContext } from "src/contexts/NotificationContext";

import { useContext } from "react";
import { generateProductPDF } from "src/services/printer/product";
import { FilePdf } from "@phosphor-icons/react";

const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Aluminio",
    peso: 23,
    valor: 5.00,
  },
  {
    id: 2,
    name: "Papelão",
    peso: 38.9,
    valor: 0.30,
  },
].map(product => ({
  ...product,
  valorTotal: product.peso * product.valor
}));

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { showNotification } = useContext(NotificationContext);

  const [openAction, setOpenAction] = useState(false);
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  useLayoutEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        my={2}
      >
        <Typography variant="h3" fontWeight="bold">
          Meus anúncios
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            startIcon={<FilePdf weight="duotone" />}
            variant="outlined"
            onClick={() => {
              generateProductPDF({
                header: {
                  nome: "ECOleta",
                  cnpj: "00.000.000/0000-00",
                },
                products,
              });
            }}
          >
            PDF
          </Button>
          <Button
            startIcon={<DefaultIcons.AddIcon />}
            onClick={() => {
              setProduct(undefined);
              setOpenAction(true);
            }}
          >
            Anunciar
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Peso</TableCell>
              <TableCell>Valor Unitário</TableCell>
              <TableCell>Valor total</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length > 0 ? (
              products.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.peso.toFixed(3)} Kg</TableCell>
                  <TableCell>{row.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
                  <TableCell>{row.valorTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        if (row.peso === 0) return;
                        setProducts((prev) =>
                          prev.map((p) => {
                            if (p.id === row.id) {
                              return { ...p, quantity: p.peso - 1 };
                            }
                            return p;
                          })
                        );
                      }}
                    >
                      <DefaultIcons.CardapioIcon weight="duotone" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        setProduct(row);
                        setOpenAction(true);
                      }}
                    >
                      <DefaultIcons.EditIcon weight="duotone" />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => {
                        setProducts((prev) =>
                          prev.filter((product) => product.id !== row.id)
                        );
                        showNotification({
                          message: "Sucesso ao remover",
                          type: "success",
                        });
                      }}
                    >
                      <DefaultIcons.DeleteIcon weight="duotone" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  Nenhum produto cadastrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ActionProduct
        handleAddProduct={(product) => {
          if (product.id) {
            return setProducts((prev) =>
              prev.map((prevProduct) =>
                prevProduct.id === product.id ? product : prevProduct
              )
            );
          }

          const productWithId = {
            ...product,
            id: products.length + 1,
          };

          setProducts((prev) => [...prev, productWithId]);
        }}
        open={openAction}
        setOpen={setOpenAction}
        data={product}
      />
    </Container>
  );
}