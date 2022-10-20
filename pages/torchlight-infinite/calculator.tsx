import { TorchlightInfinitePageLayout } from './index'

const Calculator = () => {
  return (
    <div>calculator {process.env.NODE_ENV}</div>
  )
}

Calculator.getLayout = TorchlightInfinitePageLayout;

export default Calculator
