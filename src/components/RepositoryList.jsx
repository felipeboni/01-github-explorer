import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list mx-auto w-75 mt-5">
      <h1 className="text-center fw-bold mb-5">Lista de Repositórios</h1>

      <ul className="row justify-content-center">
        {repositories.map(repository => (
            <RepositoryItem repository={repository} />
        ))}
      </ul>
    </section>
  );
}
