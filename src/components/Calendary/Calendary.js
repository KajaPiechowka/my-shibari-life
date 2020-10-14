import React from "react"
import styled from "styled-components"
import { colors, fonts } from "../../style/variables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

const CalendayHolder = styled.div`
  width: 90vw;
  height: 90vh;
  background-color: ${colors.window};
  position: absolute;
  top: 12rem;
  left: 5vw;
  z-index: 2;
`

const CalendaryHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  height: 15%;
  margin-top: 3%;
`
const DateWrapper = styled.div`
  text-align: center;
  font-family: ${fonts.text};
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 2rem;
  }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  &:hover {
    color: ${colors.icon};
    transform: scale(1.1);
  }
`
const WeekDaysWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem 0 1rem;
  div {
    font-size: 2rem;
    font-weight: 600;
    font-family: ${fonts.main};
  }
`
const MonthDaysWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  font-family: ${fonts.text};
  div {
    background-color: ${colors.whiteShadow};

    width: 14.28%;
    heiht: 16.6%;
    font-size: 1.5rem;
    color: ${colors.text};

    padding-left: 1rem;
  }
`

const Calendary = () => {
  return (
    <CalendayHolder>
      <CalendaryHeaderWrapper>
        <ArrowIcon icon={faChevronLeft} />
        <DateWrapper>
          <h1>Październik</h1>
          <p>2020</p>
        </DateWrapper>
        <ArrowIcon icon={faChevronRight} />
      </CalendaryHeaderWrapper>
      <WeekDaysWrapper>
        <div>Pon</div>
        <div>Wt</div>
        <div>Śr</div>
        <div>Czw</div>
        <div>Pi</div>
        <div>Sb</div>
        <div>Nd</div>
      </WeekDaysWrapper>
      <MonthDaysWrapper>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
      </MonthDaysWrapper>
    </CalendayHolder>
  )
}

export default Calendary
