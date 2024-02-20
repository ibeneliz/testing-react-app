import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('<Async />', () => {
    test('renders posts if request succeds',async () => {
        //Arrange
        render(<Async />);
    
        //Act
        //... Nothing
    
        //Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});