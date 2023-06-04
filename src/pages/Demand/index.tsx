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
import { IDemanda } from "src/types/Demanda";
import { ActionProduct } from "./components/ActionDemand";
import { NotificationContext } from "src/contexts/NotificationContext";

import { useContext } from "react";

const PRODUCTS: IDemanda[] = [
  {
    id: 1,
    name: "Leite 1L",
    arrecadado: 0,
    quantity: 10,
  },
  {
    id: 2,
    name: "Arroz 5Kg",
    arrecadado: 1,
    quantity: 10,
  },
];

export default function DemandsPage() {
  const [demanda, setDemands] = useState<IDemanda[]>([]);
  const { showNotification } = useContext(NotificationContext);

  const [openAction, setOpenAction] = useState(false);
  const [product, setDemand] = useState<IDemanda | undefined>(undefined);

  useLayoutEffect(() => {
    setDemands(PRODUCTS);
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
          Demandas da semana
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            startIcon={<DefaultIcons.AddIcon />}
            onClick={() => {
              setDemand(undefined);
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
              <TableCell>Arrecadado</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demanda.length > 0 ? (
              demanda.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.arrecadado}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        if (row.arrecadado + 1 === row.quantity) {
                          showNotification({
                            message: "Produto arrecadado",
                            type: "success",
                          });
                        }

                        setDemands((prev) =>
                          prev.map((p) => {
                            if (p.id === row.id) {
                              return { ...p, arrecadado: p.arrecadado + 1 };
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
                        setDemand(row);
                        setOpenAction(true);
                      }}
                    >
                      <DefaultIcons.EditIcon weight="duotone" />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => {
                        setDemands((prev) =>
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
            return setDemands((prev) =>
              prev.map((prevDemand) =>
                prevDemand.id === product.id ? product : prevDemand
              )
            );
          }

          const productWithId = {
            ...product,
            id: demanda.length + 1,
          };

          setDemands((prev) => [...prev, productWithId]);
        }}
        open={openAction}
        setOpen={setOpenAction}
        data={product}
      />
    </Container>
  );
}
