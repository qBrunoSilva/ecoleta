import { Box, Typography } from "@mui/material";
import Logo from "src/assets/images/Ecoleta.svg";
import { ResponsiveBar } from "@nivo/bar";
import MapComponent from "./components/Map";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import ResponsiveAppBar from "src/components/AppBarHome";
import { Faq } from "./components/Faq"; 

export default function HomePage() {
  const data = [
    {
      Month: "Janeiro",
      Metal: 50,
      "Alumínio": 25,
      "Plástico": 45,
      Outros: 23
    },
    {
      Month: "Fevereiro",
      Metal: 46,
      "Alumínio": 23,
      "Plástico": 45,
      Outros: 19
    },
    {
      Month: "Julho",
      Metal: 40,
      "Alumínio": 20,
      "Plástico": 45,
      Outros: 5

    },
    {
      Month: "Agosto",
      Metal: 122,
      "Alumínio": 60,
      "Plástico": 45,
      Outros: 13

    },
    {
      Month: "Setembro",
      Metal: 175,
      "Alumínio": 68,
      "Plástico": 45,
      Outros: 20 
    },
    {
      Month: "Outubro",
      Metal: 201,
      "Alumínio": 70,
      "Plástico": 45,
      Outros: 50 
    },
  ];

  return (
    <Box
      sx={{
        pb: 6,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ResponsiveAppBar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%" 
        sx={{
          bgcolor: "#f8f5ee",
          color: "#086a35"
        }}
        py={10}
      >
        <Typography variant="h1" fontWeight={700} mt={2}>
          Ecoleta
        </Typography>
        <Typography
          fontWeight={300}
          sx={{
            color: "#8bbd94"
          }}
          textAlign="center"
          width="50%"
          mt={1}
        >
          A Ecoleta é uma empresa ecologicamente correta que ajuda você a fazer a diferença no meio ambiente, uma escolha de cada vez. Fornecemos soluções convenientes para eliminação e reciclagem de resíduos para facilitar que indivíduos, empresas e comunidades salvem o planeta.
        </Typography>
      </Box>
      <Box width="70%">
        <Typography
          variant="h4"
          fontWeight={300}
          textAlign="center"
          alignSelf="center"
          mt={5}
          mb={3}
        >
          Salvando o meio ambiente, uma escolha de cada vez com Ecoleta
        </Typography>
      </Box>
      <Box display="flex" flexDirection={
        {
          xs: "column",
          md: "row"
        }
      } mt={1} width="70%">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={Logo} width={"100%"} height={400} />
        </Box>
        <Box
          px={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
        >
          <Typography variant="body1" fontWeight={300}>
            <strong>Ecoleta</strong> incentiva todos a serem mais conscientes do ponto de vista ambiental,
            ajudando-os a reduzir o desperdício. Com a ecoleta, hoje é fácil reciclar seus
            resíduos, tornando o mundo um lugar mais limpo e verde.
          </Typography>
          <Typography variant="body1" fontWeight={300}>
            Somos apaixonados por
            causar um impacto positivo no meio ambiente, oferecendo produtos e serviços sustentáveis ​​e inovadores.
            Com nosso amplo conhecimento e experiência na indústria ecológica, nos esforçamos para ajudar indivíduos e empresas a adotarem práticas mais ecológicas. A nossa missão é criar um planeta mais limpo e saudável para as gerações futuras através do nosso compromisso com a sustentabilidade e o consumo responsável.
          </Typography>
          
        </Box>
      </Box>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        alignSelf="center"
        mt={10}
        mb={3}
      >
        Coletas nos últimos meses
      </Typography>
      <Box width={"90%"} height={400}>
        <ResponsiveBar
          data={data}
          keys={["Metal", "Alumínio", "Plástico",
            // "Papel", "Vidro"
          ]}
          indexBy="Month"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Meses",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Coletas",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in Month: " + e.indexValue
          }
        />
      </Box> 
      <Faq />
      <Box width={"90%"} height={400}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          alignSelf="center"
          mt={10}
          mb={3}
        >
          Pontos de vendas
        </Typography>
        <MapComponent initialCoords={[-15.5556, -56.0601]} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          bgcolor: "#f8f5ee"
        }}
        width={"100%"}
        py={10}
        mt={7}
      >
        <Typography my={2} variant="h3" fontWeight={700}
          sx={{
            color: "#086a35"
          }}
        >
          Fale conosco
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          <TwitterLogo size={"3rem"} weight="duotone" color="#086a35" />
          <FacebookLogo size={"3rem"} weight="duotone" color="#086a35" />
          <InstagramLogo size={"3rem"} weight="duotone" color="#086a35" />
          <YoutubeLogo size={"3rem"} weight="duotone" color="#086a35" />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end" 
        mt={1}
      >
        <Typography color="text.secondary" fontWeight={300}>
          &copy; {new Date().getFullYear()} Ecoleta. Todos os direitos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
}
