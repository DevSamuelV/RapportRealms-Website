import { Title } from "../Title/Title";
import { MarginSpacer } from "../Spacing/MarginSpacer";
import { NavButtonContainer } from "../Spacing/NavButtonContainer";
import { NavButton } from "../Button/NavButton";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();

  return (
    <MarginSpacer spacing={4} inline={true} fullWidth={true}>
      <Title
        size="text-lg"
        text="Rapport Realms"
        onClick={() => {
          router.push("/");
        }}
      />

      <NavButtonContainer position="right">
        <NavButton text="Court" onClick={() => {}} />
        <NavButton
          text="Jailed"
          onClick={() => {
            router.push("Jailed");
          }}
        />
      </NavButtonContainer>
    </MarginSpacer>
  );
}
