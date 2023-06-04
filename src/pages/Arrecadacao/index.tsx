import { Box, Button, Card, Typography } from "@mui/material";

const PRODUCTS = [
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

export default function ArrecadacaoPage() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        py={10}
      >
        <Typography variant="h1" fontWeight={700}>
          Arrecadação
        </Typography>
        <Typography fontWeight={300} textAlign="center" width="50%" mt={1}>
          Arrecadação de produtos para doação
        </Typography>
      </Box>
      <Box display="flex" gap={2} flexDirection="row" alignItems="center">
        {PRODUCTS.map((p) => {
          return (
            <Card>
              <Box
                height={150}
                width={300}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                p={2}
              >
                <Typography variant="h3" fontWeight={700}>
                  {p.name}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  fontWeight={700}
                >
                  Arrecadado: {p.arrecadado}/{p.quantity}
                </Typography>
                <Button variant="contained" href="/quero-doar" fullWidth>
                  Quero doar!
                </Button>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
