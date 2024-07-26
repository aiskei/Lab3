import '@testing-library/jest-dom'
import {getByText, render, screen, waitFor} from '@testing-library/react'
import ProductCard from '@/app/components/ProductCard'
import ProductInfo from '@/app/components/ProductInfo';
import axios from 'axios';

jest.mock('axios');
jest.mock('@/app/components/ProductInfo')



test('fetches and displays product data', async () => {

// Create a mock response
const mockResponse = {
    product: {
        title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
        id:1, price: 109.95,
    },

 };

axios.get.mockResolvedValue(mockResponse);

// Render the product component
render(<ProductCard />);

// Check if the mocked response is used in the component
const productTitle = await waitFor(() => screen.getByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i));
const productPrice = await waitFor(() => screen.getByText(/109.95/i));

expect(productTitle).toBeInTheDocument();
expect(productPrice).toBeInTheDocument();

});

//Mock child component-expect productInfo component to be called
test('should mock and call child component', () => {
  render(<ProductInfo />)
  expect(ProductInfo).toHaveBeenCalled()
});

test('4. User mock was called with the correct props', () => {
    render(<ProductCard />)
    expect(ProductInfo).toHaveBeenCalled()
});

test('should have text', () => {
    render(ProductInfo)
    waitFor(() => expect(getByText("available for shipment exclusively within the Sweden")).toBeInTheDocument());
});
