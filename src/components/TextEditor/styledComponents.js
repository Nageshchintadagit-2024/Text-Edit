import styled from 'styled-components'

export const MainAppContainer = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
justify-content:center;
min-height:100vh;
background-color:#25262c;
max-width:1200px;
`
export const AppContainer = styled.div`

display:flex;
flex-direction:row;
align-items:center;
min-height:80vh;
background-color:#1b1c22;
width:80%;
padding:24px;
`

export const ImageContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
background-color:transparent;

`
export const TextEditorContainer = styled.div`
display:flex;
flex-direction:column;
background-color:#25262c;
border:2px solid #334155;
border-radius:16px;
width:50%;
height:80vh;
`

export const TextEditorHeading = styled.h1`
color:white;
font-size:36px;
font-weight:bold;
font-family:"Roboto";

`

export const WebsiteImage = styled.img`

width:80%;
height:58%;

`

export const TextsListContainer = styled.ul`
padding-left:0px;
height:60px;
padding-left:0px;
display:flex;
flex-direction:row;
align-items:center;
padding-left:22px;
padding-right:22px;
padding-top:10px;
padding-botton:10px;
border-bottom:2px solid  #334155;

`
export const ListItem = styled.li`
border:none;
list-style:none;
height:36px;
width:36px;
`

export const TextAreaElement = styled.textarea`

background-color:transparent;
flex-grow:1;
outline:none;
border:none;
color:white;
font-size:20px;
font-family:"Roboto";
font-style:${props => (props.isItalic ? 'italic' : 'normal')};
font-weight:${props => (props.isBold ? 'bold' : 'normal')};
text-decoration:${props => (props.isUnderline ? 'underline' : 'normal')};
`

export const Button = styled.button`
border:none;
background-color:transparent;
height:36px;
width:36px;
cursor:pointer;
color:${props => props.color};
`
