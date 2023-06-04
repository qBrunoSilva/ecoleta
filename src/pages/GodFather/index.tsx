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
  useTheme,
} from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { DefaultIcons } from "src/constants/Icons";
import { IGodFather } from "src/types/GodFather";
import { ActionGodFather } from "./components/ActionGodFather";
import { NotificationContext } from "src/contexts/NotificationContext";
import { useContext } from "react";
import { generateGodFatherPDF } from "src/services/printer/godFather";
import { Check, FilePdf } from "@phosphor-icons/react";

const PADRI: IGodFather[] = [
  {
    id: 1,
    name: "Empresa 1",
    cnpj: "00.000.000/0000-00",
    contribution: 9,
  },
  {
    id: 2,
    name: "Empresa 2",
    cnpj: "00.000.000/0000-00",
    contribution: 1,
  },
];

export default function GodFather() {
  const { showNotification } = useContext(NotificationContext);
  const theme = useTheme();

  const [godFathers, setGodFathers] = useState<IGodFather[]>([]);
  const [openAction, setOpenAction] = useState(false);
  const [godFather, setGodFather] = useState<IGodFather | undefined>(undefined);

  useLayoutEffect(() => {
    setGodFathers(PADRI);
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
          Padrinhos
        </Typography>
        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            startIcon={<FilePdf weight="duotone" />}
            variant="outlined"
            onClick={() => {
              generateGodFatherPDF({
                header: {
                  nome: "Prefeitura Municipal de Nova Mutum - MT",
                  cnpj: "00.000.000/0000-00",
                },
                godFathers,
              });
            }}
          >
            PDF
          </Button>
          <Button
            startIcon={<DefaultIcons.AddIcon />}
            onClick={() => {
              setGodFather(undefined);
              setOpenAction(true);
            }}
          >
            Adicionar padrinho
          </Button>
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>CNPJ</TableCell>
              <TableCell>Contribuições</TableCell>
              <TableCell>Selo</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {godFathers.length > 0 ? (
              godFathers.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.cnpj}</TableCell>
                  <TableCell>{row.contribution}</TableCell>
                  <TableCell>
                    {row.contribution >= 10 ? (
                      <Check color={theme.palette.success.main} />
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        if (row.contribution + 1 === 10)
                          showNotification({
                            type: "success",
                            message: "Padrinho completou 10 contribuições",
                          });
                        setGodFathers((prev) =>
                          prev.map((p) => {
                            if (p.id === row.id) {
                              return { ...p, contribution: p.contribution + 1 };
                            }
                            return p;
                          })
                        );
                      }}
                    >
                      <DefaultIcons.AddIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="info"
                      onClick={() => {
                        setGodFather(row);
                        setOpenAction(true);
                      }}
                    >
                      <DefaultIcons.EditIcon weight="duotone" />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => {
                        setGodFathers((prev) =>
                          prev.filter((godFather) => godFather.id !== row.id)
                        );

                        showNotification({
                          type: "success",
                          message: "Padrinho removido com sucesso",
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
                  Nenhum padrinho cadastrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <ActionGodFather
        handleAddGodFather={(godFather) => {
          if (godFather.id) {
            return setGodFathers((prev) =>
              prev.map((prevGodFather) =>
                prevGodFather.id === godFather.id ? godFather : prevGodFather
              )
            );
          }

          const godFatherWithId = {
            ...godFather,
            id: godFathers.length + 1,
          };

          setGodFathers((prev) => [...prev, godFatherWithId]);
        }}
        open={openAction}
        setOpen={setOpenAction}
        data={godFather}
      />
    </Container>
  );
}
