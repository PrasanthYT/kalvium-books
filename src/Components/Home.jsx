import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import Navbar from "../layouts/Navbar";
import axios from "axios";
import Footer from "../layouts/Footer";

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setData(res.data.books);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="books">
        {searchTerm
          ? data
              .filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((book) => (
                <div key={book.id} className="book">
                  <img
                    className="thumb"
                    src={book.imageLinks.thumbnail}
                    alt=""
                  />
                  <div className="book-details">
                    <h4>{book.title}</h4>
                    <div className="align">
                      <p>{book.averageRating}🌟</p>
                      <p>Free</p>
                    </div>
                  </div>
                </div>
              ))
          : data.map((book) => (
              <div key={book.id} className="book">
                <img className="thumb" src={book.imageLinks.thumbnail} alt="" />
                <div className="book-details">
                  <h4>{book.title}</h4>
                  <div className="align">
                    <p>{book.averageRating}🌟</p>
                    <p>Free</p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <Footer/>
    </>
  );
}

export default Home;
