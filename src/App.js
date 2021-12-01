import { useState } from 'react';

import Card from './components/Card';
import Form from './components/Form';
import Container from './components/Container'



function App() {
  const [user, setUser] = useState([])


  const submit = usuario => {
    setUser([
      ...user,
      usuario,
    ])
  }
  console.log(user);
  return (
    <div style={{ marginTop: '14%' }}>
      <Container>
        <Card>
          <div style={{ padding: 21 }}>
            <Form submit={submit} />
          </div>

        </Card>
        <Card>
          <ul>
            {user.map(userx =>

              <li key={userx.email}>{`${userx.name}, ${userx.lastname}, ${userx.email}`}</li>

            )}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;





// const [user, setUser] = useState([])
