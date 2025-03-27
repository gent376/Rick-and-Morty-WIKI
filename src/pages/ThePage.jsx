import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CharacterList from "../components/CharacterList";
import Filters from "../components/Filters";

const ThePage = () => {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [sortBy, setSortBy] = useState("");
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-center min-h-screen items-center">
      <main className="flex flex-col">
        <header className="title-section flex items-center justify-between mt-[30px] mb-[50px]">
          <h1 className="title"> RICK AND MORTY </h1>
          <div className="mt-4 flex gap-4">
            <button
              className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
              onClick={() => i18n.changeLanguage("en")}
            >
              English
            </button>
            <button
              className="px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-all"
              onClick={() => i18n.changeLanguage("de")}
            >
              Deutsch
            </button>
          </div>
        </header>
        <section className="characters-section grid grid-cols-3 gap-4">
          <Filters
            status={status}
            setStatus={setStatus}
            species={species}
            setSpecies={setSpecies}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <CharacterList status={status} species={species} sortBy={sortBy} />
        </section>
      </main>
    </div>
  );
};

export default ThePage;
