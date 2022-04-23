import "./grid.css";
export default function grid() {
  const books = [
    {
      id: 1,
      title: "The One World Schoolhouse: Education Reimagined",
      author: "Sal Khan",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5T54jWoGvIdAl-k3Wlp7bZe6puWhpGlF-cuOL3MKs&usqp=CAE&s",
      description:
        "A free, world-class education for anyone, anywhere: this is the goal of the Khan Academy, a passion project that grew from an ex-engineer and hedge funder's online tutoring sessions with his niece, who was struggling with algebra, into a worldwide phenomenon. ",
      reads: 11233,
      rating: 4.7,
    },
    {
      id: 2,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 3,
      title: "Education for critical consciousness",
      author: "Paulo Freire",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLXPYDVevrnu1pSKgPM5nw_gOWpfsQ26kzoMRx2C6MoDa4So9M_6a9Hoz&s=5",
      description:
        "Famous for his advocacy of 'critical pedagogy', Paulo Freire was Latin America's foremost educationalist, a thinker and writer whose work and ideas continue to exert enormous influence in education throughout the world today.",
      reads: 15230,
      rating: 4.8,
    },
    {
      id: 4,
      title: "The Science of Self-Learning",
      author: "Peter Hollins",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOE3ZkIj358vlg9M7YVSFI8FiHR89mY5vcC-sYJUFKqz9wWl_n2KunqWU&s=5",
      description:
        "How to learn effectively when you have to be both the teacher and student. Work smarter and save yourself countless hours. Self-learning is not just about performing better in the classroom or the office.",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 5,
      title: "The Years That Matter Most",
      author: "Paul Tough",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBR3_iPLRsOVyX8FhFvd3Q83VbmaCIatRrssjgo6XB3bGgm2zmjA_C9ND&s=5",
      description:
        "What has gone wrong in our universities? And how do we make it right?When Amy applied to university, she thought she’d be judged purely on her merits. ...",
      reads: 12100,
      rating: 4.6,
    },
    {
      id: 6,
      title: "Algorithms to Live By",
      author: "Brian Christian and Thomas L. Griffiths",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbW5mtanDzzshzz6Erayu8mECXoeoBTq9Zp_xNZBbZ0YXQP062goDu1u1D&s=5",
      description:
        "A fascinating exploration of how computer algorithms can be applied to our everyday lives.",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 7,
      title: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBR3_iPLRsOVyX8FhFvd3Q83VbmaCIatRrssjgo6XB3bGgm2zmjA_C9ND&s=5",
      description:
        "Cracking the Coding Interview: 189 Programming Questions and Solutions is a book by Gayle Laakmann McDowell about coding interviews.",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 8,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 9,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 10,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 11,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
    {
      id: 12,
      title: "Design for how People Learn",
      author: "Julie Dirksen",
      thumbnail:
        "data:image/jpeg;base64,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",
      description:
        "Products, technologies, and workplaces change so quickly today that everyone is continually learning. Many of us are also teaching, even when it's not in our job descriptions. Whether it's giving a presentation, writing documentation, or creating a website or blog, we need and want to share our knowledge with other people. ",
      reads: 15000,
      rating: 4.6,
    },
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {books.map(({ thumbnail, description }, key) => (
          <div className="col" key={key}>
            <div className="card shadow-sm">
              <img
                src={thumbnail}
                alt=""
                className="bd-placeholder-img card-img-top"
                width="100%"
                height={225}
              />
              <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Read
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
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
