import { useState } from "react";
import HomePageContent from "./content";
import LoginAnimation from "../LoginAnimation";

export default function Homepage() {
  const [isLoaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 1000)
  return isLoaded ? (
    <HomePageContent />
  ) : (
    <LoginAnimation />
  )
}