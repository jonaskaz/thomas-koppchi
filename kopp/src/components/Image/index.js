import { Img } from "./image.styles";

const Image = ({src, alt}) => {
  return (
    <Img alt={alt} src={src}>
    </Img>
  );
}

export default Image;