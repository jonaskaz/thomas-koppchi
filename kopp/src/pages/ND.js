import Title from "../components/Title";
import Image from "../components/Image";
import Desc from "../components/Desc";

const ND = () => {
    return (
        <div className="App">
            <Title title="ND"></Title>
            <Image src={require("../images/ND-art.jpg")}></Image>
            <Desc description={"Test Description"}></Desc>
        </div>
    );
}

export default ND;