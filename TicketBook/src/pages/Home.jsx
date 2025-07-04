import MovieCard from "../components/MovieCard";
import QuickBookForm from "../components/QuickBookForm";

export const movies = [
  {
    title: "Avengers: Endgame",
    poster: "https://tse4.mm.bing.net/th/id/OIP.WlZD3KowEJpjtGPSjLp5AwHaKx?cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "The epic finale to the Infinity Saga.",
    showTimes: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"]
  },
  {
    title: "Inception",
    poster: "https://th.bing.com/th/id/OIP.KvWY-Lps3p8FLMjUcFTK3wHaKz?w=206&h=301&c=7&r=0&o=7&cb=thvnextc1&dpr=1.3&pid=1.7&rm=3",
    description: "A mind-bending thriller by Christopher Nolan.",
    showTimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"]
  },
  {
    title: "Spider-Man: No Way Home",
    poster: "https://tse1.explicit.bing.net/th/id/OIP.FMrkGJ7l31vjneqmkGWgfwHaK_?cb=thvnextc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Spider-Man meets the multiverse.",
    showTimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"]
  }
];




export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <QuickBookForm />
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
      </div>
    </div>
  );
}
