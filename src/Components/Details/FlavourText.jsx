import PropTypes from "prop-types";

const FlavourText = ({ abilities }) => {
  const getFlavourText = [];
  abilities.forEach((ability) => {
    ability.flavor_text_entries.forEach((entry) => {
      if (
        entry.language.name === "en" &&
        getFlavourText.indexOf(entry.flavor_text) == -1
      ) {
        getFlavourText.push(entry.flavor_text);
      }
    });
  });
  return (
    <div className="w-full font-inglobal flex flex-col gap-4">
      <div className="w-full">
        {getFlavourText.map((text, idx) => {
          return <p key={idx}>{text} </p>;
        })}
      </div>
    </div>
  );
};

FlavourText.propTypes = {
  abilities: PropTypes.array.isRequired,
};

export default FlavourText;
