import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/Queries";
import LoadingSpinner from "../components/Loading";

const CharacterList = ({ status, species, sortBy }) => {
  const { t } = useTranslation();

  const { loading, data, error, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page: 1, status, species },
    notifyOnNetworkStatusChange: true,
  });

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    if (inView && data?.characters.info.next) {
      fetchMore({
        variables: { page: data.characters.info.next },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prevResult;
          return {
            characters: {
              ...fetchMoreResult.characters,
              results: [
                ...prevResult.characters.results,
                ...fetchMoreResult.characters.results,
              ],
              info: fetchMoreResult.characters.info,
            },
          };
        },
      });
    }
  }, [inView, data, fetchMore]);

  if (loading && !data) return <LoadingSpinner />;
  if (error) return `Error! ${error.message}`;

  const sortedCharacters = [...data.characters.results].sort((a, b) => {
    if (sortBy === "name-asc") return a.name.localeCompare(b.name);
    if (sortBy === "name-desc") return b.name.localeCompare(a.name);
    if (sortBy === "origin-asc")
      return a.origin.name.localeCompare(b.origin.name);
    if (sortBy === "origin-desc")
      return b.origin.name.localeCompare(a.origin.name);
    return 0;
  });

  return (
    <div className="characters col-span-2 overflow-y-auto overflow-x-hidden h-[450px] px-[10px] rounded-xl">
      <div className="grid grid-cols-3 gap-4 ">
        {sortedCharacters.map((char) => (
          <div className="relative group " key={char.id}>
            <img
              src={char.image}
              alt={char.name}
              className="w-full h-auto transition-all duration-300 ease-in-out group-hover:brightness-30 rounded-3xl"
            />
            <div className="info-section absolute bottom-1 left-1  text-white p-2 rounded-xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 text-lg">
              <h3>
                Name: <span>{char.name}</span>
              </h3>
              <p>
                {t("character.species")}:
                <span>
                  {t(`character.speciesValues.${char.species}`, {
                    defaultValue: char.species,
                  })}
                </span>
              </p>
              <p>
                {t("character.status")}:
                <span>
                  {t(`character.statusValues.${char.status}`, {
                    defaultValue: char.status,
                  })}
                </span>
              </p>
              <p>
                {t("character.gender")}:
                <span>
                  {t(`character.genderValues.${char.gender}`, {
                    defaultValue: char.gender,
                  })}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={ref}
        style={{ height: "10px", background: "transparent" }}
      ></div>
    </div>
  );
};

export default CharacterList;
