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
  const [data, setData] = useState('');
  const [pass, setPass] = useState('');

  console.log(data);

  const handleLogin = () => {
    setData(Date.now());
  };

  const handleChangeLogin = (e)=>{ setData(e.target.value)}
  const handleChangePassword = (e)=>{ setPass(e.target.value)}

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Stack sx={{ width: 350, gap: 2 }}>
        <Typography variant="h3" gutterBottom>
          Вход в сервис {data}
        </Typography>

        <TextField id="login" label="Login" variant="standard" onChange={handleChangeLogin} value={data}/>

        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          onChange={handleChangePassword}
          value={pass}
        />

        <Button onClick={handleLogin} variant="contained">
          Войти
        </Button>
      </Stack>
    </Stack>
  );
}

export default App;
