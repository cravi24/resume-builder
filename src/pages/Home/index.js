import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import content from '../../assets/js/let-vs-const-1.md';

const HomePage = () => {
  const [text1, setText] = useState('');
  useEffect(() => {
    fetch(content)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setText(text);
      });
  });
  return (
    <div className="container">
      <section />
      <ReactMarkdown>{text1}</ReactMarkdown>
      <section />
    </div>
  );
};

export default HomePage;
