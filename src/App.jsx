import 'modern-normalize';
import { Container } from './components/common/Container.styled';
import { Title } from './components/common/Title.styled';
import { Form } from './components/Form/Form';
import { Filter } from './components/Filter/Filter';
import { ContactsList } from './components/Contacts/ContactsList';

const defaultList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export function App() {
  return (
    <Container>
      <Title>Contact App</Title>
      <Form />
      <Title>Search by name</Title>
      <Filter />
      <ContactsList />
    </Container>
  );
}
