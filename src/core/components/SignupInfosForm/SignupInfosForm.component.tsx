import { Input } from "@/app/presentation/components/layout/atoms/input"
import { Box, Stack, styled } from "@mui/material"

const SimpleLayoutContainer = styled(Box)(() => ({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  paddingTop: "80px",
  paddingBottom: "80px",
}))

export const SignupInfosForm = () => {
  return (
    <SimpleLayoutContainer>
      <div style={{ display: "flex", width: "100%", gap: "10px" }}>
        <Input label={"Nome* (obrigatório)"} placeholder="Ex.: John" />
        <Input label={"Sobrenome* (obrigatório)"} placeholder="Ex.: Doe" />
      </div>
      <div style={{ display: "flex", width: "100%", gap: "10px" }}>
        <Input label={"Intituição* (opcional)"} placeholder="Ex.: IFB" />
        <Input label={"Curso* (opcional)"} placeholder="Ex.: Letras" />
      </div>
      <Input label={"Você é?* (obrigatório)"} placeholder="Ex.: Estudante" />
    </SimpleLayoutContainer>
  )
}

export default SignupInfosForm
