import { Button, Card, ListGroup } from "react-bootstrap";
import { DeleteCarros, ListarCarros } from "../../request";
import { useEffect, useState } from "react";

function BasicExample({ listaCarro }) {
  const [novaListaCarro, setNovaListaCarro] = useState(null)
  const handleDelete = async (id) => {
    await DeleteCarros(id);
    await ListarCarros().then(res => setNovaListaCarro(res.data));
  }
  useEffect(() => {
    if (listaCarro) {
      setNovaListaCarro([...listaCarro])
    }
  }, [listaCarro])

  useEffect(() => console.log(novaListaCarro), [novaListaCarro])


  return (
    novaListaCarro && ( novaListaCarro.map((carro) => (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{carro.name}</Card.Title>
          <Card.Text>
            Preço do carro = R${carro.preco}
          </Card.Text>
          <Button variant="primary" onClick={() => handleDelete(carro.id)}>Deletar </Button>
        </Card.Body>
      </Card>
    ))
  ));
}

export default BasicExample;