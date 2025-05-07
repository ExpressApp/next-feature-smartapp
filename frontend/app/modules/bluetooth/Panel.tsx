import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'

const PanelDiv = styled.div`
  border: 1px solid var(--light-grey);
  padding: 0px;
`

const Title = styled.div`
  text-align: center;
  background-color: var(--light-grey);
  padding: 20px 0px;
  color: #333;
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Body = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: block;
`

const Item = styled.button`
  width: 100%;
  padding: 12px 0 12px 20px;
  background-color: ${props => (props.disabled ? 'var(--grey)' : 'var(--blue)')};
  margin-top: 10px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  border: 0;
`

const Icon = styled.div.attrs({ className: 'material-icons' })`
  font-size: 20px;
  display: block;
  width: 35px;
  min-width: 35px;
`

const SubItem = styled.button`
  width: calc(100% - 60px);
  padding: 12px 0 12px 20px;
  padding: 12px 0 12px 20px;
  background-color: var(--blue);
  text-align: left;
  color: #fff;
  margin: 10px 0 10px 60px;
  font-size: 14px;
  border: 0;
`

export const Panel: FC<{ children?: ReactElement[]; showLoader?: boolean; title: string }> = ({
  children,
  showLoader,
  title,
}) => {
  return (
    <PanelDiv>
      <Title>{title}</Title>
      {showLoader && (
        <Center>
          <Loader color="var(--light-grey)" />
        </Center>
      )}
      {!!children?.length && <Body>{children}</Body>}
    </PanelDiv>
  )
}

export const PanelItem: FC<{ text: string; onClick?: () => void; icon: string; disabled?: boolean }> = ({
  text,
  onClick,
  icon,
  disabled,
}) => {
  return (
    <Item onClick={onClick} disabled={disabled}>
      <Icon>{icon}</Icon>
      {text}
    </Item>
  )
}

export const PanelSubItem: FC<{ text: string; onClick?: () => void }> = ({ text, onClick }) => {
  return <SubItem onClick={onClick}>{text}</SubItem>
}
