import { LinkButton } from "./linkbtn.styles";

const LinkBtn = ({text, href}) => {
    return (
        <LinkButton href={href}>
        {text}
        </LinkButton>
    )

}

export default LinkBtn