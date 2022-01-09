import "./CalculatorView.css"
import "./CalculatorViewDesktop.css"

export default function TipCalculator(props) {
    const tip_amounts: number[] = [5,10,15,25,50];
    const tips_li = tip_amounts.map(tip=>{
        let selectedOption = (!props.useCustomPercentage && tip === props.selectedTipPercentage)? true: false
        return (
            <li key={`tip_${tip}`} id={`tip_${tip}`} className={ selectedOption ? "percentage tip_selected":"percentage"}>
                <input 
                    id={`percentage_${tip}`} 
                    type="radio" 
                    name="percentage_val" 
                    value={`${tip}%`}
                    checked={selectedOption}
                    onChange={()=>props.updatePercentageOption(tip)}
                />
                <label className="pointer" htmlFor={`percentage_${tip}`}><span>{`${tip}%`}</span></label>
            </li> 
        )
    })

    return (
        <article id="tip_calculator">
            <section id="payment_info">
                <fieldset className="fld_amount">
                    <label id="lbl_amount" htmlFor="amount" className="fld_label">Bill</label>
                    <input 
                        type="number" 
                        id="amount"
                        min="0" 
                        className="fld_input pointer" 
                        placeholder={`${props.amount}`}
                        value={props.amount} 
                        onChange={(evt) => props.updateAmount(evt.target.value)}/>
                </fieldset>
                <fieldset className="fld_percentage">
                    <label htmlFor="tip_percentage" className="fld_label">Select Tip %</label>
                    <ul>
                        {tips_li}
                        <li id="custom_percentage">
                            <input 
                                type="number" 
                                min="0"
                                /* placeholder="Custom"  */
                                className="fld_input pointer"
                                placeholder={`Custom`} 
                                value={props.useCustomPercentage ? props.selectedTipPercentage : ''}
                                onChange={(evt) => props.setupCustomPercentageOption(evt.target.value)}
                            />
                        </li>
                    </ul>
                </fieldset>
                <fieldset className="fld_group_size">
                    <label id="lbl_group_size" htmlFor="group_size" className={`fld_label` }>Number of People  {props.hasZeroGroup ? <span className="zero_group_error">{"Can't be zero"}</span>:""}</label>
                    <input 
                        type="number" 
                        min="0"
                        id="group_size" 
                        className={`fld_input pointer  ${props.hasZeroGroup ? "zero_group_error":""}`} 
                        placeholder={`${props.groupSize}`} 
                        value={props.groupSize}
                        onChange={(evt) => props.updateGroupSize(evt.target.value)}/>
                </fieldset>
            </section>        
            <section id="results">
                <p><span className="lbl_results">Tip Amount<br/><small>&#47; person</small></span><span className="display_results">{`$${props.individualTip}`}</span></p>
                <p><span className="lbl_results">Total<br/><small>&#47; person</small></span><span className="display_results">{`$${props.individualAmount}`}</span></p>
                <input id="compute" className="lbl_reset pointer" type="button" value="RESET" onClick={props.reset}/>
            </section>
        </article>

    )
}