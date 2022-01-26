import { baseIconStyles } from '.'
import { ControllerButtonIconProps, IControllerButtonStyles } from '../../types'
import { mergeStyleSets } from '@fluentui/react'

export function BButtonIcon({ styles }: ControllerButtonIconProps) {

    const defaultStyles: IControllerButtonStyles = {
        root: {
            color: 'FireBrick',
        }
    }
    const classes = mergeStyleSets(baseIconStyles, defaultStyles, styles);

    return <span className={classes.root}>
        <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden viewBox="0 0 512 512" role="img" preserveAspectRatio="xMidYMid meet">
            <path d="M283.71,239.75q5.22-5.72,5.23-15.7,0-9.75-4.8-15.47a14.94,14.94,0,0,0-11.85-5.71H231.73v42.59H271A16.62,16.62,0,0,0,283.71,239.75Z" fill="currentColor" />
            <path d="M289.58,278.05a18,18,0,0,0-5.55-4.88,14.23,14.23,0,0,0-7-1.78H231.73v44.48h43.76a17.53,17.53,0,0,0,7.58-1.66,18.16,18.16,0,0,0,6.08-4.64,22.65,22.65,0,0,0,4.06-7A24.62,24.62,0,0,0,294.7,294a27.22,27.22,0,0,0-1.39-8.69A24.93,24.93,0,0,0,289.58,278.05Z" fill="currentColor" />
            <path d="M256,103.51c-84.08,0-152.49,68.41-152.49,152.49S171.92,408.49,256,408.49,408.49,340.08,408.49,256,340.08,103.51,256,103.51Zm63.39,214.26A37.62,37.62,0,0,1,309,331.06a46.48,46.48,0,0,1-15.27,8.16,60.17,60.17,0,0,1-18.51,2.8H203.49V176.49H283a26.94,26.94,0,0,1,14,3.73,35.85,35.85,0,0,1,10.67,9.68,45.8,45.8,0,0,1,6.8,13.52,50.3,50.3,0,0,1,2.41,15.27,49.19,49.19,0,0,1-5.44,22.73,34.68,34.68,0,0,1-15.9,15.74,38.25,38.25,0,0,1,20.19,15q7.42,10.85,7.42,27.16A42.46,42.46,0,0,1,319.39,317.77Z" fill="currentColor" />
        </svg>
    </span>
}