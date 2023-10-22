import { Box, Button, Card, Container, Divider, Typography } from "@mui/material";
import { IProduct } from "src/types/Products";
import CardEvento from "./components/CardEvento";
import Search from "./components/Search";

const PRODUCTS: IProduct[] = [
  {
    id: 1,
    name: "Alumínio",
    peso: 23,
    valor: 5.00,
  },
  {
    id: 2,
    name: "Plástico",
    peso: 38.9,
    valor: 0.30,
  },
].map(product => ({
  ...product,
  valorTotal: product.peso * product.valor
}));

export default function CatalogoPage() {
  return (
    <Container
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column", p: 10
      }}
    >
      <Box
        display="flex"
        flexDirection="column" 
        width="100%"
        py={2} 
      >
        <Typography variant="h1" fontWeight={700}>
          Catálogo
        </Typography>
        <Typography fontWeight={300} width="50%" mt={1}>
          Confira os produtos disponíveis para compra 
        </Typography>
      </Box>

        <Search />
      <Box display="flex" gap={2} flexDirection="row">
        {PRODUCTS.map((p) => {
          return (
            <Card>
              <Box
                height={"100%"}
                width={300}
                display="flex"
                flexDirection="column" 
                justifyContent="space-between"
                p={2}
              >
                <Typography variant="h3" fontWeight={700}>
                  {p.name}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                > 
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={300} 
                    >
                    Quantidade disponível: 
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={700}
                    >
                    {p.peso} Kg
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                > 
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={300}
                  >
                    Valor total:
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    {p.valorTotal.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",  
                    })}
                  </Typography>
                </Box>
                <Button 
                  variant="contained"   
                  color="success" 
                  href="/comprar" 
                  fullWidth
                  sx={{
                    mt: 2
                  }}
                >
                 Comprar!
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Box >

      <Divider sx={{ mt: 2, mb: 2 }}>
        Eventos
      </Divider>
      <CardEvento />
      </Box>
      
    </Container>
  );
}
