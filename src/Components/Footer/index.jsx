import tw from "tailwind-styled-components"

const Container = tw.div`
    flex
    justify-center
    items-center 
    bg-slate-200
`
const Text = tw.p`
    text-base 
    font-normal
`
const Footer = () => {
    return(
        <Container >
            <Text>MKS sistemas © Todos os direitos reservados</Text>
        </Container>
    )
}

export default Footer