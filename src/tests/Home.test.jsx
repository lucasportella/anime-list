/* eslint-disable no-undef */
import {
  render, screen, fireEvent, waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('Tests Home Page', () => {
  test('AnimeList section elements', async () => {
    render(<App />);
    const titles = await screen.findAllByRole('heading', { level: 3 });
    const images = await screen.findAllByAltText(/Anime Cover/i);
    expect(titles).toHaveLength(100);
    expect(images).toHaveLength(100);
  });

  test('Pagination buttons logic', async () => {
    render(<App />);
    // by default prev page should not show
    const nextPageButton = screen.getByText(/Next Page/);
    let previousPageButton = screen.queryByText(/Previous Page/);
    expect(nextPageButton).toBeVisible();
    expect(previousPageButton).not.toBeInTheDocument();

    // prev page should show now
    fireEvent.click(nextPageButton);
    previousPageButton = await screen.findByText(/Previous Page/);
    expect(previousPageButton).toBeVisible();

    // if pagination index is below 2, prev page should not show anymore
    fireEvent.click(previousPageButton);
    await waitForElementToBeRemoved(() => screen.queryByText(/Previous Page/));
    previousPageButton = screen.queryByText(/Previous Page/);
    expect(previousPageButton).not.toBeInTheDocument();
  });
});
