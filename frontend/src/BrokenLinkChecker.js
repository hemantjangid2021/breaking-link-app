import React, { useState } from 'react';
import axios from 'axios';

function BrokenLinkChecker() {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState([]);
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
            <ul>
                {results.map((result, index) => (
                    <li key={index}>
                        <a href={result.link} target="_blank" rel="noopener noreferrer">
                            {result.link}
                        </a>{' '}
                        - Status: {result.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BrokenLinkChecker;
