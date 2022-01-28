import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export default function BButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            displayName: 'b-button-icon',
            color: 'FireBrick',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <defs>
                <style>{`.cls-1{fill:currentColor;}`}</style>
            </defs>
            <path className="cls-1" d="M256,86.35A169.65,169.65,0,1,0,425.65,256,169.66,169.66,0,0,0,256,86.35Zm0,320.52c-83.19,0-150.87-67.68-150.87-150.87S172.81,105.13,256,105.13,406.87,172.81,406.87,256,339.19,406.87,256,406.87Z" />
            <path className="cls-1" d="M283.71,239.75q5.22-5.72,5.23-15.7,0-9.75-4.8-15.47a14.94,14.94,0,0,0-11.85-5.71H231.73v42.59H271A16.62,16.62,0,0,0,283.71,239.75Z" />
            <path className="cls-1" d="M289.58,278.05a18,18,0,0,0-5.55-4.88,14.23,14.23,0,0,0-7-1.78H231.73v44.48h43.76a17.53,17.53,0,0,0,7.58-1.66,18.16,18.16,0,0,0,6.08-4.64,22.65,22.65,0,0,0,4.06-7A24.62,24.62,0,0,0,294.7,294a27.22,27.22,0,0,0-1.39-8.69A24.93,24.93,0,0,0,289.58,278.05Z" />
            <path className="cls-1" d="M256,130.62A125.38,125.38,0,1,0,381.38,256,125.53,125.53,0,0,0,256,130.62Zm63.39,187.15A37.62,37.62,0,0,1,309,331.06a46.48,46.48,0,0,1-15.27,8.16,60.17,60.17,0,0,1-18.51,2.8H203.49V176.49H283a26.94,26.94,0,0,1,14,3.73,35.85,35.85,0,0,1,10.67,9.68,45.8,45.8,0,0,1,6.8,13.52,50.3,50.3,0,0,1,2.41,15.27,49.19,49.19,0,0,1-5.44,22.73,34.68,34.68,0,0,1-15.9,15.74,38.25,38.25,0,0,1,20.19,15q7.42,10.85,7.42,27.16A42.46,42.46,0,0,1,319.39,317.77Z" />
        </svg>
    </span>
}