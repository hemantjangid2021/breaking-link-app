// import React from 'react';
// import BrokenLinkChecker from './BrokenLinkChecker';

// function App() {
//     return (
//         <div className="App">
//             <BrokenLinkChecker />
//         </div>
//     );
// }

// export default App;




// import React, { useState } from 'react';
// import axios from 'axios';

// function BrokenLinkChecker() {
//     const [url, setUrl] = useState('');
//     const [results, setResults] = useState({ linkStatuses: [], metaTags: [], spellingErrors: [] });
//     const [error, setError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError(null);

//         try {
//             const response = await axios.post('http://localhost:5000/check-links', { url });
//             setResults(response.data);
//         } catch (err) {
//             setError('Error checking links. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h1>Broken Link Checker</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     value={url}
//                     onChange={(e) => setUrl(e.target.value)}
//                     placeholder="Enter a URL to check"
//                 />
//                 <button type="submit">Check Links</button>
//             </form>
//             {error && <p>{error}</p>}
//             <h2>Link Results</h2>
//             <ul>
//                 {results.linkStatuses.map((result, index) => (
//                     <li key={index}>
//                         <a href={result.link} target="_blank" rel="noopener noreferrer">
//                             {result.link}
//                         </a>
//                         {' '} - Status: {result.status}
//                         {result.redirectLoop && <span> (Redirect Loop)</span>}
//                         {' '} - Protocol: {result.isHttps ? 'HTTPS' : 'HTTP'}
//                     </li>
//                 ))}
//             </ul>
//             <h2>Meta Tags</h2>
//             <ul>
//                 {results.metaTags.map((tag, index) => (
//                     <li key={index}>{tag.name}: {tag.content}</li>
//                 ))}
//             </ul>
//             <h2>Spelling Errors</h2>
//             <ul>
//                 {results.spellingErrors.map((word, index) => (
//                     <li key={index}>{word}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default BrokenLinkChecker;



import React, { useState } from 'react';
import axios from 'axios';

function BrokenLinkChecker() {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState({ linkStatuses: [], metaTags: [], spellingErrors: [] });
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('http://localhost:5000/check-links', { url });
            setResults(response.data);
        } catch (err) {
            setError('Error checking links. Please try again.');
        }
    };

    return (
        <div>
            <h1>Broken Link Checker</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter a URL to check"
                />
                <button type="submit">Check Links</button>
            </form>
            {error && <p>{error}</p>}
            
            <h2>Link Results</h2>
            <ul>
                {results.linkStatuses?.map((result, index) => (
                    <li key={index}>
                        <a href={result.link} target="_blank" rel="noopener noreferrer">
                            {result.link}
                        </a>
                        {' '} - Status: {result.status}
                        {result.redirectLoop && <span> (Redirect Loop)</span>}
                        {' '} - Protocol: {result.isHttps ? 'HTTPS' : 'HTTP'}
                    </li>
                ))}
            </ul>
            
            <h2>Meta Tags</h2>
            <ul>
                {results.metaTags?.map((tag, index) => (
                    <li key={index}>{tag.name}: {tag.content}</li>
                ))}
            </ul>
            
            <h2>Spelling Errors</h2>
            <ul>
                {results.spellingErrors?.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
}

export default BrokenLinkChecker;
