import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import gif from "../../assets/images/Loading.gif";
import {
  StyledCard,
  StyledDiv1,
  StyledDiv2,
  StyledLoading,
} from "./StyledCard";

export const CardInfo = () => {
  const state = useSelector((state) => state.Info.data);
  const [Render, setRender] = useState();

  useEffect(() => {
    setRender(state);
  }, [state]);
  return <>{Render ? Card(state) : Loading()}</>;
};

const Card = (state) => {
  console.log("new data", state);

  return (
    <StyledCard>
      <Fade direction="left" delay={1000}>
        ~
        <StyledDiv1>
          <p id="localName">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
            </svg>
            {state.location.name}
          </p>
          <p id="temp_c">
            <img src={state.current.condition.icon} alt="" />
            <p id="temp_c">{state.current.temp_c}º</p>
          </p>
        </StyledDiv1>
      </Fade>

      <Fade direction="right" delay={1000}>
        <StyledDiv2>
          <p>{state.current.condition.text}</p>
          <p>Sensação termica: {state.current.feelslike_c}</p>
        </StyledDiv2>
      </Fade>
    </StyledCard>
  );
};
const Loading = () => {
  return (
    <StyledLoading>
      <img src={gif} alt="" />
    </StyledLoading>
  );
};
