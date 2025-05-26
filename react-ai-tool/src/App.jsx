import { RiHistoryFill } from "react-icons/ri";
import { IoSendSharp } from "react-icons/io5";
import { useState } from "react";
import { URL, KEY } from "./geminiApi";
import Answer from "./component/Answer";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState(undefined);

  const payload = {
    contents: [
      {
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ],
  };

  const handlePromptResponse = async () => {
    let response = await fetch(URL + KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    response = await response.json();
    if (response && response.candidates && response.candidates[0]) {
      const text = response.candidates[0].content.parts[0].text;
      extractStringArr(text);
    } else {
      console.error("Unexpected response format:", response);
    }
  };
function extractStringArr(inputText) {
  const lines = inputText
    .split(/\n|\*\s+/) // split by newlines or "* " (asterisk + space)
    .map(line => 
      line
        .trim()                        // remove extra spaces
        .replace(/\*\*+/g, '')         // remove any '**' patterns globally
        .replace(/\*$/, '')            // remove single trailing '*' at the end of line
    )
    .filter(line => line.length > 0);   // remove empty lines

  setResult(lines);
}


  
  return (
    <div className="grid grid-cols-5  h-screen text-center">
      {/* Sidebar */}
<div className="col-span-1 bg-gradient-to-r from-violet-600 to-indigo-600 flex flex-col items-center p-4 gap-4 shadow-lg">
  <div className="font-bold text-2xl text-white flex items-center gap-2">
    <h1>Recent Search</h1>
    <RiHistoryFill size={25} />
  </div>
</div>


      {/* Main content */}
      <div className="col-span-4 flex flex-col h-screen">
        <div className="flex items-center justify-center py-15 pb-1">
          <h1 className="bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text font-bold text-4xl">
            Hello! How can I help you today?
          </h1>
        </div>

        {/* Display result */}
        <div className="flex-1 h-screen p-4 overflow-auto">
             <ul>
                  {
                     result ? result.map((item, index) => <li key={index}><Answer ans={item}/></li> ) : null
                  } 
             </ul>
        </div>

        {/* Prompt input */}
        <div className="flex items-center justify-center pb-16">
          <div className="text-white w-1/2 rounded-full border border-indigo-600 flex items-center p-1">
            <input
              type="text"
              placeholder="Ask me anything"
              className="w-full h-full p-4 outline-none flex-1"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
<button
  type="submit"
  className="ml-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-500 hover:opacity-150 p-3 rounded-full text-black transition-all duration-300 ease-in-out hover:scale-105"
  onClick={handlePromptResponse}
>
  <IoSendSharp size={30} />
</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

// import { RiHistoryFill } from "react-icons/ri";
// import { IoSendSharp } from "react-icons/io5";
// import { useState } from "react";
// import { URL, KEY } from "./geminiApi";

// const App = () => {
//   const [prompt, setPrompt] = useState("");
//   const [result, setResult] = useState(undefined);

//   const payload = {
//     contents: [
//       {
//         parts: [
//           {
//             text: prompt,
//           },
//         ],
//       },
//     ],
//   };

//   const handlePromptResponse = async () => {
//     let response = await fetch(URL + KEY, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload), // JS Object to String
//     });

//     response = await response.json();
//     if (response) {
//       setResult(response.candidates[0].content.parts[0].text);
//     }
//   };

//   function extractStringArr(result) {
//     // 1. Split text by lines or bullet characters
//     const lines = text
//       .split("\n")
//       .flatMap((line) => line.split("-"))
//       .flatMap((line) => line.split("*"));

//     // 2. Clean and trim lines
//     const cleaned = lines
//       .map((line) => line.trim())
//       .filter((line) => line.length > 0 && line.length < 120);

//     // 3. Filter lines that are likely greetings
//     const greetings = cleaned.filter((line) => {
//       // Simple heuristic: skip if it sounds like a section, instruction, or explanation
//       const lower = line.toLowerCase();
//       if (
//         lower.includes("consider") ||
//         lower.includes("thing") ||
//         lower.includes("context") ||
//         lower.includes("relationship") ||
//         lower.includes("personality") ||
//         lower.includes("time of day") ||
//         lower.startsWith("okay") ||
//         lower.startsWith("here are")
//       ) {
//         return false;
//       }
//       // Skip lines with multiple sentences
//       if (line.includes(".") && line.split(".").length > 2) return false;

//       return true;
//     });

//     // return greetings;
//     setResult(greetings);
//   }

//   return (
//     <div className="grid grid-cols-5  h-screen text-center">
//       {/* 1.side bar  */}
//       <div className="col-span-1 bg-emerald-300  flex flex-col items-center p-4 gap-4">
//         <div className="font-bold text-2xl text-black flex items-center gap-2">
//           <h1>Recent Search</h1>
//           <RiHistoryFill size={25} />
//         </div>
//       </div>

//       {/* 2.main content */}
//       <div className="col-span-4 flex flex-col h-screen">
//         {/* 2a. Heading */}
//         <div className="flex items-center justify-center py-10">
//           <h1 className="text-emerald-300 font-bold text-4xl">
//             Hello, What can I help with?
//           </h1>
//         </div>

//         {/* Spacer to push content to bottom */}
//         <div className="flex-1 text-emerald-300 h-screen">{result}</div>

//         {/* 2b. prompt */}
//         <div className="flex items-center justify-center pb-16">
//           <div className="text-white w-1/2 rounded-full border border-emerald-300 flex items-center p-1">
//             <input
//               type="text"
//               placeholder="Ask me anything"
//               className="w-full h-full p-4 outline-none flex-1"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//             />
//             <button
//               type="submit"
//               className="ml-2 bg-emerald-300 p-3 rounded-full text-black"
//               onClick={handlePromptResponse}
//             >
//               <IoSendSharp size={30} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
