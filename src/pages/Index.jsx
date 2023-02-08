import { CardInfo } from "../components/Card/CardInfo";
import { Search } from "../components/Search/Seacrch";
import { StyledIndex } from "./StyledIndex";

const Index = () => {
  return (
    <StyledIndex>
      <h1>Previsão do tempo</h1>

      <Search />

      <CardInfo />
    </StyledIndex>
  );
};

export default Index;
