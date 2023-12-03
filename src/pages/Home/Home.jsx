import { Button, Text, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Text>New Car Rental in Ukraine with Address Delivery within an Hour</Text>
      <Button to={'/catalog'}>Catalog</Button>
    </Wrapper>
  );
}