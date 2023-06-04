import { Box, Typography } from "@mui/material";
import selo from "src/assets/images/selo.png";
import { ResponsiveBar } from "@nivo/bar";
import MapComponent from "./components/Map";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export default function HomePage() {
  const data = [
    {
      Month: "Janeiro",
      Alimentos: 50,
      Limpeza: 25,
    },
    {
      Month: "Fevereiro",
      Alimentos: 46,
      Limpeza: 23,
    },
    {
      Month: "Março",
      Alimentos: 40,
      Limpeza: 20,
    },
    {
      Month: "Abril",
      Alimentos: 122,
      Limpeza: 60,
    },
    {
      Month: "Maio",
      Alimentos: 175,
      Limpeza: 68,
    },
    {
      Month: "Junho",
      Alimentos: 201,
      Limpeza: 70,
    },
  ];
  return (
    <Box
      sx={{
        // pt: 8,
        pb: 6,
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
        bgcolor="info.main"
        py={10}
      >
        <Typography variant="h1" fontWeight={700} color="white">
          Mercado do bem
        </Typography>
        <Typography
          fontWeight={300}
          color="white"
          textAlign="center"
          width="50%"
          mt={1}
        >
          O Mercado do Bem é um projeto social com parceria com a Prefeitura de
          Nova Mutum que visa ajudar as pessoas que mais precisam, através de
          doações de Alimentos e produtos de higiene e Limpeza para famílias em
          situação de vulnerabilidade social.
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
          Seja você uma ONG, uma empresa social ou uma iniciativa independente,
          o selo Bem é um símbolo poderoso que irá atrair atenção, despertar
          emoções e inspirar confiança. Juntos, vamos construir um mundo mais
          solidário, onde cada ação conta e faz a diferença!
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" mt={1} width="70%">
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <img src={selo} width={400} height={400} />
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
            O selo <strong>Solidariedade em Ação</strong> é uma forma de
            reconhecimento e certificação para organizações e projetos que se
            dedicam à promoção da solidariedade. Ele desempenha um papel
            importante por diversos motivos:
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            <strong> &#x2022; Credibilidade:</strong> Ao exibir o selo em suas
            comunicações e materiais, as organizações ganham credibilidade aos
            olhos do público. O selo atesta que elas estão comprometidas em agir
            de forma solidária e genuína, aumentando a confiança dos
            stakeholders.
          </Typography>
          <Typography variant="body2" fontWeight={300}>
            <strong> &#x2022; Comunicação efetiva:</strong> O selo
            "Solidariedade em Ação" é um símbolo visual poderoso que comunica
            instantaneamente o compromisso de uma organização com a
            solidariedade. Ele permite uma comunicação clara e rápida,
            transmitindo aos stakeholders o propósito e os valores da
            organização.
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
        Doações nos últimos meses
      </Typography>
      <Box width={"90%"} height={400}>
        <ResponsiveBar
          data={data}
          // keys={["Alimentos", "Limpeza", "Higiene", "Outros"]}
          keys={["Alimentos", "Limpeza"]}
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
            legend: "Month",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Doações",
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

      <Box width={"90%"} height={400}>
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          alignSelf="center"
          mt={10}
          mb={3}
        >
          Empresas parceiras do projeto
        </Typography>
        <MapComponent initialCoords={[-13.8385, -56.0808]} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
        width="100%"
        bgcolor="info.main"
        py={10}
        mt={7}
      >
        <Typography my={2} variant="h3" fontWeight={700} color="white">
          Fale conosco
        </Typography>
        <Box display="flex" flexDirection="row" gap={2}>
          <TwitterLogo size={"3rem"} weight="duotone" color="white" />
          <FacebookLogo size={"3rem"} weight="duotone" color="white" />
          <InstagramLogo size={"3rem"} weight="duotone" color="white" />
          <YoutubeLogo size={"3rem"} weight="duotone" color="white" />
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
          &copy; {new Date().getFullYear()} História do Bem. Todos os direitos
          reservados.
        </Typography>
      </Box>
    </Box>
  );
}
