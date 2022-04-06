import {
  render, screen, fireEvent, waitForElementToBeRemoved,
} from '@testing-library/react';
import App from '../App';

test('pagination buttons logic', async () => {
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
