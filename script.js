async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey=004aacd1-d626-4192-ae3b-6f631e88f0bb&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;
      const matchesList = data.data;
      if (!matchesList) return [];
      const relevantData = matchesList.map(
        (match) => `${match.name}, ${match.status}`
      );
      console.log({ relevantData });
      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match}</li>`)
        .join("");
      return relevantData;
    });
}
getMatchData();
