import { useNavigate } from "react-router-dom";
import "./grid.css";
export default function grid() {
  const navigate = useNavigate();
  let books = [
    {
      id: 1,
      title: "Harry Potter and the Philosopher's Stone",
      thumbnail: "https://covers.openlibrary.org/b/id/10521270-L.jpg",
      description:
        "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches",
      key: "harrypotterphilo0000rowl_j1k7",
    },
    {
      id: 2,
      title: "Harry Potter and the Deathly Hallows",
      thumbnail: "https://covers.openlibrary.org/b/id/12001885-L.jpg",
      description:
        "it's no longer safe for Harry at Hogwarts, so he and his best friends, Ron and Hermione, are on the run. Professor Dumbledore has given them clues about what they need to do to defeat the dark wizard, Lord Voldemort, once and for all, but it's up to them to figure out what these hints and suggestions really mean. Their cross-country odyssey",
      key: "harrypotterdeath0000rowl_c0f9",
    },
    {
      id: 3,
      title: "Harry Potter a Tajemná komnata",
      thumbnail: "https://covers.openlibrary.org/b/id/12581306-L.jpg",
      description:
        "Throughout the summer holidays after his first year at Hogwarts School of Witchcraft and Wizardry, Harry Potter has",
      key: "/harrypottertajem0000rowl",
    },
    {
      id: 4,
      title: "Harry Potter and the Half-Blood Prince",
      thumbnail: "https://covers.openlibrary.org/b/id/12460285-L.jpg",
      description:
        "The war against Voldemort is not going well; even Muggle governments are noticing. Ron scans the obituary pages of the Daily Prophet, looking for familiar names. Dumbledore is absent from Hogwarts for long stretches of time, and the Order of the Phoenix has already suffered losses.",
      key: "harrypotterhalfb0000rowl_r5b4",
    },
    {
      id: 5,
      title: "Harry Potter and the Goblet of Fire",
      thumbnail: "https://covers.openlibrary.org/b/id/12631313-L.jpg",
      description:
        "The fourth book in the Harry Potter franchise sees Harry returning for his fourth year at Hogwarts School of Witchcraft and Wizardry, along with his friends, Ron and Hermione . There is an upcoming tournament between the three major schools of magic, with one participant selected from each school by the Goblet of Fire. When Harry's",
      key: "harrypottergoble0000rowl_z6r7",
    },
    {
      id: 6,
      title: "Harry Potter and the Prisoner of Azkaban",
      thumbnail: "https://covers.openlibrary.org/b/id/12023557-L.jpg",
      description:
        "Harry Potter was a highly unusual boy in many ways.Edition Description",
      key: "harrypotterpriso0000rowl_g2m5",
    },
  ];
  books = books.map((el) => {
    el.description = el.description.split(" ").slice(0, 12).join(" ") + "...";
    return el;
  });
  console.log(books);
  return (
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {books.map(({ thumbnail, description, title, key }, k) => (
          <div className="col" key={k}>
            <div className="card shadow-sm">
              <img
                src={thumbnail}
                alt=""
                className="bd-placeholder-img card-img-top"
                width="100%"
                height={225}
              />
              <div className="card-body">
                <h2>{title}</h2>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => navigate("/book/" + key)}
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => navigate("/book/" + key)}
                    >
                      Chatroom
                    </button>
                  </div>
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
