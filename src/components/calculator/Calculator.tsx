/* import "./Calculator.css" */
import {useState,useEffect} from 'react'
import  CalculatorView from './CalculatorView'

const currencyRound = (val: number =0) => {
    let sval:string = `${val}`
    let [dollar,cents] = sval.split('.') 
    //console.log(dollar,cents)
    if(!cents){
      cents = "00"
    }
    if(cents.length===1){
      cents += "0"
    }
    if(cents.length > 2){
      cents = cents.slice(0,2)
    }
    sval = `${dollar}.${cents}`
    return (parseFloat(sval.match(/(\d+)(.\d{2})*/)[0])).toFixed(2);
}

export default function TipCalculator(props) {
    let [amount,setAmount] = useState(0)
    let [groupSize, setGroupSize] = useState(5)
    let [tipPercentage,setTipPercentage] = useState(0)
    let [usingCustomPercentage,setUsingCustomPercentage] = useState(false);
    let [error,setError] = useState(false)

    useEffect(()=>{
        if (groupSize <= 0) {
            setError(true)
        } else {
            setError(false)
        }
    },[groupSize])

    const resetValues = () => {
        setAmount(0)
        setGroupSize(1)
        setTipPercentage(15)
        setUsingCustomPercentage(false)
        setError(false)
    }
    const handleGroupSize = (val: number) => {
        if(groupSize>=0) {
            setGroupSize(val)
        }
    }
    const handleAmountUpdate = (val: number) => {
        if(val >= 0) {
            setAmount(val)
        }
    }
    const handlePercentageChange = (val: number ) => {
        setUsingCustomPercentage(false)
        setTipPercentage(val)
    }

    const handleCustomPercentageChange = (val: number) => {
        setUsingCustomPercentage(true)
        if(val >= 0) {
            setTipPercentage(val)
        }
    }

    const amountDivided =  (amount)/groupSize
    const tipDivided = currencyRound((amount*(tipPercentage/100))/groupSize)
    const totalPerMember = currencyRound(amountDivided + parseFloat(tipDivided))
    return (
        <CalculatorView 
            amount={amount}
            individualTip={tipDivided} 
            individualAmount={totalPerMember} 
            groupSize={groupSize}
            selectedTipPercentage={tipPercentage}
            useCustomPercentage={usingCustomPercentage} 
            reset={resetValues}
            updateAmount={handleAmountUpdate}
            updateGroupSize={handleGroupSize}
            updatePercentageOption={handlePercentageChange}
            setupCustomPercentageOption={handleCustomPercentageChange}
            hasZeroGroup={error}
            />
    )
}