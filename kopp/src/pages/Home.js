import Title from "../components/Title";
import LinkBtn from "../components/LinkBtn";

const Home = () => {
    return (
        <div className="App">
            <Title title="TKO"></Title>
            <LinkBtn text={"Agree"} href={"/input"}></LinkBtn>
        </div>
    );
}

export default Home;