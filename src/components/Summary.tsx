import * as React from 'react';
import checkIcon from '../images/check.svg';

const WebzzzContentSummary = ({ items }: { items: string[] }) => {
  const SummaryItems = items.map((item, index) => {
    return (
      <p key={index} className="flex items-center gap-1.5 my-1.5 text-smallMedium text-lightGrey">
        <img className="w-6 transform scale-150" src={checkIcon} alt="check"></img> {item}
      </p>
    );
  });

  return (
    <section>
      <h1 className="text-5xl">Laat je website maken!</h1>

      {SummaryItems}
    </section>
  );
};

export default WebzzzContentSummary;
