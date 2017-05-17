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
      <div>
        {this.renderToolbar()}
        {this.renderEditor()}
      </div>
    )
  }

  renderEditor = () => {
    return (
      <div>
        <Editor
          state={this.state.state}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          placeholder={'Start writing'}
          schema = {schema}
         />        
      </div>
    ) 
  }

  renderToolbar = () => {
    return(
      <div className= "menu toolbar-menu">
        {this.renderMarkButton('bold', 'format_bold')}
        {this.renderMarkButton('italic', 'format_italic')}
        {this.renderMarkButton('underlined', 'format_underlined')}
        {this.renderMarkButton('code', 'code')}
        <style jsx>{`
          .menu > * {
            display:inline-block;
          }    
          .menu > * + * {
            margin-left:15px;
          }
          .toolbar-menu{
            padding: 1px 0 17px 18px;
            margin:0 -20px;
            margin-bottom:20px;
            border-bottom: 2-x solid #eee;
          }
        `}
        </style>
        }
      </div>
    )
  }

  renderMarkButton = (type,icon) => {
    const isActive = this.hasMark(type)
    const onMouseDown = e => this.onClickMark(e, type)
    return (
      <span className="button" onMouseDown={onMouseDown} data-active={isActive}>
        <span className="material-icons">{icon}</span>
      </span>
    )    
  }  
}