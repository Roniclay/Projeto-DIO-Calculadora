import Input from './components/Input/Input';
import Button from './components/Button';
import { create, all } from 'mathjs';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

function App() {

  const math = create(all)
  const [currentNumber, setCurrentNumber] = useState('0')
  let novoValor = ''

  const handleClear = () => {
    setCurrentNumber('0')
  }

  const handleRubber = () => {
    setCurrentNumber(prev => `${prev.slice(0, -1)}`)
  }

  const handleAddNumber = (number) => {
    novoValor += (currentNumber === '0' ? '' : currentNumber) + number

    setCurrentNumber(novoValor)
    
  }

  const handleResolve = (expression) => {
    try {
      const resultado = math.evaluate(expression);
      setCurrentNumber(resultado.toString());
    } catch (error) {
      setCurrentNumber('Erro na expressão');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="C" onClick={handleClear}/>
          <Button label="<=" onClick={handleRubber}/>
          <Button label="%" onClick={() => handleAddNumber('%')}/>
          <Button label="/" onClick={() => handleAddNumber('/')}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={() => handleAddNumber('*')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="-" onClick={() => handleAddNumber('-')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="+" onClick={() => handleAddNumber('+'.toString())}/>
        </Row>
        <Row>
          <Button label="|"/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="," onClick={() => handleAddNumber(',')}/>
          <Button label="=" onClick={() => handleResolve(currentNumber)}/>
        </Row>
        
      </Content> 
    </Container>
  );
}

export default App;
