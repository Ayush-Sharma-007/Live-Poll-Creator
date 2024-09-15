import React from 'react'

const Poll = () => {
    const [options, setOptions] = useState([
        { id: 1, text: 'Option 1', votes: 0 },
        { id: 2, text: 'Option 2', votes: 0 },
        { id: 3, text: 'Option 3', votes: 0 },
      ]);
    
      const [selectedOption, setSelectedOption] = useState(null);
    
      const handleVote = (optionId) => {
        const updatedOptions = options.map((option) => {
          if (option.id === optionId) {
            return { ...option, votes: option.votes + 1 };
          }
          return option;
        });
        setOptions(updatedOptions);
        setSelectedOption(optionId);
      };
    
      const handleReset = () => {
        setOptions(options.map((option) => ({ ...option, votes: 0 })));
        setSelectedOption(null);
      };
    
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <Head>
      <title>Online Poll</title>
    </Head>
    <h2 className="text-2xl font-bold mb-4">Poll Question</h2>
    <ul className="list-none mb-4">
      {options.map((option) => (
        <li key={option.id} className="mb-2">
          <input
            type="radio"
            name="option"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={() => handleVote(option.id)}
            className="mr-2"
          />
          <span className="text-lg">{option.text} ({option.votes} votes)</span>
        </li>
      ))}
    </ul>
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleReset}
    >
      Reset Poll
    </button>
  </div>
  )
}

export default Poll