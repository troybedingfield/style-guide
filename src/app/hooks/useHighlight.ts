import { useState, useEffect, useCallback } from 'react';

interface HighlightedText {
    parts: ({ text: string; highlighted: boolean })[];
    originalText: string;
}
// eslint-disable-next-line
const useHighlightSearch = (data: any, searchText: string, dataKey: string): HighlightedText[] => {
    const [highlightedData, setHighlightedData] = useState<HighlightedText[]>([]);
    const [searchTerm, setSearchTerm] = useState(searchText);
    // eslint-disable-next-line
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        if (!searchTerm) {
            // eslint-disable-next-line
            setFilteredData(data);
        } else {
            // eslint-disable-next-line
            const results = filterJson(data, searchTerm);
            setFilteredData(results);
        }
    }, [searchTerm, data]);
    // eslint-disable-next-line
    const filterJson = (data: any, searchTerm: string) => {
        // const lowerSearchTerm = searchTerm.toLowerCase();
        // return JSON.stringify(data, null, 2).split('\n').filter(line => line.toLowerCase().includes(lowerSearchTerm)).join('\n')
        // eslint-disable-next-line
        return data.filter((d: { meta: string | string[]; }) => [searchTerm].every(e => d.meta.includes(e)))
    };

    const highlightText = useCallback((text: string): { text: string; highlighted: boolean }[] => {
        if (!searchText) return [{ text, highlighted: false }];

        const parts: { text: string; highlighted: boolean }[] = [];
        let remainingText = text;
        let index = remainingText.toLowerCase().indexOf(searchText.toLowerCase());

        while (index !== -1) {
            if (index > 0) {
                parts.push({ text: remainingText.substring(0, index), highlighted: false });
            }
            parts.push({ text: remainingText.substring(index, index + searchText.length), highlighted: true });
            remainingText = remainingText.substring(index + searchText.length);
            index = remainingText.toLowerCase().indexOf(searchText.toLowerCase());
        }

        if (remainingText.length > 0) {
            parts.push({ text: remainingText, highlighted: false });
        }

        return parts;
    }, [searchText]);



    useEffect(() => {
        if (!filteredData || !Array.isArray(filteredData)) {
            setHighlightedData([]);
            return;
        }

        const newHighlightedData = filteredData.map((item) => {
            // eslint-disable-next-line
            const text = item[dataKey] ? String(item[dataKey]) : '';
            return { parts: highlightText(text), originalText: text };
        });

        setHighlightedData(newHighlightedData);
    }, [filteredData, searchText, dataKey, highlightText]);

    return highlightedData;
};

export default useHighlightSearch;