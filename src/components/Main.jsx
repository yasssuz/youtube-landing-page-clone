import { Box, Grid, Toolbar, Typography } from "@material-ui/core";
import Video from "./Video";

export default function Main() {
  const videos = [
    {
      id: 1,
      title:
        "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
      channel: "Lucas Nhimi",
      views: "11 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb1.png",
    },
    {
      id: 2,
      title:
        "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
      channel: "Lucas Nhimi",
      views: "957 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb2.png",
    },
    {
      id: 3,
      title:
        "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
      channel: "Lucas Nhimi",
      views: "106 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb3.png",
    },
    {
      id: 4,
      title:
        "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
      channel: "Lucas Nhimi",
      views: "5,6 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb4.png",
    },
    {
      id: 5,
      title:
        "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
      channel: "Lucas Nhimi",
      views: "2,2 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb5.png",
    },
    {
      id: 6,
      title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
      channel: "Lucas Nhimi",
      views: "233 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb6.png",
    },
    {
      id: 7,
      title:
        "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
      channel: "Lucas Nhimi",
      views: "118 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb7.png",
    },
    {
      id: 8,
      title:
        "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
      channel: "Lucas Nhimi",
      views: "1,9 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb8.png",
    },
  ];

  return (
    <Box p={8}>
      <Toolbar />
      <Typography variant='h5' color='textPrimary' style={{ fontWeight: 800 }}>
        Recomendations
      </Typography>
      <Grid container spacing={4}>
        {videos.map(video => (
          <Video data={video} />
        ))}
      </Grid>
    </Box>
  );
}
