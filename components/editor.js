import {Editor} from 'slate'
import React from 'react'

const initialState= Raw.deserialize({
  nodes:[
    {
      kind:'block',
      type:'paragraph',
      nodes:[
        {
          kind:'text',
          text:'A line of text in a paragraph'
        }
      ]
    }
  ]
}, {terse: true})

class App extends React.Component{
  state = {
    state: initialState
  }
  onChange = (state) => {
    this.setState({state})
  }

  render = () => {
    return (
      <Editor
        state={this.state.state}
        onChange={this.onChange}
       />
    )
  }
}