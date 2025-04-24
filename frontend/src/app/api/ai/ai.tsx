 
//  openroute
 {
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface AiProps {
//   input: string;
//   onResponse?: (response: any) => void;
// }

// const Ai = ({ input, onResponse }: AiProps) => {
//   const [result, setResult] = useState<any>(null);
//   const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;

//   useEffect(() => {
//     if (!input) return;
//     console.log("AI input:", input); 
//     const callAI = async () => {
//         try {
//           const res = await axios.post(
//             "https://openrouter.ai/api/v1/chat/completions",
//             {
//               model: "mistral/mistral-7b-instruct",
//               messages: [{ role: "user", content: input }],
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${apiKey}`,
//                 "Content-Type": "application/json",
//               },
//             }
//           );
      
//           console.log("AI Response:", res); 
//           const raw = res.data.choices[0].message.content;
      
//           let extracted;
//           try {
//             const jsonMatch = raw.match(/```(?:json)?\s*([\s\S]*?)\s*```/) || [];
//             extracted = jsonMatch[1] ? JSON.parse(jsonMatch[1]) : JSON.parse(raw);
//           } catch (jsonError) {
//             extracted = raw;
//           }
      
//           setResult(extracted);
//           if (onResponse) onResponse(extracted);
//         } catch (error) {
//           console.error("AI Error:", error);
//           setResult({ error: "Failed to fetch AI response" });
//         }
//       };

//     callAI();
//   }, [input]);

//   return null;
// };

// export default Ai;

 }


// mistral
// {
import { useEffect, useState } from "react";
import axios from "axios";

interface AiProps {
  input: string;
  onResponse?: (response: any) => void;
}

const Ai = ({ input, onResponse }: AiProps) => {
  const [result, setResult] = useState<any>(null);
  const apiKey = process.env.NEXT_PUBLIC_MISTRAL_API_KEY; 

  useEffect(() => {
    if (!input) return;
  
    const callAI = async () => {
      try {
        if (!apiKey) throw new Error("API key missing");
  
        const res = await axios.post(
          "https://api.mistral.ai/v1/chat/completions",
          {
            model: "mistral-tiny",
            messages: [{ role: "user", content: input }],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        const raw = res.data.choices[0].message.content;
        setResult(raw);
        if (onResponse) onResponse(raw);
      } catch (error) {
        console.error("AI Error:", error);
        setResult({ error: "Failed to fetch AI response" });
      }
    };
  
    callAI();
  }, [input]);
  

  return null;
};

export default Ai;
// }
