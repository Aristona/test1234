import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

import type { SearchBarProps } from './types';

import './index.scss';

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, defaultQuery = '' }) => {
  const [query, setQuery] = useState(defaultQuery);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const debouncedSearch = React.useCallback(debounce((searchQuery: string) => {
    onSearch(searchQuery);
  }, 500), [onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e?.target?.value || '';

    if (newQuery === query) {
      return;
    }

    setQuery(newQuery);
    debouncedSearch(newQuery);
  };

  return (
    <div className="com-SearchBar">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Type something..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}; 