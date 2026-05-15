import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [data, setData] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    setIsLoginForm(true);
  };
  const handleRegister = () => {
    setIsLoginForm(false);
  };

  const handleChangeLogin = (e) => {
    setData(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPass(e.target.value);
  };

  return (
    <Stack sx={{ alignItems: "center" }}>
      {isLoginForm ? (
        <Stack sx={{ width: 350, gap: 2 }}>
          <Typography variant="h3" gutterBottom>
            Вход в сервис
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Нет учетной записи?
          </Typography>
          <Button onClick={handleRegister} variant="text">
            Зарегестрироваться
          </Button>
          <TextField
            id="login"
            label="Login"
            variant="standard"
            onChange={handleChangeLogin}
            value={data}
          />

          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={handleChangePassword}
            value={pass}
          />

          <Button variant="contained">Войти</Button>
        </Stack>
      ) : (
        <Stack sx={{ width: 350, gap: 2 }}>
          <Typography variant="h3" gutterBottom>
            Регестрация в сервисе
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Есть учетная запись?
          </Typography>
          <Button onClick={handleLogin} variant="text">
            Войти
          </Button>
          <TextField
            id="login"
            label="Login"
            variant="standard"
            onChange={handleChangeLogin}
            value={data}
          />

          <TextField
            id="password"
            label="Password"
            variant="standard"
            type="password"
            onChange={handleChangePassword}
            value={pass}
          />

          <Button variant="contained">Регестрация</Button>
        </Stack>
      )}
    </Stack>
  );
}

export default App;
