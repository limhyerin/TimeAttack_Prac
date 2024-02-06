import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store from "../redux/config/configStore";

const Home = () => {
  //const [todo, setTdo] = useState([])
  //const [title, setTitle] = useState("");
  //const [body, setBody] = useState("");

  return <div>
    <Provider store={store}>
      <Header/>
      <Main/>
      <Footer/>
    </Provider>
  </div>;
};

export default Home;
