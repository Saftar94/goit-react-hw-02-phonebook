import PropTypes from "prop-types";
import Contact from "./Contact";

const ConctactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map((item) => (
          <Contact
            key={item.id}
            name={item.name}
            number={item.number}
            id={item.id}
            deleteContact={deleteContact}
          />
        ))}
    </ul>
  );
};
ConctactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ConctactsList;
