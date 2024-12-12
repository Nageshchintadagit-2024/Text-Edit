import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainAppContainer,
  AppContainer,
  ImageContainer,
  TextEditorContainer,
  TextEditorHeading,
  WebsiteImage,
  TextsListContainer,
  TextAreaElement,
  ListItem,
  Button,
} from './styledComponents'

class TextEditor extends Component {
  state = {activeIcon: '', isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
    console.log('bold icon is clicked')
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
    console.log('italic icon is clicked')
  }

  onClickUndeline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
    console.log('underline icon is clicked')
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const activeBoldIconColor = isBold ? '#faff00' : '#f1f5f9'

    const activeItalicIconColor = isItalic ? '#faff00' : '#f1f5f9'

    const activeUnderlineIconColor = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <MainAppContainer>
        <AppContainer>
          <ImageContainer>
            <TextEditorHeading>Text Editor</TextEditorHeading>
            <WebsiteImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextEditorContainer>
            <TextsListContainer>
              <ListItem>
                <Button
                  type="button"
                  color={activeBoldIconColor}
                  onClick={this.onClickBold}
                  data-testid="bold"
                >
                  <VscBold size={28} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  color={activeItalicIconColor}
                  onClick={this.onClickItalic}
                  data-testid="italic"
                >
                  <GoItalic size={28} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  color={activeUnderlineIconColor}
                  onClick={this.onClickUndeline}
                  data-testid="underline"
                >
                  <AiOutlineUnderline size={28} />
                </Button>
              </ListItem>
            </TextsListContainer>
            <TextAreaElement
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </TextEditorContainer>
        </AppContainer>
      </MainAppContainer>
    )
  }
}

export default TextEditor
