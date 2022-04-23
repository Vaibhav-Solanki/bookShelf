import "./book.css";
import Navbar from "../Components/navbar/navbar";
import Footer from "../Components/footer/footer";
import Chats from "../Components/chats";
import { useParams } from "react-router-dom";
export default function book() {
  const { id } = useParams();
  return (
    <>
      <Navbar />
      <Chats roomId={id} />
      <iframe
        src="https://archive.org/details/ourfriendburroug00barrrich/mode/2up?ref=ol&view=theater"
        frameBorder="0"
        className="pdfBox"
      ></iframe>
      <Footer />
    </>
  );
}
