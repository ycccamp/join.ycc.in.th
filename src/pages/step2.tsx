import React from 'react'
import {connect} from 'react-redux'
import styled from '@emotion/styled'

import {Backdrop} from '../components/Layout'
import ParentalForm from '../components/ParentalForm'

import {save, markNext} from '../ducks/submission'

const Title = styled.div`
  position: absolute;
  top: 1em;
  left: 2em;

  color: white;
  font-size: 1.8em;
`

const StepOne = ({save, markNext}) => (
  <Backdrop>
    <Title>STEP 2: ข้อมูลผู้ปกครอง</Title>
    <ParentalForm onSubmit={save} next={markNext} />
  </Backdrop>
)

const enhance = connect(
  null,
  {save, markNext}
)

export default enhance(StepOne)
