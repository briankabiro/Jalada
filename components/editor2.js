import {Editor, Raw} from 'slate'
import React from 'react'

const initialState = Raw.deserialize({
  nodes:[ 
    {
      kind:'block',
      type:'paragraph',
      nodes:[
        {
          kind:'text',
          "text":"text"
        }
      ]
    }
  ]
}, {terse: true})

const schema = {
  nodes: {
    'block-quote': props => <blockquote {...props.attributes}>{props.children}</blockquote>,
    'bulleted-list': props => <ul {...props.attributes}>{props.children}</ul>,
    'heading-one': props => <h1 {...props.attributes}>{props.children}</h1>,
    'heading-two': props => <h2 {...props.attributes}>{props.children}</h2>,
    'list-item': props => <li {...props.attributes}>{props.children}</li>,
    'numbered-list': props => <ol {...props.attributes}>{props.children}</ol>,
  },
  marks: {
    bold: {
      fontWeight: 'bold'
    },
    code: {
      fontFamily: 'monospace',
      backgroundColor: '#eee',
      padding: '3px',
      borderRadius: '4px'
    },
    italic: {
      fontStyle: 'italic'
    },
    underlined: {
      textDecoration: 'underline'
    }
  }
}

export default class Editor2 extends React.Component{
  
  state = {
    state: initialState,    
  }

  hasMark = (type) => {
    const {state} = this.state
    return state.marks.some(mark => mark.type == type)
  }

  hasBlock = (type) => {
    const {state} = this.state
    return state.blocks.some(node => node.type == type)
  }

  onChange = (state) => {
    this.setState({ state })
  }

  onKeyDown = (e, data, state) => {
    if(!data.isMod) return
      let mark

      switch(data.key){
        case 'b':
          mark = 'bold'
          break
        case 'i':
          mark = 'italic'
          break
        case 'u':
          mark = 'underlined'
        case '`':
          mark = 'code'
          break
        default:
          return
      }

      state = state
        .transform()
        .toggleMark(mark)
        .apply()

      e.preventDefault()
      return state
  }

  render = () => {
    return (
      <Editor
        state={this.state.state}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
        placeholder={'Start writing'}
        schema = {schema}
       />
    )
  }
}