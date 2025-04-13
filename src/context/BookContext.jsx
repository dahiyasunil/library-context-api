import { createContext,useContext, useState } from "react";

const BookContext = createContext();

const useBookContext = useContext(BookContext);

export default useBookContext;

let books = [
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      status: "Unread",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      status: "Read",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      status: "Unread",
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      status: "Unread",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      status: "Unread",
    },
    {
      title: "You Are a Badass",
      author: "Jen Sincero",
      status: "Unread",
    },
    {
      title: "Can’t Hurt Me",
      author: "David Goggins",
      status: "Unread",
    },
    {
      title: "Awaken the Giant Within",
      author: "Tony Robbins",
      status: "Unread",
    },
    {
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      status: "Read",
    },
    {
      title: "Mindset: The New Psychology of Success",
      author: "Carol S. Dweck",
      status: "Unread",
    },
    {
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      status: "Unread",
    },
    {
      title: "Daring Greatly",
      author: "Brené Brown",
      status: "Unread",
    },
    {
      title: "Make Your Bed",
      author: "Admiral William H. McRaven",
      status: "Unread",
    },
    {
      title: "Deep Work",
      author: "Cal Newport",
      status: "Unread",
    },
    {
      title: "Grit: The Power of Passion and Perseverance",
      author: "Angela Duckworth",
      status: "Unread",
    },
  ];

  export function BookProvider({children}){
    const [bookList,setBookList]= useState(books);
    const [filteredBookList, setFilteredBookList] = useState(bookList);

    return (
        <BookContext.Provider value={{filteredBookList}} >
            {children}
        </BookContext.Provider>
    )
  }