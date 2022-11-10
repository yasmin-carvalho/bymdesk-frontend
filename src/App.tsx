import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header typeScreen="login" />
      <Input/>
      <Input/>
      <Input/>
      <Input/>

      <Input/>

      <GlobalStyle />
    </>
  );
}
