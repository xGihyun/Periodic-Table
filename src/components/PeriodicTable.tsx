import React from "react";

type ElementListProps = {
  element: { [key: string]: string }[];
};

// Periodic table API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.PUBLIC_RAPID_API_KEY,
		'X-RapidAPI-Host': 'periodictable.p.rapidapi.com'
	}
};

const response = await fetch('https://periodictable.p.rapidapi.com/', options);
const data: { [key: string]: string }[] = await response.json();

const PeriodicTable = () => {

  // List of Elements
  function ElementList({ element }: ElementListProps) {

    const elements = element.map((item, index) => {

      // Try hard logic to properly position Lanthanoids and Actinoids
      let gridColumn;
      if (index > 55 && index < 71) {
        gridColumn = index - 52;
      } else if (index > 87 && index < 103) {
        gridColumn = index - 84;
      }
  
      return (
        <div
          className="element"
          key={index}
          data-name={item.name}
          data-group={item.groupBlock}
          style={{ gridColumn: gridColumn }}
        >
          <span className="2xl:text-xs text-2xs">{item.atomicNumber}</span>
          <span className="2xl:text-xl text-sm flex justify-center font-bold">{item.symbol}</span>
          <span className="2xl:text-xs text-2xs flex justify-center">{item.name}</span>
        </div>
      );
    });
  
    return <>{elements}</>;
  }
  
  // Memoized list of elements
  const MemoizedElementList = React.memo(ElementList);

  return (
    <div className="flex justify-center items-center">
      <div className="periodic-table">
        <MemoizedElementList element={data} />
      </div>
    </div>
  )
}

export default PeriodicTable