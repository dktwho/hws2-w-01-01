import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}


// button:"SuperButton_button__RgNqq"
// default:"SuperButton_default__cRs0d"
// disabled:"SuperButton_disabled__xplNv"
// red:"SuperButton_red__r9bX9"
// secondary:"SuperButton_secondary__FadbU"
const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${s.button} ${disabled ? s.disabled  : xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default} `
        // + (className ? ' button' + className : '') // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
