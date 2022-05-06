import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
  const { activitati, sterge } = props;
  const lista = activitati.map((act) => {
    return (
      <Activitate
        ora={act.ora}
        loc={act.loc}
        titlu={act.titlu}
        descriere={act.descriere}
        sterge={sterge}
        key={act.id}
        id={act.id}
      />
    );
  });

  const stil = {
    h2: { textAlign: "center" }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Agenda
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
};

export default Program;
