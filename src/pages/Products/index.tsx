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
    name: "Leite 1L",
    minQuantity: 1,
    quantity: 1,
  },
  {
    id: 2,
    name: "Arroz 5Kg",
    minQuantity: 1,
    quantity: 1,
  },
];

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
          Produtos
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            startIcon={<FilePdf weight="duotone" />}
            variant="outlined"
            onClick={() => {
              generateProductPDF({
                header: {
                  nome: "Prefeitura Municipal de Nova Mutum - MT",
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
            Adicionar produto
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Quantidade</TableCell>
              <TableCell>Quantidade mínima</TableCell>
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
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.minQuantity}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        if (row.quantity === 0) return;
                        setProducts((prev) =>
                          prev.map((p) => {
                            if (p.id === row.id) {
                              return { ...p, quantity: p.quantity - 1 };
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
