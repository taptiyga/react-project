import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <Stack sx={{ alignItems: "center" }}>
      <Stack sx={{ width: 350, gap: 2 }}>
        <Typography variant="h3" gutterBottom>
          Вход в сервис
        </Typography>

        <TextField label="Login" variant="standard" />

        <TextField label="Password" variant="standard" type="password" />

        <Button variant="contained">Войти</Button>
      </Stack>
    </Stack>
  );
}

export default App;
