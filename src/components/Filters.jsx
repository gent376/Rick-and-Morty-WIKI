import React from "react";
import { useTranslation } from "react-i18next";

const Filter = ({
  status,
  setStatus,
  species,
  setSpecies,
  sortBy,
  setSortBy,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 p-4">
      <select
        className="p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-white transition-all appearance-none"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option className="bg-black text-white p-2">
          {t("statusOptions.all")}
        </option>
        <option className="bg-black text-white p-2" value="Alive">
          {t("statusOptions.alive")}
        </option>
        <option className="bg-black text-white p-2" value="Dead">
          {t("statusOptions.dead")}
        </option>
        <option className="bg-black text-white p-2" value="unknown">
          {t("statusOptions.unknown")}
        </option>
      </select>

      <select
        className="p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-white transition-all appearance-none"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
      >
        <option className="bg-black text-white p-2">
          {t("speciesOptions.all")}
        </option>
        <option className="bg-black text-white p-2" value="Human">
          {t("speciesOptions.human")}
        </option>
        <option className="bg-black text-white p-2" value="Alien">
          {t("speciesOptions.alien")}
        </option>
      </select>

      <select
        className="p-2 bg-transparent text-white border-b border-gray-500 focus:outline-none focus:border-white transition-all appearance-none"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option className="bg-black text-white p-2">
          {t("sortingOptions.default")}
        </option>
        <option className="bg-black text-white p-2" value="name-asc">
          {t("sortingOptions.nameAsc")}
        </option>
        <option className="bg-black text-white p-2" value="name-desc">
          {t("sortingOptions.nameDesc")}
        </option>
        <option className="bg-black text-white p-2" value="origin-asc">
          {t("sortingOptions.originAsc")}
        </option>
        <option className="bg-black text-white p-2" value="origin-desc">
          {t("sortingOptions.originDesc")}
        </option>
      </select>

      <button
        className="p-2 mt-2 text-white bg-gray-800 rounded hover:bg-gray-700 transition-all"
        onClick={() => {
          setStatus("");
          setSpecies("");
          setSortBy("");
        }}
      >
        {t("filters.reset")}
      </button>
    </div>
  );
};

export default Filter;
