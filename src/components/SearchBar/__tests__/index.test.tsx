import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../index';

describe('SearchBar', () => {
  it('renders search input', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Type something...');
    expect(searchInput).toBeInTheDocument();
  });

  it('calls onSearch with debounced value', () => {
    jest.useFakeTimers();
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByPlaceholderText('Type something...');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    // Fast-forward timers
    jest.advanceTimersByTime(500);

    expect(mockOnSearch).toHaveBeenCalledWith('test');
    jest.useRealTimers();
  });

  it('updates input value when defaultQuery changes', () => {
    const mockOnSearch = jest.fn();
    const { rerender } = render(<SearchBar onSearch={mockOnSearch} defaultQuery="initial" />);

    const searchInput = screen.getByPlaceholderText('Type something...');
    expect(searchInput).toHaveValue('initial');

    rerender(<SearchBar onSearch={mockOnSearch} defaultQuery="updated" />);
    expect(searchInput).toHaveValue('updated');
  });
});
