import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export function DpadUpButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            color: 'Gainsboro',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>{'.cls-1{fill:currentColor;}.cls-2{fill:none;stroke:currentColor;stroke-miterlimit:10;stroke-width:20px;}'}</style>
            </defs>
            <path className="cls-1" d="M200.44,96.53s-9.91,4-10.71,17.4v97.93H313.9l0-97.93c-.81-13.38-10.71-17.4-10.71-17.4-9.63-5.62-50-5.62-50-5.62S210.07,90.91,200.44,96.53Z" />
            <path className="cls-2" d="M200.44,96.53s-9.91,4-10.71,17.4v87.93H101.8c-13.38.81-17.4,10.71-17.4,10.71-5.62,9.64-5.62,50.05-5.62,50.05s0,43.09,5.62,52.73c0,0,4,9.9,17.4,10.7l87.93,0v88c.8,13.38,10.71,17.39,10.71,17.39,9.63,5.62,50.05,5.62,50.05,5.62s43.09,0,52.72-5.62c0,0,9.91-4,10.71-17.39l0-87.93h87.91c13.38-.8,17.4-10.7,17.4-10.7,5.62-9.64,5.62-50.05,5.62-50.05s0-43.09-5.62-52.73c0,0-4-9.9-17.4-10.71h-88l0-87.93c-.81-13.38-10.71-17.4-10.71-17.4-9.63-5.62-50-5.62-50-5.62S210.07,90.91,200.44,96.53Z" fill="currentColor" />
        </svg>
    </span>
}