import React from 'react';
class FinanceOptions extends Component {
   constructor(props) {
      super(props)
      this.state = { value: this.props.optionSelected }
   }
   updateState(value) {
      this.setState({ value })
   }
   render() {
      const otherSide = this.state.value === 'power' ? 'productPrice' : 'dark'
      const transformedProps = this.props.list.filter(char => char.side === this.state.value)
      return (
         <div>
            <button onClick={() => this.updateState(otherSide)}>Switch</button>
            {transformedProps.map(char =>
               <div key={char.name}>
                  <div>Character: {char.name}</div>
                  <div>Side: {char.side}</div>
               </div>
            )}
         </div>
      )
   }
}
ReactDOM.render (
   <FinanceOptions optionSelected={this.state.optionSelected} list={starWarsChars} />,
   document.getElementById('app')
)

export default FinanceOptions;